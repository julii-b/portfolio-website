import nodemailer from "nodemailer";
import { env } from "process";
import { sanitizeEmailHeader, sanitizeStringForHtml } from "../sanitize-operations";


export class MailError extends Error {
  constructor(error: any) {
    super(error.message ?? "Failed to send email");
    this.name = "MailError";
    this.stack = error.stack;
    this.cause = error.cause;
  }
}

const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: parseInt(env.SMTP_PORT || "465"),
  secure: true,
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASSWORD,
  },
});


/**
 * Send an email.
 * Email addresses and headers are sanitized to prevent header injection.
 * HTML message is NOT sanitized, so only pass trusted HTML content.
 * 
 * @param param
 * @param param.from The sender email address.
 * @param param.fromName Optional. The sender name. If provided, it will be included in the "From" field.
 * @param param.to The recipient email address.
 * @param param.replyTo Optional. The reply-to email address.
 * @param param.subject The email subject.
 * @param param.plainMessage The plain text version of the email message.
 * @param param.htmlMessage Optional. The HTML version of the email message. If not provided, the plain text message is converted to HTML.
 */
export async function sendEmail({
  from = env.SMTP_USER ?? "",
  fromName,
  to = env.SMTP_USER ?? "",
  replyTo,
  subject,
  plainMessage,
  htmlMessage,
}: {
  from: string;
  fromName?: string | undefined;
  to: string;
  replyTo?: string | undefined;
  subject: string;
  plainMessage: string;
  htmlMessage?: string | undefined;
}) {
  // If fromName is provided, format the "From" field accordingly with name and email:
  if (fromName) {
    from = `"${sanitizeEmailHeader(fromName)}" <${sanitizeEmailHeader(from)}>`;
  }
  // If no HTML message is provided, convert plain text to HTML by replacing line breaks with <br>:
  if (!htmlMessage) {
    htmlMessage = sanitizeStringForHtml(plainMessage);
  }
  
  // Prepare mail options with the function parameters:
  let mailOptions: nodemailer.SendMailOptions = {
    from: sanitizeEmailHeader(from),
    to: sanitizeEmailHeader(to),
    subject: sanitizeEmailHeader(subject),
    text: plainMessage,
    html: htmlMessage,
  };
  if (replyTo) {
    mailOptions = {
      ...mailOptions,
      replyTo: sanitizeEmailHeader(replyTo),
    };
  }

  try {

    const info = await transporter.sendMail(mailOptions);
    if (info.rejected.length > 0) {
      throw new Error(`Email to ${info.rejected.join(", ")} was rejected`);
    }

  } catch (error) {
    throw new MailError(error);
  }

}