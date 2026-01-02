/**
 * Response format from the model.
 */
export interface ChatResponse {
  function_name?: string;
  parameters?: {
    section_name: string;
  };
  answer: string;
}

/**
 * An entry in the chat history, either from the user or the model.
 * Can be used as an array to represent the full chat history.
 */
export interface ChatHistoryEntry {
  type: "user" | "model";
  message: string;
}