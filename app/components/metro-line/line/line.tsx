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

  const defaultColor = "#b60000"; // default line color (header and non-home-page)

  const pathname = usePathname();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [lineColors, setLineColors] = useState([defaultColor]);

  
  useEffect(() => {
    // colors for each section of the portfolio website, one color is for 1/(number of colors) of the scrollable height:
    let newLineColors: string[] = [
      defaultColor, // Color for header
    ];
    if (pathname === "/") { // Only on home page: add section colors
      for (const sectionContent of sectionsContent) {
        const color = sectionContent.lineColor;
        if (color) {
          newLineColors.push(color);
        }
      }
    }
    setLineColors(newLineColors);
    
    // Event handler for scroll events on the body element:
    const handleBodyScroll = (e: Event): void => {
      const el = e.currentTarget as HTMLElement | null;
      if (!el) return;
      // calculate current section index based on scroll position:
      // (scroll position from the top) / ((total height) - (unscrollable visible height))
      const progress: number = el.scrollTop / (el.scrollHeight - el.clientHeight);
      // map progress (0..1) to section index (0..lineColors.length-1)
      const i: number = Math.round(progress * (newLineColors.length - 1));
      setCurrentSectionIndex(i);
    }
    
    // Attach scroll event listener to body:
    document.body.addEventListener('scroll', handleBodyScroll);
    return () => { document.body.removeEventListener('scroll', handleBodyScroll); };
  }, [pathname]);

  return (
    <div
    className={styles.line}
    style={{ backgroundColor: lineColors[currentSectionIndex] }}
    />
  );
}