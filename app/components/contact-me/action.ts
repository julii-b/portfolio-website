'use server';
import { sendEmail } from "@/app/lib/email";
import { z } from "zod";


// Define the schema for the form data using zod:
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name can't be longer than 100 characters"),
  email: z.email("Invalid email address"),
  message: z.string().min(1, "Message is required").max(10000, "Message can't be longer than 10,000 characters"),
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
  });

  // return state with field errors if parsing is unsuccessful:
  if (!parsed.success) {
    const error = parsed.error.flatten();
    return {
      errorMessage: "Your message could not be sent. Please correct the errors.",
      fieldErrors: error.fieldErrors,
    };
  }
  console.log("Parsed form data:", parsed.data);
  const { name, email, message } = parsed.data;

  // Send message to myself:
  try {
    await sendEmail({
      from: "contact-form@julius-busch.com",
      fromName: `Contact Form: ${name}`,
      to: "user@example.com",
      replyTo: email,
      subject: `Contact Form Submission on julius-busch.com: ${name} - ${email}`,
      plainMessage: message,
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
      plainMessage: `Dear ${name},\n\nThank you for reaching out to me via my website. I will get back to you as soon as possible.\n\nBest regards,\nJulius Busch`,
    });
  } catch (error) {
    console.error("Error sending confirmation email:", error);
  }

  return {success: true};

}