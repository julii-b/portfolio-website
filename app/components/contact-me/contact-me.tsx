'use client';

import Form from "next/form";
import styles from "./contact-me.module.css";
import Script from "next/script";
import { Button } from "@/app/ui/button/button";
import { Input, TextArea } from "@/app/ui/input/input";
import MetroStation from "@/app/components/metro-line/metro-station/metro-station";
import action from "./action";
import { useActionState, useState } from "react";


/**
 * Contact Me section component - to be implemented.
 * @returns The rendered Contact Me section.
 */
export default function ContactMe() {

  // Initialize formState with chat history. formAction will update formState:
  const [formState, formAction] = useActionState(action, {});  

  return (
    <section className={styles.section} id="contact-form" key="contact-form">

      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      ></Script>

      <h2>Contact Me</h2>
      
      <div className={styles.metroStationWrapper}>
        <MetroStation />
      </div>

      <Form
      action={formAction}
      className={styles.form}
      >
        <div className={styles.mainErrorMessage}>
          {formState.errorMessage}
        </div>

        <div className={styles.nameWrapper}>
          <label htmlFor="name">Name</label>
          <Input id="name" name="name" />
          <div className={styles.errorMessage}>
            {formState.fieldErrors?.name && formState.fieldErrors.name.join(", ")}
          </div>
        </div>

        <div className={styles.emailWrapper}>
          <label htmlFor="email">Email</label>
          <Input id="email" type="email" name="email" />
          <div className={styles.errorMessage}>
            {formState.fieldErrors?.email && formState.fieldErrors.email.join(", ")}
          </div>
        </div>

        <div className={styles.messageWrapper}>
          <label htmlFor="message">Message</label>
          <TextArea id="message" name="message" />
          <div className={styles.errorMessage}>
            {formState.fieldErrors?.message && formState.fieldErrors.message.join(", ")}
          </div>
        </div>

        <div className={styles.captchaAndSubmitWrapper}>

          <div className={styles.captchaWrapper}>
            {/* sitekey for testing purposes:
            always okay: 1x00000000000000000000AA
            always fail: 2x00000000000000000000AB
            force interaction: 3x00000000000000000000FF
            */}
            <div
            className="cf-turnstile"
            data-sitekey="1x00000000000000000000AA"
            data-theme="light"
            data-size="flexible"
            ></div>
            <div className={styles.errorMessage}>
            {/*formState.fieldErrors?.token && formState.fieldErrors.token.join(", ")*/}
          </div>
          </div>
          


          <Button
          type="submit"
          className={styles.submitButton}
          >
            Send
          </Button>

        </div>

      </Form>

    </section>
  );
}