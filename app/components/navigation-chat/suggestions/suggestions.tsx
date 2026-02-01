import { ChatHistoryEntry } from "@/app/lib/text-generation/types";
import SuggestionButton from "./suggestion-button";
import { Suspense } from "react";
import { Button } from "@/app/ui/button/button";

export default function Suggestions (
  {setLoadingState, setChatHistory, setModelAnswer }
  : {
    setLoadingState: React.Dispatch<React.SetStateAction<"loading"| "idle">>,
    setChatHistory: React.Dispatch<React.SetStateAction<ChatHistoryEntry[]>>,
    setModelAnswer: React.Dispatch<React.SetStateAction<string>>,
  }
) {
  return (
    <>
      <p>Suggestions:</p>

      <Suspense fallback={
        <>
          <Button disabled >Show me his projects!</Button>
          <Button disabled >What is his educational background?</Button>
          <Button disabled >Where does he currently work?</Button>
          <Button disabled >Which languages does he speak?</Button>
        </>
      }>
        <SuggestionButton
          setLoadingState={setLoadingState}
          setChatHistory={setChatHistory}
          setModelAnswer={setModelAnswer}
          suggestionText="Show me his projects!"
          pregeneratedAnswer="Julius presents three projects on his website: a personal portfolio website (the one you are seeing right now),
          SimplePolls, and GuessTheFlag. The portfolio website is built with Next.js,
          SimplePolls is a full-stack application with a React frontend and an Express backend,
          while GuessTheFlag is a fun way to test your flag knowledge built with React.
          I am now scrolling to the Projects section for you."
          destinationSectionId="project-portfolio-website"
        />

        <SuggestionButton
          setLoadingState={setLoadingState}
          setChatHistory={setChatHistory}
          setModelAnswer={setModelAnswer}
          suggestionText="What is his educational background?"
          pregeneratedAnswer="Julius holds a B.Sc. in Computer Science from FH Aachen University of Applied Sciences,
          graduating with distinction (top 5%) between 2020 and 2024.
          He also started a Multimedia Communication and Documentation Bachelor's program at TH Aschaffenburg University of Applied Sciences,
          but switched to Computer Science.
          His bachelor's thesis focused on a prototype implementation of Retrieval-Augmented Generation and the evaluation of major LLMs.
          I'll take you to the Education section now."
          destinationSectionId="education-computer-science"
        />

        <SuggestionButton
          setLoadingState={setLoadingState}
          setChatHistory={setChatHistory}
          setModelAnswer={setModelAnswer}
          suggestionText="Where does he currently work?"
          pregeneratedAnswer="Julius currently works at the International German School of Brussels (iDSB) in IT support and administration,
          and he also develops internal apps and small tools to improve processes.
          I'll take you to the Work Experience section now."
          destinationSectionId="work-idsb"
        />

        <SuggestionButton
          setLoadingState={setLoadingState}
          setChatHistory={setChatHistory}
          setModelAnswer={setModelAnswer}
          suggestionText="Which languages does he speak?"
          pregeneratedAnswer="Julius is fluent in German and English and is currently at an intermediate level in French (B1).
          He is actively improving his French through classes and daily conversations since moving to Brussels, and uses both German and English at work.
          I am now scrolling to the Languages section for more details!"
          destinationSectionId="language-german"
        />
      </Suspense>
    </>
  );
}