'use client';

import Form from "next/form";
import styles from "./contact-me.module.css";
import Script from "next/script";
import { Button } from "@/app/ui/button/button";
import { Input, TextArea } from "@/app/ui/input/input";
import MetroStation from "@/app/components/metro-line/metro-station/metro-station";

/**
 * Contact Me section component - to be implemented.
 * @returns The rendered Contact Me section.
 */
export default function ContactMe() {
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
      action="/"
      className={styles.form}
      > 
        <div className={styles.nameWrapper}>
          <label htmlFor="name">Name</label>
          <Input id="name" />
        </div>

        <div className={styles.emailWrapper}>
          <label htmlFor="email">Email</label>
          <Input id="email" type="email" />
        </div>

        <div className={styles.messageWrapper}>
          <label htmlFor="message">Message</label>
          <TextArea id="message" />
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