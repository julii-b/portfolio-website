'use client';

import styles from "./navigation-chat.module.css";
import Link from "next/link";
import generateChatResponse from "@/app/lib/text-generation/generateChatResponse";
import { ChatHistoryEntry, ChatResponse } from "@/app/lib/text-generation/types";
import { Input } from "@/app/ui/input/input";
import { useEffect, useState } from "react";
import { redirect } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Button } from "@/app/ui/button/button";
import RobotIcon from "./robot-icon/robot-icon";
import { faAngleRight, faCaretRight, faPaperPlane, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavigationChat() {

  const initialMessage: ChatResponse = { answer: "Hello! :) I'm here to help you learn more about Julius. I can provide information about his projects, education, work experience, skills, and languages. Feel free to ask me anything, or I can direct you to a specific section of the website." };
  useEffect(() => {
    setChatHistory([{type: "model", message: initialMessage.answer}]);
  }, []);

  const [state, setState] = useState<("loading"| "idle")>("idle");
  const [userInput, setUserInput] = useState<string>("");
  const [modelAnswer, setModelAnswer] = useState<string>(initialMessage.answer);
  const [chatHistory, setChatHistory] = useState<ChatHistoryEntry[]>([]);

  

  async function handleChatInput(userPrompt: string) {
    setState("loading");

    const newHistory: ChatHistoryEntry[] = [...chatHistory, {type: "user", message: userPrompt}];
    setChatHistory(newHistory);

    const response = await generateChatResponse(newHistory);
    setState("idle");
    setChatHistory(prev => [...prev, {type: "model", message: response.answer}]);
    setModelAnswer(response.answer);
    if (response.function_name === "scroll_to_section" && response.parameters?.section_name) {
      const section = response.parameters.section_name;
      redirect(`/#${section}`);
    }
  }

  return (
    <div className={styles.scrollableContainer}>
      <nav className={styles.nav}>
      
        <div className={styles.speechBubble}>
          <div className={styles.chatOutput}>{modelAnswer}</div>
        </div>

        <div className={styles.robotIconContainer}>
          <RobotIcon state={state} />
        </div>

        <div className={styles.suggestions}>

          <p>Suggestions:</p>

          <Button onClick={async () => {
            setState("loading");
            await new Promise(resolve => setTimeout(resolve, 1000));
            const answer = "Julius presents three projects on his website: a personal portfolio website (the one you are seeing right now), SimplePolls, and GuessTheFlag. The portfolio website is built with Next.js, SimplePolls is a full-stack application with a React frontend and an Express backend, while GuessTheFlag is a fun way to test your flag knowledge built with React. I am now scrolling to the Projects section for you.";
            setChatHistory(prev => [...prev,
              {type: "user", message: "Show me his projects!"},
              {type: "model", message: answer }
            ]);
            setModelAnswer(answer);
            setState("idle");
            redirect("/#projects");
          }}>
            Show me his projects!
          </Button>

          <Button onClick={async () => {
            setState("loading");
            await new Promise(resolve => setTimeout(resolve, 1000));
            const answer = "Julius holds a B.Sc. in Computer Science from FH Aachen University of Applied Sciences, graduating with distinction (top 5%) between 2020 and 2024. He also started a Multimedia Communication and Documentation Bachelor's program at TH Aschaffenburg University of Applied Sciences, but switched to Computer Science. His bachelor's thesis focused on a prototype implementation of Retrieval-Augmented Generation and the evaluation of major LLMs. I'll take you to the Education section now."
            setChatHistory(prev => [...prev,
              {type: "user", message: "What is his educational background?"},
              {type: "model", message: answer }
            ]);
            setModelAnswer(answer);
            setState("idle");
            redirect("/#education");
          }}>
            What is his educational background?
          </Button>

          <Button onClick={async () => {
            setState("loading");
            await new Promise(resolve => setTimeout(resolve, 1000));
            const answer = "Julius currently works at the International German School of Brussels (iDSB) in IT support and administration, and he also develops internal apps and small tools to improve processes. I'll take you to the Work Experience section now."
            setChatHistory(prev => [...prev,
              {type: "user", message: "Where does he currently work?"},
              {type: "model", message: answer }
            ]);
            setModelAnswer(answer);
            setState("idle");
            redirect("/#work-experience");
          }}>
            Where does he currently work?
          </Button>

          <Button onClick={async () => {
            setState("loading");
            await new Promise(resolve => setTimeout(resolve, 1000));
            const answer = "Julius is fluent in German and English and is currently at an intermediate level in French (B1). He is actively improving his French through classes and daily conversations since moving to Brussels, and uses both German and English at work. I am now scrolling to the Languages section for more details!";
            setChatHistory(prev => [...prev,
              {type: "user", message: "Which languages does he speak?"},
              {type: "model", message: answer }
            ]);
            setModelAnswer(answer);
            setState("idle");
            redirect("/#languages");
          }}>
            Which languages does he speak?
          </Button>

        </div>

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