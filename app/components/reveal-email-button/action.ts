'use server';

import { z } from "zod";
import { verifyTurnstile } from "nextjs-turnstile";
import { env } from "process";


// Define the schema for the form data using zod:
const contactFormSchema = z.object({
  cfTurnstileResponse: z.string().min(1, "Completion of the CAPTCHA is required"),
});

// Define the type for the returned formState:
export type FormState = {
  informationToShow?: string;
  errorMessage?: string;
}

export default async function action (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  // Parse the form data using Zod:
  const parsed = contactFormSchema.safeParse({
    cfTurnstileResponse: formData.get("cf-turnstile-response"),
  });

  // return state with error if parsing is unsuccessful:
  if (!parsed.success) {
    return {
      errorMessage: "There was an error while processing your request. Please try again.",
    };
  }
  //console.log("Parsed form data:", parsed.data);
  const { cfTurnstileResponse } = parsed.data;

  // Verify Turnstile CAPTCHA:
  let secretKey = "";
  if (env.NEXT_PUBLIC_ENV === "dev") { // Skip verification in dev environment
    secretKey = "1x0000000000000000000000000000000AA";
  } else {
    secretKey = env.TURNSTILE_SECRET_KEY!;
  }
  const turnstileValid = await verifyTurnstile(cfTurnstileResponse, { secretKey });

  if (!turnstileValid) {
    return {
      errorMessage: "CAPTCHA verification failed. Please try again.",
    };
  }

  // If CAPTCHA is valid, return the email address:
  return {informationToShow: `Email address: ${env.CONTACT_EMAIL}`};

}