'use client';

import style from './robot-icon.module.css';
import Image from 'next/image';

import robotEmpty from './images/robot-empty.png';
import FaceSmiley from './images/face-smiley.png';
import FaceBlinking from './images/face-blinking.png';
import FaceLookingUp from './images/face-looking-up.png';
import Gear from './images/gear.png';
import QuestionMark from './images/question-mark.png';
import { useEffect, useState } from 'react';

export default function RobotIcon({state}: {state: "idle" | "loading"}) {

   // Preload overlay images to prevent flickering:
  useEffect(() => {
    const urls = [FaceSmiley.src, FaceBlinking.src, FaceLookingUp.src, Gear.src, QuestionMark.src];
    urls.map(url => new window.Image().src = url);
  }, []);

  const [idleStateCounter, setIdleStateCounter] = useState(0);
  const [idleState, setIdleState] = useState<"smiley" | "blinking" | "looking-up">("smiley");
  const [loadingStateCounter, setLoadingStateCounter] = useState(0);
  const [loadingState, setLoadingState] = useState<"gear" | "question-mark">("gear");

  useEffect(() => {
    const intervalIdle = setInterval(() => {
      setIdleStateCounter((prev) => ((prev + 1) % 20));
    }, 200);
    const intervalLoading = setInterval(() => {
      setLoadingStateCounter((prev) => ((prev + 1) % 6));
    }, 500);
    return () => {
      clearInterval(intervalIdle);
      clearInterval(intervalLoading);
    };
  }, []);
  useEffect(() => {
    switch (idleStateCounter) {
      case 0: setIdleState("blinking"); break;
      case 10:
      case 11:
      case 12:
      case 13: setIdleState("looking-up"); break;
      default: setIdleState("smiley"); break;
    }
  }, [idleStateCounter]);
  useEffect(() => {
    switch (loadingStateCounter) {
      case 0: setLoadingState("question-mark"); break;
      default: setLoadingState("gear"); break;
    }
  }, [loadingStateCounter]);

  return (
    <div className={style.robotIcon}>

      <Image src={robotEmpty} alt="" width="684" height="553" />

      {state === "idle" && idleState === "smiley" && (
        <Image src={FaceSmiley} alt="Smiling Robot Face" className={style.facialExpression} width="766" height="766"/>
      )}
      {state === "idle" && idleState === "blinking" && (
        <Image src={FaceBlinking} alt="Smiling Robot Face" className={style.facialExpression} width="766" height="766"/>
      )}
      {state === "idle" && idleState === "looking-up" && (
        <Image src={FaceLookingUp} alt="Smiling Robot Face" className={style.facialExpression} width="766" height="766"/>
      )}
      {state === "loading" && loadingState === "gear" && (
        <Image src={Gear} alt="Loading Gear" className={`${style.loadingGear} ${style.facialExpression}`} width="766" height="766"/>
      )}
      {state === "loading" && loadingState === "question-mark" && (
        <Image src={QuestionMark} alt="Loading Question Mark" className={`${style.loadingQuestionMark} ${style.facialExpression}`} width="766" height="766"/>
      )}
    </div>
  );
}
