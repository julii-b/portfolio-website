'use client';

import styles from "./header.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { motion } from "motion/react"
import { Suspense, useEffect, useState } from "react";
import { ContinueButton, ContinueButtonFallback } from "./continueButton";


export default function Header() {

  // Job titles to cycle through, placeholders for now:
  const jobTitles = [
    "Software Developer",
    "Junior Full-Stack Developer at Acme Corporation?",
  ];
  // Typing effect for job titles:
  let [jobTitle, setJobTitle] = useState<string>(""); // State for job title being displayed
  useEffect(() => {
    let jobTitleIndex = 0; // Current job title from jobTitles[]
    let charIndex = 0; // Current character index in the current job title
    let deleting = false; // Whether we are deleting or typing
    let waitCounter = 0; // Amount of cycles to wait before typing/deleting
    // Typing/deleting interval:
    const interval = setInterval(() => {
      if (waitCounter > 0) { // Waiting before typing/deleting
        waitCounter--;
      } else if (!deleting) { // Typing
        setJobTitle(jobTitles[jobTitleIndex].substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === jobTitles[jobTitleIndex].length) { // Finish typing: change state and wait
          deleting = true;
          waitCounter = 50;
        }
      } else { // Deleting
        setJobTitle(jobTitles[jobTitleIndex].substring(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) { // Finish deleting: change state, move to next job title and wait
          deleting = false;
          jobTitleIndex = (jobTitleIndex + 1) % jobTitles.length;
          waitCounter = 5;
        }
      }
    }, 100);
    // Cleanup function to clear interval on unmount:
    return () => clearInterval(interval);
  }, []);

  // Blinking cursor effect:
  const [ blinkingCursor, setBlinkingCursor ] = useState(true); // State for blinking cursor visibility
  useEffect(() => {
    // Interval to toggle cursor visibility every second:
    const cursorInterval = setInterval(() => {
      setBlinkingCursor((prev) => !prev);
    }, 1000);
    // Cleanup function to clear interval on unmount:
    return () => clearInterval(cursorInterval);
  }, []);


  return (

    <header className={styles.header} key="header">

      <h1 className={styles.myName}>Julius Busch</h1>

      <motion.div
      className={styles.profilePictureContainer}
      initial={{ y: -20, opacity: 0.9 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ amount: 0.7 }}
      transition={{ type: "tween", duration: 0.5 }}
      >
        <Image
        src="/profile_picture_3x4.png"
        alt="picture of Julius Busch"
        width={1024}
        height={1365}
        className={styles.profilePicture}
        />
      </motion.div>

      <p className={styles.location}>
        <FontAwesomeIcon icon={faLocationDot} />
        Brussels, Belgium
      </p>

      <div className={styles.role}>
        <p>
          {jobTitle}
          {blinkingCursor && "❚" }
        </p>
      </div>

      <p className={styles.introduction}>
        <span>
          I studied Computer Science at the FH Aachen University of Applied Sciences in Germany.
          There I gained experience in various programming languages and technologies, writing my thesis about Large Language Models.
          After graduating I moved to Belgium and started working at the International German School of Brussels.
          In the past year, while learning frameworks like React and Express, I developed a great joy for web development. <br />
          I am inviting you to explore my portfolio.
        </span>
      </p>

      <Suspense fallback={<ContinueButtonFallback />}>
        <ContinueButton />
      </Suspense>

    </header>

  );
}