'use server';
import { sendEmail } from "@/app/lib/email/send-email";
import { z } from "zod";
import { verifyTurnstile } from "nextjs-turnstile";
import { env } from "process";
import { notificationMessageReceived, notificationMessageSent } from "@/app/lib/email/format-email";
import useRateLimiter from "@/app/hooks/use-rate-limiter";
import { getClientIpInServerAction } from "@/app/lib/get-client-ip";
import { RateLimiterRes } from "rate-limiter-flexible";


// Define the schema for the form data using zod:
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name can't be longer than 100 characters"),
  email: z.email("Invalid email address"),
  message: z.string().min(1, "Message is required").max(10000, "Message can't be longer than 10,000 characters"),
  cfTurnstileResponse: z.string().min(1, "Completion of the CAPTCHA is required"),
});

// Define the type for the returned formState:
type FormState = {
  success?: boolean;
  errorMessage?: string;
  fieldErrors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}

export default async function action (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  
  // Parse the form data using Zod:
  const parsed = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    cfTurnstileResponse: formData.get("cf-turnstile-response"),
  });

  // return state with field errors if parsing is unsuccessful:
  if (!parsed.success) {
    const error = parsed.error.flatten();
    return {
      errorMessage: "Your message could not be sent. Please correct the errors.",
      fieldErrors: error.fieldErrors,
    };
  }
  //console.log("Parsed form data:", parsed.data);
  const { name, email, message, cfTurnstileResponse } = parsed.data;

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

  // Rate limiting:
  const rateLimiterIndividual = useRateLimiter("cf", 60*60*24, 10); // 10 messages per day per user
  const rateLimiterGlobal = useRateLimiter("cf-g", 60*60*24, 30); // 30 messages per day for all users
  const clientIp = await getClientIpInServerAction();
  try {
    await rateLimiterIndividual.consume(clientIp);
    await rateLimiterGlobal.consume(clientIp);

  } catch (error) {
    if (error instanceof RateLimiterRes) {
      const secondsBeforeNext = Math.floor(error.msBeforeNext / 1000);
      const minutesBeforeNext = Math.floor(secondsBeforeNext / 60);
      const hoursBeforeNext = Math.floor(minutesBeforeNext / 60);
      return {errorMessage: `The maximum number of allowed messages has been reached. Please try again in ${hoursBeforeNext} hours ${minutesBeforeNext % 60} minutes ${ secondsBeforeNext % 60 } seconds.`};
    };
    return {errorMessage: "An unexpected error occurred. Please try again later."};
  }

  // Send message to myself:
  try {
    await sendEmail({
      from: "contact-form@julius-busch.com",
      fromName: `Contact Form: ${name}`,
      to: env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New contact form message from ${name} - ${email}`,
      plainMessage: notificationMessageReceived(name, email, message).plainMessage,
      htmlMessage: notificationMessageReceived(name, email, message).htmlMessage,
    });

  } catch (error) {
    return {
      errorMessage: "Your message could not be sent. Please try again later.",
    };
  }

  // Send confirmation email to user:
  try {
    await sendEmail({
      from: "noreply@julius-busch.com",
      to: email,
      subject: "Thank you for contacting me",
      plainMessage: notificationMessageSent(message).plainMessage,
      htmlMessage: notificationMessageSent(message).htmlMessage,
    });
  } catch (error) {
    console.error("Error sending confirmation email:", error);
  }

  return {success: true};

}