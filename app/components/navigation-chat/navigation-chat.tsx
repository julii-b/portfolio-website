'use client';

import styles from "./navigation-chat.module.css";
import generateChatResponse from "@/app/lib/text-generation/generateChatResponse";
import { ChatHistoryEntry, ChatResponse } from "@/app/lib/text-generation/types";
import { Input } from "@/app/ui/input/input";
import { useEffect, useState } from "react";
import { redirect } from 'next/navigation';
import { Button } from "@/app/ui/button/button";
import RobotIcon from "./robot-icon/robot-icon";
import { faAngleRight, faCaretRight, faPaperPlane, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SuggestionButton from "./suggestion-button/suggestion-button";

/**
 * Renders the chat interface which allows users to interact with the AI and navigate the website.
 * @returns The rendered component.
 */
export default function NavigationChat() {

  const initialMessage: ChatResponse = { answer: "Hello! :) I'm here to help you learn more about Julius. I can provide information about his projects, education, work experience, skills, and languages. Feel free to ask me anything, or I can direct you to a specific section of the website." };
  useEffect(() => {
    setChatHistory([{type: "model", message: initialMessage.answer}]);
  }, []);

  // State to manage the state of the text generation:
  const [state, setState] = useState<("loading"| "idle")>("idle");
  // State for managed user input:
  const [userInput, setUserInput] = useState<string>("");
  // State for most recent model answer, which will be rendered:
  const [modelAnswer, setModelAnswer] = useState<string>(initialMessage.answer);
  // State for chat history:
  const [chatHistory, setChatHistory] = useState<ChatHistoryEntry[]>([]);

  async function handleChatInput(userPrompt: string) {
    setState("loading");

    // Add user's input to the chat history:
    const newHistory: ChatHistoryEntry[] = [...chatHistory, {type: "user", message: userPrompt}];
    setChatHistory(newHistory);
    // Generate the model's response, add it to the chat history, and update the model answer state:
    const response = await generateChatResponse(newHistory);
    setChatHistory(prev => [...prev, {type: "model", message: response.answer}]);
    setModelAnswer(response.answer);
    // Scroll to section if the model response includes a scroll_to_section function call:
    if (response.function_name === "scroll_to_section" && response.parameters?.section_name) {
      const section = response.parameters.section_name;
      redirect(`/#${section}`);
    }

    setState("idle");
  }

  return (
    <div className={styles.scrollableContainer}>
      <nav className={styles.nav}>

        {/** Chat output in speech bubble with robot avatar: */}
        <div className={styles.speechBubble}>
          <div className={styles.chatOutput}>{modelAnswer}</div>
        </div>
        <div className={styles.robotIconContainer}>
          <RobotIcon state={state} />
        </div>

        <div className={styles.suggestions}>

          <p>Suggestions:</p>

          <SuggestionButton
            setLoadingState={setState}
            setChatHistory={setChatHistory}
            setModelAnswer={setModelAnswer}
            suggestionText="Show me his projects!"
            pregeneratedAnswer="Julius presents three projects on his website: a personal portfolio website (the one you are seeing right now),
            SimplePolls, and GuessTheFlag. The portfolio website is built with Next.js,
            SimplePolls is a full-stack application with a React frontend and an Express backend,
            while GuessTheFlag is a fun way to test your flag knowledge built with React.
            I am now scrolling to the Projects section for you."
            destinationSectionId="projects"
          />

          <SuggestionButton
            setLoadingState={setState}
            setChatHistory={setChatHistory}
            setModelAnswer={setModelAnswer}
            suggestionText="What is his educational background?"
            pregeneratedAnswer="Julius holds a B.Sc. in Computer Science from FH Aachen University of Applied Sciences,
            graduating with distinction (top 5%) between 2020 and 2024.
            He also started a Multimedia Communication and Documentation Bachelor's program at TH Aschaffenburg University of Applied Sciences,
            but switched to Computer Science.
            His bachelor's thesis focused on a prototype implementation of Retrieval-Augmented Generation and the evaluation of major LLMs.
            I'll take you to the Education section now."
            destinationSectionId="education"
          />

          <SuggestionButton
            setLoadingState={setState}
            setChatHistory={setChatHistory}
            setModelAnswer={setModelAnswer}
            suggestionText="Where does he currently work?"
            pregeneratedAnswer="Julius currently works at the International German School of Brussels (iDSB) in IT support and administration,
            and he also develops internal apps and small tools to improve processes.
            I'll take you to the Work Experience section now."
            destinationSectionId="work-experience"
          />

          <SuggestionButton
            setLoadingState={setState}
            setChatHistory={setChatHistory}
            setModelAnswer={setModelAnswer}
            suggestionText="Which languages does he speak?"
            pregeneratedAnswer="Julius is fluent in German and English and is currently at an intermediate level in French (B1).
            He is actively improving his French through classes and daily conversations since moving to Brussels, and uses both German and English at work.
            I am now scrolling to the Languages section for more details!"
            destinationSectionId="languages"
          />

        </div>


        {/** Chat input form: */}
        <form
        onSubmit={(e) => {
          e.preventDefault();
          handleChatInput(userInput);
          setUserInput("");
        }}
        className={styles.form}
        >
          <Input
          placeholder="Type your own question..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)} />

          <Button type="submit">
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
          
        </form>
      </nav>
    </div>
  );
}