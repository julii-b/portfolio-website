'use server';
import useRateLimiter from "@/app/hooks/use-rate-limiter";
import { getClientIpInServerAction } from "@/app/lib/get-client-ip";
import generateChatResponse from "@/app/lib/text-generation/generateChatResponse";
import { ChatHistoryEntry, ChatHistoryEntrySchema, ChatResponse } from "@/app/lib/text-generation/types";
import { RateLimiterRes } from "rate-limiter-flexible";
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

  // Rate limiting:
  const rateLimiter = useRateLimiter("ch-b", 60, 10); // 10 messages per minute per user
  const clientIp = await getClientIpInServerAction();
  try {
    await rateLimiter.consume(clientIp);
  } catch (error) {
    if (error instanceof RateLimiterRes) {
      const secondsBeforeNext = Math.floor(error.msBeforeNext / 1000);
      return {errorMessage: `I'm currently experiencing a high volume of requests. Please try again in ${secondsBeforeNext} seconds. :)`};
    };
    return {errorMessage: "An unexpected error occurred. Please try again later. :)"};
  }

  try {
    // Generate the chat response, updated and return chat history:
    let newChatHistory: ChatHistoryEntry[] = prevState.chatHistory || [];
    newChatHistory = [...newChatHistory, {type: "user", message: userInput}];
    const chatResponse: ChatResponse = await generateChatResponse(newChatHistory);
    newChatHistory = [...newChatHistory, {type: "model", message: chatResponse}];
    // console.log("Updated chat history:", newChatHistory);
    return { chatHistory: newChatHistory };
    
  } catch (error) {
    return {
      errorMessage: "Server error. Please try again.",
    };
  }
}
