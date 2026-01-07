'use client';

import styles from "./navigation-chat.module.css";
import generateChatResponse from "@/app/lib/text-generation/generateChatResponse";
import { ChatHistoryEntry } from "@/app/lib/text-generation/types";
import { Input } from "@/app/ui/input/input";
import { useState, useActionState, useEffect } from "react";
import { Button } from "@/app/ui/button/button";
import RobotIcon from "./robot-icon/robot-icon";
import { faBars, faChevronDown, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SuggestionButton from "./suggestions/suggestion-button";
import useRedirect from "@/app/hooks/use-redirect";
import { motion } from "motion/react";
import Form from "next/form";
import action from "./action";
import { form, object } from "motion/react-client";
import Suggestions from "./suggestions/suggestions";

/**
 * Renders the chat interface which allows users to interact with the AI and navigate the website.
 * @returns The rendered component.
 */
export default function NavigationChat() {

  const initialModelAnswer = "Hello! :) I'm here to help you learn more about Julius. I can provide information about his projects, education, work experience, skills, and languages. Feel free to ask me anything, or I can direct you to a specific section of the website.";

  const redirect = useRedirect();
  // State to manage the nav visibility: on mobile:
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);
  // State to manage the state of the text generation:
  const [loadingState, setLoadingState] = useState<("loading"| "idle")>("idle");
  // State for managed user input:
  const [userInput, setUserInput] = useState<string>("");
  // State for most recent model answer, which will be rendered:
  const [modelAnswer, setModelAnswer] = useState<string>(initialModelAnswer);

  // State for chat history in component:
  const [chatHistory, setChatHistory] = useState<ChatHistoryEntry[]>([]);
  // Initialize formState with chat history. formAction will update formState:
  const [formState, formAction] = useActionState(action, { chatHistory });

  // Handle updates to formState:
  useEffect(() => {
    setLoadingState("idle");

    // Update chatHistory state:
    if (formState.chatHistory && formState.chatHistory.length > 0) {
      setChatHistory(formState.chatHistory);

      // Update model answer state (which is rendered in speech bubble) and handle scrolling:
      const lastMessage = formState.chatHistory[formState.chatHistory.length - 1];
      if (typeof lastMessage.message === "object" && lastMessage.message.answer) { // Check if last message is from model (has .answer)
        // Update model answer state:
        setModelAnswer(lastMessage.message.answer);
        // Scroll to section if the model response includes a scroll_to_section function call:
        if (lastMessage.message.function_name === "scroll_to_section" && lastMessage.message.parameters?.section_name) {
          const section = lastMessage.message.parameters.section_name;
          redirect.scrollTo(section);
        }
      }
    }
  }, [formState]);


  return (
    <>
      {/** Button to open/close nav on mobile: */}
      <Button
      className={styles.openChatButton}
      onClick={() => {
        setIsNavVisible(!isNavVisible);
      }}
      >
        {isNavVisible ? (
          <FontAwesomeIcon icon={faChevronDown} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </Button>

      {/** Navigation chat container: */}
      <motion.div
      className={
        `${!isNavVisible && styles.notVisibleOnMobile} ${styles.scrollableContainer}`
      }
      initial={{ y: 20, opacity: 0.9 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ amount: 0.7 }}
      transition={{ type: "tween", duration: 0.2 }}
      >

        <nav className={styles.nav}>

          {/** Chat output in speech bubble with robot avatar: */}
          <div className={styles.speechBubble}>
            <div className={styles.chatOutput}>{modelAnswer}</div>
          </div>
          <div className={styles.robotIconContainer}>
            <RobotIcon state={loadingState} />
          </div>

          {/** Suggestion buttons: */}
          <div className={styles.suggestions}>
            <Suggestions
            setLoadingState={setLoadingState}
            setChatHistory={setChatHistory}
            setModelAnswer={setModelAnswer}
            />
          </div>


          {/** Chat input form: */}
          <form
          action={formAction}
          onSubmit={() => {
            setUserInput("");
            setLoadingState("loading");
          }}
          className={styles.form}
          >
            <Input
            placeholder="Type your own question..."
            id="userInput"
            name="userInput"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={loadingState === "loading"}
            />

            <Button
            type="submit"
            disabled={loadingState === "loading"}
            >
              <FontAwesomeIcon icon={faPaperPlane} className={styles.icon}/>
            </Button>
            
          </form>
        </nav>
      </motion.div>
    </>
  );
}