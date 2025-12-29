'use server';
import buildSystemPrompt from "./buildSystemPrompt";
import { ApiError, GoogleGenAI } from "@google/genai";
import { env } from "process";

export interface ChatResponse {
  function_name?: string;
  parameters?: {
    section_name: string;
  };
  answer: string;
}

export interface ChatHistoryEntry {
  type: "user" | "model";
  message: string;
}

const startTokenUser = "<start_of_turn>user\n";
const endTokenUser = "<end_of_turn>\n";
const startTokenModel = "<start_of_turn>model\n";
const endTokenModel = "<end_of_turn>\n";


/**
 * Generates the next respponse of the chat model based on the chat history.
 * @param chatHistory The history of chat messages.
 * @returns The generated chat response.
 */
export async function generateChatResponse(chatHistory: ChatHistoryEntry[]): Promise<ChatResponse> {
  return generateChatResponseRecursive(chatHistory, 0);
}

async function generateChatResponseRecursive(chatHistory: ChatHistoryEntry[], recursionCounter: number = 0): Promise<ChatResponse> {

  const ai = new GoogleGenAI({apiKey: env.GEMMA_API_KEY});

  // Build the the prompt from the system prompt, the chat history, and the start/end tokens:
  const prompt = startTokenUser + await buildSystemPrompt() + endTokenUser + chatHistory.map(entry => {
    if (entry.type === "user") {
      return startTokenUser + entry.message + endTokenUser;
    } else {
      return startTokenModel + entry.message + endTokenModel;
    }
  }).join("") + startTokenModel;

  // Try to generate the response:
  try {

    // use 27b model on try 1 & 2, 12b on try 3 & 4, 4b on try 5 & 6
    let model = "gemma-3-27b-it";
    switch (recursionCounter) {
      case 2:
      case 3: model = "gemma-3-12b-it"; break;
      case 4:
      case 5: model = "gemma-3-4b-it"; break;
    };
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });
  
    // Parse the response text as JSON:
    if (response.text !== undefined) {
      return JSON.parse(response.text) as ChatResponse;
    } else {
      throw new Error("No response text");
    }

  } catch (e) { // Catch errors that occur during the API call and parsing of the response:
    console.error(e);
    if (recursionCounter < 5) { // Retry up to 6 times (2 times per model)
      console.error("Error occurred while generating chat response. Retrying.");
      await new Promise(resolve => setTimeout(resolve, 1000));
      return generateChatResponseRecursive(chatHistory, recursionCounter + 1);

    } else {
      // Try parsing the error as ApiError to check for rate limiting:
      try { 
        let error: ApiError = e as ApiError;
        const errorMessage = JSON.parse(error.message);
        if (errorMessage.error.code === 429 && errorMessage.error.details[2].retryDelay !== undefined) {
          const retryDelay = errorMessage.error.details[2].retryDelay;
          return {"answer": `I'm currently experiencing a high volume of requests. Please try again in ${retryDelay.replace("s", "")} seconds. :)`};
        }
      } catch (e) {}

      // If all retries fail, and error is not due to rate limiting, return a generic error message:
      return {"answer": "I'm sorry, there seems to be an issue with generating the response. :("};
      
    }
  }

}