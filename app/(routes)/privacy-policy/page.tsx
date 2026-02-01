import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import styles from "./page.module.css";
import { Button, ButtonLink } from "@/app/ui/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RevealEmailButton from "@/app/components/reveal-email-button/reveal-email-button";

export default function PrivacyPolicy() {
  return (
    <main className={styles.main}>

      <div className={styles.buttonAndTitle}>
        <ButtonLink
        href="/"
        className={styles.backButton}
        aria-label="Go back to home page"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </ButtonLink>
        <h1>Privacy Policy</h1>
      </div>

      <h2>1. Who I am</h2>

      <p>This website is operated by Julius Busch, based in Belgium.<br />
      It is a personal, non-commercial portfolio website.</p>

      <h2>2. What data is collected and why</h2>
      <h3>a. Contact form</h3>

      <h4>Purpose</h4>
      <p>To respond to inquiries and communicate with users.</p>

      <h4>Categories of personal data</h4>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Message content</li>
      </ul>

      <h4>Legal basis</h4>
      <p>Article 6(1)(b) GDPR (pre-contractual communication) and/or
      Article 6(1)(f) GDPR (legitimate interest in responding to inquiries).</p>

      <h4>Recipients (including third-country transfer)</h4>
      <p>The data is sent to me by email.<br />
      Emails are delivered using SMTP2GO and stored in my Gmail inbox, which is provided by Google.<br />
      According to SMTP2GO, data from EEA users is processed within the EEA.<br />
      Google may process email data outside the European Union. </p>

      <p>Information on how SMTP2GO processes personal data can be found here:<br />
      <a href="https://www.smtp2go.com/privacy/" target="_blank" rel="noopener noreferrer">https://www.smtp2go.com/privacy/</a></p>

      <p>Information on how Google processes personal data can be found here:<br />
      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></p>

      <p>A confirmation email is also sent to the provided email address.</p>

      <h4>Retention period</h4>
      <p>Contact messages are stored in my email inbox until they are no longer needed and are then deleted.<br />
      Email service providers involved in delivery and storage apply their own retention policies as described in their respective privacy policies.</p>

      <h3>b. Chatbot (Gemma via Gemini API)</h3>

      <h4>Purpose</h4>
      <p>To provide automated responses to questions about my profile and experience.</p>

      <h4>Categories of personal data</h4>
      <ul>
        <li>Text entered into the chatbot</li>
      </ul>

      <h4>Legal basis</h4>
      <p>Article 6(1)(f) GDPR (legitimate interest in providing an interactive information feature).</p>

      <h4>Recipients (including third-country transfer)</h4>
      <p>Chatbot messages are transmitted to the Gemini API provided by Google to generate responses.<br />
      Google may process data outside the European Union.</p>

      <p>Once messages are transmitted, their processing by Google is subject to Google's own terms and privacy policies. Depending on the applicable terms and service configuration, Google may retain and process submitted data for purposes such as service improvement, security, and abuse prevention. I do not control or determine how Google further processes this data.</p>

      <p>Information on how Google processes personal data can be found here:<br />
      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></p>

      <h4>Retention period</h4>
      <p>I do not intentionally store chatbot messages in a separate database. Messages are retained only as long as necessary to provide the chatbot response.<br />
      Google's processing and retention of data is governed by its own terms and privacy policies.</p>

      <h3>c. Spam and abuse protection (Cloudflare Turnstile)</h3>

      <h4>Purpose</h4>
      <p>To prevent automated submissions, spam, and misuse of the website's forms.</p>

      <h4>Categories of personal data</h4>
      <ul>
        <li>IP address</li>
        <li>Browser and device information</li>
        <li>Security-related signals used for bot detection</li>
      </ul>

      <h4>Legal basis</h4>
      <p>Article 6(1)(f) GDPR (legitimate interest in ensuring the security and availability of the website).</p>

      <h4>Recipients (including third-country transfer)</h4>
      <p>This website uses Cloudflare Turnstile for spam and abuse protection.<br />
      Cloudflare may process data outside the European Union.</p>

      <p>Cloudflare processes these signals to detect and block bots and may also process them to improve Turnstile's bot detection capabilities.</p>

      <p>Information on how Cloudflare processes data in connection with Turnstile can be found here:<br />
      <a href="https://www.cloudflare.com/turnstile-privacy-policy/" target="_blank" rel="noopener noreferrer">https://www.cloudflare.com/turnstile-privacy-policy/</a></p>

      <h4>Retention period</h4>
      <p>Retention is determined by Cloudflare in accordance with its policies.</p>

      <h3>d. Rate limiting and security measures</h3>

      <h4>Purpose</h4>
      <p>To enforce submission limits and protect the website from abuse or excessive requests.</p>

      <h4>Categories of personal data</h4>
      <ul>
        <li>IP address</li>
      </ul>

      <h4>Legal basis</h4>
      <p>Article 6(1)(f) GDPR (legitimate interest in preventing abuse and ensuring website security).</p>

      <h4>Recipients (including third-country transfer)</h4>
      <p>IP addresses processed for rate limiting are not shared with third parties.</p>

      <h4>Retention period</h4>
      <p>IP addresses are retained only temporarily for rate limiting and security purposes and are deleted once they are no longer necessary. They are not purposely stored long-term.</p>

      <h3>e. Server and security logs</h3>

      <h4>Purpose</h4>
      <p>
        To operate the website, ensure security, and diagnose technical errors.
      </p>

      <h4>Categories of personal data</h4>
      <ul>
        <li>IP address</li>
        <li>Date and time of the request</li>
        <li>Requested URL</li>
        <li>HTTP status code</li>
        <li>Technical client information (e.g. browser type and user agent)</li>
      </ul>

      <h4>Legal basis</h4>
      <p>
        Article 6(1)(f) GDPR (legitimate interest in ensuring the security and proper operation of the website).
      </p>

      <h4>Recipients (including third-country transfer)</h4>
      <p>
        Server logs are stored on the hosting server used to operate this website and are accessible only to me as the site operator.
        They are not shared with third parties.
      </p>

      <h4>Retention period</h4>
      <p>
        Server access and error logs are retained for a limited period as part of standard server operation and log rotation
        and are automatically rotated and deleted.
      </p>

      <h2>3. Cookies</h2>

      <p>This website does not use tracking or marketing cookies.<br />
      No analytics or advertising cookies are used.<br />
      Third-party security features (such as Cloudflare Turnstile) may use strictly necessary cookies or similar technologies.</p>

      <h2>4. Your rights</h2>

      <p>Under the General Data Protection Regulation (GDPR), you have certain rights regarding your personal data, including the right to request access, correction, or deletion of your data, where applicable.</p>

      <p>You may also have the right to restrict or object to the processing of your data in situations where such processing is not strictly necessary for the operation of this website or the provision of its features.</p>

      <p>In addition, you have the right to lodge a complaint with a competent data protection authority if you believe that the processing of your personal data violates applicable data protection law.</p>

      <p>Requests concerning your data can be submitted via the contact form available on this website or via email.<br />
      The email address is revealed on this website after user interaction.</p>

      <RevealEmailButton />
    </main>
  );
}
