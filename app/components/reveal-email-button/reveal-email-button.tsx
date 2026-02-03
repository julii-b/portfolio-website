'use client';

import styles from "./reveal-email-button.module.css";
import { Button } from "@/app/ui/button/button";
import Form from "next/form";
import { Turnstile } from "nextjs-turnstile";
import { useEffect, useState } from "react";
import { useActionState } from "react";
import action from "./action";

/**
 * Button together with a Cloudflare Turnstile CAPTCHA.
 * Shows the email address fom CONTACT_EMAIL env var when successfully completed.
 */
export default function RevealEmailButton() {

  const [formState, formAction] = useActionState(action, {});

  let captchaSiteKey = ""
  if (process.env.NEXT_PUBLIC_ENV === "dev") {
    /* sitekey for testing purposes:
    always okay: 1x00000000000000000000AA
    always fail: 2x00000000000000000000AB
    force interaction: 3x00000000000000000000FF
    */
    captchaSiteKey = "1x00000000000000000000AA"; // always pass in dev
  } else {
    captchaSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!;
    
  }

  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => { // reset loading state when formState changes
    setIsLoading(false);
  }, [formState]);

  return (<>

    {/* Form with Turnstile CAPTCHA, submit button, and error message */}
    <Form
    action={formAction}
    onSubmit={() => setIsLoading(true)}
    className={formState.informationToShow ? styles.hidden : styles.wrapper }
    >
      
      <Turnstile
      siteKey={captchaSiteKey}
      responseFieldName="cf-turnstile-response"
      theme="light"
      size="flexible"
      appearance="interaction-only"
      onSuccess={setTurnstileToken}
      onError={() => console.error("Turnstile error")}
      onExpire={() => setTurnstileToken(null)}
      />
      
      <Button
      type="submit"
      className={styles.button}
      loading={isLoading}
      disabled={!turnstileToken}
      >
        Show email address
      </Button>

      {formState.errorMessage && (
        <span className={styles.error}>{formState.errorMessage}</span>
      )}
    </Form>

    {/* Display the revealed email address */}
    <div className={formState.informationToShow ? styles.wrapper : styles.hidden}>
      <b className={styles.email}>{formState.informationToShow}</b>
    </div>

  </>);
}