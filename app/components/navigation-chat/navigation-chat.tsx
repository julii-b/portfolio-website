'use client';

import styles from "./navigation-chat.module.css";
import Link from "next/link";
import { generateChatResponse, ChatResponse } from "./chat";
import { Input } from "@/app/ui/input/input";
import { useState } from "react";
import { redirect } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function NavigationChat() {

  const [response, setResponse] = useState<ChatResponse | undefined>();

  const debouncedOnChange = useDebouncedCallback(async (userPrompt: string) => {
    setResponse({answer: "loading..."});
    console.log("User prompt:", userPrompt);
    const response = await generateChatResponse(userPrompt);
    setResponse(response);
    if (response.function_name === "scroll_to_section" && response.parameters?.section_name) {
      const section = response.parameters.section_name;
      redirect(`/#${section}`);
    }
  }, 1000);

  return (
    <nav className={styles.nav}>
      {response && <p>{response.answer}</p> }

      <Link href="/#projects">Projects</Link>
      <Link href="/#education">Education</Link>
      <Link href="/#work-experience">Work Experience</Link>
      <Link href="/#languages">Languages</Link>
      <Link href="/#contact-me">Contact Me</Link>

      <Input onChange={async (e) => {
        debouncedOnChange(e.target.value);
      }} />
    </nav>
  );
}