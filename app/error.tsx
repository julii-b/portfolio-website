'use client';

import styles from './error.module.css';
import { Button, ButtonLink } from "@/app/ui/button/button";

export default function ErrorPage({error, reset}: {error: Error; reset: () => void}) {
  return (

    <section className={styles.errorSection}>
      <h1>Error</h1>
      <p>Something went wrong 🥲. Please try again later.</p>

      <div className={styles.buttonContainer}>
        <Button onClick={reset}>Try again</Button>
        <ButtonLink href="/">Go to the home page</ButtonLink>
      </div>
      
    </section>
  );
}
