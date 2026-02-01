'use client';

import { useEffect, useState } from "react";
import getDuolingoStreak from "../lib/duolingo";


export default function DuolingoSentence() {

  const [sentence, setSentence] = useState<string>("I started learning with Duolingo ");

  useEffect(() => {
    const fetchStreak = async () => {
      try {
        const streak = await getDuolingoStreak("julius.bu");
        setSentence(`I started learning with Duolingo, where I currently proudly have a streak of ${streak} days `);
      } catch (error) {
        setSentence("I started learning with Duolingo ");
        console.error("Error fetching Duolingo streak:", error);
      }
    };
    fetchStreak();
  }, []);

  return (<>{sentence}</>)

}