import { z } from "zod";

/**
 * Response format from the model.
 */
export const ChatResponseSchema = z.object({
  function_name: z.string().optional(),
  parameters: z
    .object({
      section_name: z.string(),
    })
    .optional(),
  answer: z.string(),
});
export type ChatResponse = z.infer<typeof ChatResponseSchema>;

/**
 * An entry in the chat history, either from the user or the model.
 * Should contain ChatResponse for model entries, and string for user entries.
 * Can be used as an array to represent the full chat history.
 */
export const ChatHistoryEntrySchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("user"),
    message: z.string(),
  }),
  z.object({
    type: z.literal("model"),
    message: ChatResponseSchema,
  }),
]);
export type ChatHistoryEntry = z.infer<typeof ChatHistoryEntrySchema>;