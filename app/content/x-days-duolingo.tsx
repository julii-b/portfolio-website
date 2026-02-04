'use client';

import { useEffect, useState } from "react";
import getDuolingoStreak from "../lib/duolingo";


export default function XDaysDuolingo() {

  const [sentence, setSentence] = useState<string>(" over 1500 days ");

  useEffect(() => {
    const fetchStreak = async () => {
      try {
        const streak = await getDuolingoStreak("julius.bu");
        setSentence(` ${streak} days `);
      } catch (error) {
        setSentence(" over 1500 days ");
        console.error("Error fetching Duolingo streak:", error);
      }
    };
    fetchStreak();
  }, []);

  return (<>{sentence}</>)

}