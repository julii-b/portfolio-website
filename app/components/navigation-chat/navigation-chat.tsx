'use client';

import styles from "./navigation-chat.module.css";
import Link from "next/link";
import { generateChatResponse, type ChatResponse, type ChatHistoryEntry } from "./chat";
import { Input } from "@/app/ui/input/input";
import { useEffect, useState } from "react";
import { redirect } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Button } from "@/app/ui/button/button";

export default function NavigationChat() {

  const [chatHistory, setChatHistory] = useState<ChatHistoryEntry[]>([]);

  const initialMessage: ChatResponse = { answer: "Hello there! I'm here to help you learn more about Julius. I can provide information about his projects, education, work experience, skills, and languages. Feel free to ask me anything, or I can direct you to a specific section of the website." };
  useEffect(() => {
    setChatHistory([{type: "model", message: initialMessage.answer}]);
  }, []);
  
  const [responseMessage, setResponseMessage] = useState<ChatResponse>(initialMessage);

  async function handleChatInput(userPrompt: string) {
    setResponseMessage({answer: "loading..."});

    const newHistory: ChatHistoryEntry[] = [...chatHistory, {type: "user", message: userPrompt}];

    setChatHistory(newHistory);
    console.log("Current chat history:", newHistory);
    const response = await generateChatResponse(newHistory);
    setChatHistory(prev => [...prev, {type: "model", message: response.answer}]);
    setResponseMessage(response);
    if (response.function_name === "scroll_to_section" && response.parameters?.section_name) {
      const section = response.parameters.section_name;
      redirect(`/#${section}`);
    }
  }

  const debouncedOnChange = useDebouncedCallback(handleChatInput, 2000);

  return (
    <nav className={styles.nav}>
      {responseMessage && <p>{responseMessage.answer}</p> }

      <Link href="/#projects">Projects</Link>
      <Link href="/#education">Education</Link>
      <Link href="/#work-experience">Work Experience</Link>
      <Link href="/#languages">Languages</Link>
      <Link href="/#contact-form">Contact Me</Link>


      <Input onChange={async (e) => {
        debouncedOnChange(e.target.value);
      }} />
    </nav>
  );
}