'use client';

import { Button } from "@/app/ui/button/button";
import { redirect } from 'next/navigation';
import { ChatHistoryEntry } from "@/app/lib/text-generation/types";


/**
 * Renders a suggestion button for the navigation chat.
 * After a simulated delay, the chat history state and model answer state are updated.
 * @param props.setLoadingState - State setter for parent's loading state.
 * @param props.setChatHistory - State setter for chat history.
 * @param props.setModelAnswer - State setter for model answer, which the parent will render.
 * @param props.suggestionText - Text to display on the button and add to the chat history.
 * @param props.pregeneratedAnswer - Pre-generated answer to set as the model answer and add to the chat history.
 * @param props.destinationSectionId - ID of the section to scroll to.
 * @returns The rendered Suggestion Button.
 */
export default function SuggestionButton (
  {setLoadingState, setChatHistory, setModelAnswer, suggestionText, pregeneratedAnswer, destinationSectionId }
  : {
    setLoadingState: React.Dispatch<React.SetStateAction<"loading"| "idle">>,
    setChatHistory: React.Dispatch<React.SetStateAction<ChatHistoryEntry[]>>,
    setModelAnswer: React.Dispatch<React.SetStateAction<string>>,
    suggestionText: string,
    pregeneratedAnswer: string,
    destinationSectionId?: string,
  }
) {
  return (
    <Button
    onClick={async () => {
      // set loading state to "loading" before the simulated delay
      setLoadingState("loading");
      // simulate a delay of 1 second
      await new Promise(resolve => setTimeout(resolve, 1000));
      // update chat history and model answer states:
      setChatHistory(prev => [...prev,
        {type: "user", message: suggestionText},
        {type: "model", message: pregeneratedAnswer }
      ]);
      setModelAnswer(pregeneratedAnswer);
      // set loading state back to "idle"
      setLoadingState("idle");
      // redirect to the destination section if provided
      if (destinationSectionId) {
        redirect(`/#${destinationSectionId}`);
      }
    }}
    >
      { suggestionText }
    </Button>
  );
}