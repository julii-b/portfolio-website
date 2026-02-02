'use client';

import styles from "./navigation-chat.module.css";
import { ChatHistoryEntry } from "@/app/lib/text-generation/types";
import { useState, Suspense } from "react";
import { Button } from "@/app/ui/button/button";
import RobotIcon from "./robot-icon/robot-icon";
import { faBars, faChevronDown, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import Suggestions from "./suggestions/suggestions";
import { ChatForm, ChatFormSkeleton } from "./chatForm";
import SpeechBubble from "./speech-bubble/speech-bubble";

/**
 * Renders the chat interface which allows users to interact with the AI and navigate the website.
 * @returns The rendered component.
 */
export default function NavigationChat() {

  const initialModelAnswer = "Hello! :) I'm here to help you learn more about Julius. I can provide information about his projects, education, work experience, skills, and languages. Feel free to ask me anything, or I can direct you to a specific section of the website.";

  // State to manage the nav visibility: on mobile:
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);
  // State to manage the state of the text generation:
  const [loadingState, setLoadingState] = useState<("loading"| "idle")>("idle");
  
  // State for most recent model answer, which will be rendered:
  const [modelAnswer, setModelAnswer] = useState<string>(initialModelAnswer);
  

  // State for chat history in component:
  const [chatHistory, setChatHistory] = useState<ChatHistoryEntry[]>([]);
  
  // State for error messages:
  const [errorMessages, setErrorMessages] = useState<string>("");
  


  return (
    <>
      {/** Button to open/close nav on mobile: */}
      <div className={styles.chatButtonContiner}>
        <Button
        className={
          `${isNavVisible ? styles.closeChatButton : styles.openChatButton}`
        }
        aria-label={isNavVisible ? "Close chat navigation" : "Open chat navigation"}
        aria-expanded={isNavVisible}
        aria-controls="chat-navigation"
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
      </div>

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

        <nav
        className={styles.nav}
         id="chat-navigation" 
         aria-label="navigate the site using a chat bot"
        >

          {/** Chat output in speech bubble with robot avatar: */}
          <div className={styles.speechBubbleAndIconContainer}>
            <div className={styles.spacerTop}></div>
            <SpeechBubble
              errorMessages={errorMessages}
              modelAnswer={modelAnswer}
              loadingState={loadingState}
            />
            <div className={styles.robotIconContainer}>
              <RobotIcon state={loadingState} />
            </div>
            <div className={styles.spacerBottom}></div>
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
          <Suspense fallback={<ChatFormSkeleton />}>
          <ChatForm
          loadingState={loadingState}
          setLoadingState={setLoadingState}
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
          setModelAnswer={setModelAnswer}
          setErrorMessages={setErrorMessages}
          />
          </Suspense>
        </nav>
      </motion.div>
    </>
  );
}