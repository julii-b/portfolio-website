'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./line.module.css";
import sectionsContent from "@/app/content/sections-content";


/**
 * Metro line component that changes color based on scroll position.
 * When number of colors is the same as number of sections, each section has it's own color.
 * Wrap this component in a div with position: fixed, to have it always visible.
 */
export default function Line() {

  const pathname = usePathname();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  // colors for each section of the portfolio website, one color is for 1/(number of colors) of the scrollable height:
  let lineColors = [
    "#b60000", // Color for header
  ];
  if (pathname === "/") { // Only on home page: add section colors
    for (const sectionContent of sectionsContent) {
      if (sectionContent.lineColor) {
        lineColors.push(sectionContent.lineColor);
      }
    }
  }

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