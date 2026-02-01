import styles from "./navigation-chat.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { Input } from "@/app/ui/input/input";
import { Button } from "@/app/ui/button/button";
import useRedirect from "@/app/hooks/use-redirect";
import { ChatHistoryEntry } from "@/app/lib/text-generation/types";
import { useActionState, useEffect, useState } from "react";
import action from "./action";
import Link from "next/link";

export function ChatForm(
  {
    loadingState,
    setLoadingState,
    chatHistory,
    setChatHistory,
    setErrorMessages,
    setModelAnswer,
  }: {
    loadingState: "loading" | "idle";
    setLoadingState: (state: "loading" | "idle") => void;
    chatHistory: ChatHistoryEntry[];
    setChatHistory: (history: ChatHistoryEntry[]) => void;
    setErrorMessages: (errors: string) => void;
    setModelAnswer: (answer: string) => void;
  }
) {

  // State for managed user input:
  const [userInput, setUserInput] = useState<string>("");
  

  const redirect = useRedirect();

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

    // Update error messages state:
    let errors: string[] = [];
    if (formState.errorMessage) {
      errors.push(formState.errorMessage);
    }
    if (formState.fieldErrors?.userInput) {
      errors.push(...formState.fieldErrors.userInput);
    }
    if (formState.fieldErrors?.chatHistory) {
      errors.push(...formState.fieldErrors.chatHistory);
    }
    setErrorMessages(errors.join(", "));

  }, [formState]);

  
  return (
    <>
      <form
      action={formAction}
      onSubmit={() => {
        setUserInput("");
        setLoadingState("loading");
        // go to home page to ensure scrolling is possible when answer is generated
        redirect.setPathname("/");
      }}
      className={styles.form}
      >
        <Input
        placeholder="Type your own question..."
        id="userInput"
        name="userInput"
        value={userInput}
        onChange={(e) =>{ if (e.target.value.length < 1000) setUserInput(e.target.value)}}
        disabled={loadingState === "loading"}
        />

        <Button
        type="submit"
        disabled={loadingState === "loading"}
        >
          <FontAwesomeIcon icon={faPaperPlane} className={styles.icon}/>
        </Button>
        
      </form>

      <span className={styles.disclaimer}>
        Messages are processed using the Gemini API.
        Please avoid entering personal or sensitive data. <Link href="/privacy-policy">Privacy&nbsp;Policy</Link>
      </span>
    </>
  );
}

export function ChatFormSkeleton () {
  return (
    <>
      <form className={styles.form}>
        <Input
        placeholder="Type your own question..."
        disabled
        />

        <Button
        disabled
        >
          <FontAwesomeIcon icon={faPaperPlane} className={styles.icon}/>
        </Button>
        
      </form>

      <span className={styles.disclaimer}>
        Messages are processed using the Gemini API.
        Please avoid entering personal or sensitive data. <Link href="/privacy-policy">Privacy&nbsp;Policy</Link>
      </span>
    </>
  );
}