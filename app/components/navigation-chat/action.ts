'use server';
import generateChatResponse from "@/app/lib/text-generation/generateChatResponse";
import { ChatHistoryEntry, ChatHistoryEntrySchema, ChatResponse } from "@/app/lib/text-generation/types";
import { z } from "zod";

// Define the schema for the form data using zod:
const chatFormSchema = z.object({
  userInput: z.string()
  .min(1, "Please enter your message")
  .max(1000, "Your message is too long"),
});

// Define the type for the returned formState:
type FormState = {
  chatHistory?: ChatHistoryEntry[];
  errorMessage?: string;
  fieldErrors?: {
    userInput?: string[];
    chatHistory?: string[];
  };
}

export default async function action (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {

  // Parse the form data using Zod:
  const parsed = chatFormSchema.safeParse({
    userInput: formData.get("userInput"),
  });

  // return state with field errors if parsing is unsuccessful:
  if (!parsed.success) {
    const error = parsed.error.flatten();
    return {
      fieldErrors: error.fieldErrors,
    };
  }
  const { userInput } = parsed.data;

  try {
    // Generate the chat response, updated and return chat history:
    let newChatHistory: ChatHistoryEntry[] = prevState.chatHistory || [];
    newChatHistory = [...newChatHistory, {type: "user", message: userInput}];
    const chatResponse: ChatResponse = await generateChatResponse(newChatHistory);
    newChatHistory = [...newChatHistory, {type: "model", message: chatResponse}];
    console.log("Updated chat history:", newChatHistory);
    return { chatHistory: newChatHistory };
    
  } catch (error) {
    return {
      errorMessage: "Server error. Please try again.",
    };
  }
}
