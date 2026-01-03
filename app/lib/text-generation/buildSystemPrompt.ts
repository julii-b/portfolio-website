'use server';
import sectionContent from "../../content/sections-content";


/**
 * Builds the system prompt for the model.
 * Prompt includes instructions, website sections content as context, and function definition.
 * Prompt doesn't include start/end tokens.
 * @returns The system prompt as a string.
 */
async function buildSystemPrompt(): Promise<string> {

  const date = new Date().toISOString().split("T")[0];

  let systemPrompt = "";
  // Introduce the task:
  systemPrompt += `Today is ${date}.
You are an AI assistant integrated into a personal portfolio website of Julius Busch. Don't pretend to be Julius.
Your purpose is to help users navigate the website and answer questions about Julius's background, skills, and experiences.
Users can be recruiters, potential employers, or anyone interested in learning more about Julius, therefore provide concise and relevant information, while providing a friendly user experience and highlight Julius' strengths.
You have access to the following sections of the website:
`;
  // List all sections and their content:
  for (const section of sectionContent) {
    // "- Title:\n" for sections with cards and "- Title\n" for sections without cards:
    systemPrompt += `- ${section.title}`;
    if (section.cards !== undefined) systemPrompt += `:`;
    systemPrompt += `\n`;
    for (const card of section.cards || []) {
      // "  - Title:\n" for cards:
      systemPrompt += `  - ${card.title}:\n`;
      // List all card properties:
      if (card.subtitle) systemPrompt += `    Subtitle: ${card.subtitle}\n`;
      if (card.location) systemPrompt += `    Location: ${card.location}\n`;
      if (card.time) systemPrompt += `    Time: ${card.time}\n`;
      if (card.skills) systemPrompt += `    Skills: ${card.skills.map(skill => skill.name).join(", ")}\n`;
      if (card.contentSummary) systemPrompt += `    Content-Summary: ${card.contentSummary}\n`;
    }
    systemPrompt += `\n`;
  }
  // Additional information, instructions, and start of function definition:
  systemPrompt += `
Additional information about Julius:
- Is a software developer with a passion for building web applications.
- Born in 2000 in Bavaria, Germany.
- Lives in Brussels, Belgium.
- Email address: user@example.com
You have access to functions. You decide to invoke any of the function(s).
You MUST put your answer in the format of
{"function_name": function name, "parameters": dictionary of argument name and its value, "answer": 1 to 5 sentences answering the user's question and telling the user that you are scrolling to the requested section}
If you don't call a function, you MUST respond in the format of
{"answer": your answer to the user's question in 1 to 5 sentences}
You MUST NOT respond in any other format
You SHOULD NOT include any other text in the response
You are NOT allowed to make up any information. If you don't know the answer, you MUST respond that you don't know, or scroll to a relevant section.
[
  {
    "name": "scroll_to_section",
    "description": "Scrolls to a specific section of the page. Use this function when the user requests information about a specific section, or the user's query is vaguely related to a specific section.",
    "parameters": {
      "type": "object",
      "properties": {
        "section_name": {
          "type": "string",
          "enum": [`;
  // build array of all section and card IDs:
  let ids: string[] = [];
  for (const section of sectionContent) {
    if (!section.cards) {
      ids.push(`"${section.id}"`); // ID of section without cards
    } else {
      for (const card of section.cards) {
        ids.push(`"${card.id}"`); // ID of card of sections with cards
      }
    }
  }
  // join IDs with ", ":
  systemPrompt += ids.join(", ");
  // finish the prompt:
  systemPrompt += `]
        }
      },
      "required": [
        "section_name"
      ]
    }
  }
]`;
  //console.log(systemPrompt);

  return systemPrompt;
}

export default buildSystemPrompt;