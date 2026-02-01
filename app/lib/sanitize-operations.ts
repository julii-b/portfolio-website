import escapeHtml from "escape-html";

/**
 * Sanitize email header input to prevent header injection.
 * Removes line breaks and trims whitespace.
 * 
 * @param input The email header input string.
 * @returns The sanitized email header string.
 */
export function sanitizeEmailHeader(input: string): string {
  return input.replace(/[\r\n]+/g, " ").trim();;
}

/**
 * Sanitize a string for safe HTML rendering.
 * Escapes HTML special characters and converts line breaks to <br> tags.
 * 
 * @param input The input string.
 * @returns The sanitized HTML string.
 */
export function sanitizeStringForHtml(input: string): string {
  return escapeHtml(input).replace(/\n/g, "<br>");
}