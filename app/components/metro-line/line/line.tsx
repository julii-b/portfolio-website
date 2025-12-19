'use client';

import { useEffect, useState } from "react";
import styles from "./line.module.css";

export default function Line() {

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  // colors for each section of the portfolio website, one color is for 1/(number of colors) of the scrollable height:
  const lineColors = [
    "#b60000", // Color for header
    "#b60000", // Color for projects
    "#96009bff", // Color for education
    "#003597ff", // Color for work experience
    "#007222ff", // Color for languages
    "#cfbb00ff", // Color for contact me
  ]

  // Event handler for scroll events on the body element:
  const handleBodyScroll = (e: Event): void => {
    const el = e.currentTarget as HTMLElement | null;
    if (!el) return;
    // calculate current section index based on scroll position:
    // (scroll position from the top) / ((total height) - (unscrollable visible height))
    const progress: number = el.scrollTop / (el.scrollHeight - el.clientHeight);
    // map progress (0..1) to section index (0..lineColors.length-1)
    const i: number = Math.round(progress * (lineColors.length - 1));
    setCurrentSectionIndex(i);
  }

  // Attach scroll event listener to body:
  useEffect(() => {
    document.body.addEventListener('scroll', handleBodyScroll);
    return () => { document.body.removeEventListener('scroll', handleBodyScroll); };
  }, []);

  return (
    <div
    className={styles.line}
    style={{ backgroundColor: lineColors[currentSectionIndex] }}
    />
  );
}