'use client';

import Form from "next/form";
import styles from "./contact-me.module.css";
import Script from "next/script";
import { Button } from "@/app/ui/button/button";
import { Input, TextArea } from "@/app/ui/input/input";
import { Turnstile } from "nextjs-turnstile";
import MetroStation from "@/app/components/metro-line/metro-station/metro-station";
import action from "./action";
import { useActionState, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";


/**
 * Contact Me section component - to be implemented.
 * @returns The rendered Contact Me section.
 */
export default function ContactMe() {
  
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  // Initialize formState with chat history. formAction will update formState:
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

  const [isLoading, setIsLoading] = useState(false);
  // reset loading state when formState changes:
  useEffect(() => {
    setIsLoading(false);
  }, [formState]);

  return (
    <section className={styles.section} id="contact-form" key="contact-form">

      <motion.div
      className={styles.scrollUpButtonWrapper}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.9 }}
      transition={{ type: "tween", duration: 0.5 }}
      >
        <Button
        className={styles.scrollUpButton}
        aria-label="Scroll to previous section"
        onClick={ ()=> {
          // Scroll to previous section:
          const thisSection = document.getElementById('contact-form');
          const previous = thisSection?.previousElementSibling as HTMLElement | null;
          previous?.scrollIntoView({ behavior: 'smooth' });
        } }
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </Button>
      </motion.div>
          

      <h2>Contact Me</h2>
      
      <div className={styles.metroStationWrapper}>
        <MetroStation />
      </div>

      {formState.success ? (
        <div className={styles.successInfo}>
          <div className={styles.successIconWrapper}>
            <FontAwesomeIcon icon={faCircleCheck}/>
          </div>
          <p>Your message was sent successfully!</p>
          <p>You will receive a confirmation via email in a moment.</p>
        </div>
      ) : (
        
        <Form
        action={formAction}
        onSubmit={() => setIsLoading(true)}
        className={styles.form}
        >
          <div className={styles.mainErrorMessage} aria-live="polite" aria-atomic="true">
            {formState.errorMessage}
          </div>

          <div className={styles.nameWrapper}>
            <label htmlFor="name">Name</label>
            <Input id="name" name="name" aria-describedby="name-error"/>
            <div className={styles.errorMessage} id="name-error">
              {formState.fieldErrors?.name && formState.fieldErrors.name.join(", ")}
            </div>
          </div>

          <div className={styles.emailWrapper}>
            <label htmlFor="email">Email</label>
            <Input id="email" type="email" name="email" aria-describedby="email-error"/>
            <div className={styles.errorMessage} id="email-error">
              {formState.fieldErrors?.email && formState.fieldErrors.email.join(", ")}
            </div>
          </div>

          <div className={styles.messageWrapper}>
            <label htmlFor="message">Message</label>
            <TextArea id="message" name="message" aria-describedby="message-error"/>
            <div className={styles.errorMessage} id="message-error">
              {formState.fieldErrors?.message && formState.fieldErrors.message.join(", ")}
            </div>
          </div>

          <div className={styles.captchaAndSubmitWrapper}>

            <div className={styles.captchaWrapper}>
              
              <Turnstile
              siteKey={captchaSiteKey}
              responseFieldName="cf-turnstile-response"
              theme="light"
              size="flexible"
              appearance="always"
              onSuccess={setTurnstileToken}
              onError={() => console.error("Turnstile error")}
              onExpire={() => setTurnstileToken(null)}
              />
              <div className={styles.errorMessage}>
              {/*formState.fieldErrors?.token && formState.fieldErrors.token.join(", ")*/}
            </div>
            </div>
            

            <Button
            type="submit"
            className={styles.submitButton}
            disabled={!turnstileToken}
            loading={isLoading}
            >
              Send
            </Button>

          </div>

        </Form>
      )}

    </section>
  );
}