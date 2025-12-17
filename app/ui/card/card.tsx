'use client';

import { JSX, ReactElement, ReactNode, use, useEffect, useRef, useState } from "react";
import styles from "./card.module.css";
import { Button } from "../button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faLocationDot, faCalendar, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import SkillBadge from "../skill-badge/skill-badge";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { motion } from "motion/react";

export default function Card (
  {children, title, subtitle, location, time, skills, backgroundImageUrl}:
  {
    children: ReactNode,
    title?: string,
    subtitle?: string,
    location?: string,
    time?: string,
    skills?: React.ComponentProps<typeof SkillBadge>[],
    backgroundImageUrl?: string,
  }
): JSX.Element {

  return (
    <div
    className={`${styles.cardWrapper}`}
    >

      <div
      className={styles.card}
      style={backgroundImageUrl ?
        {
          background: `url("${backgroundImageUrl}") rgba(255, 255, 255, 0.85)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        } : {}
      }>

        <div className={styles.cardHeader}>
          <h3 className={styles.title}>{title}</h3>
          {subtitle &&
            <h4 className={styles.subtitle}>{subtitle}</h4>
          }
          {location &&
            <p className={styles.location}>
              <FontAwesomeIcon icon={faLocationDot} />
              {location}
              </p>
          }
          {time &&
            <p className={styles.time}>
              <FontAwesomeIcon icon={faCalendar} />
              {time}
            </p>
          }
          {skills && (
            <div className={styles.skills}>
              {skills.map((props, index) => (
                <span key={index} className={styles.skill}>
                  <SkillBadge {...props} />
                </span>
              ))}
            </div>
          )}
        </div>

        <div
        className={`${styles.childrenWrapper}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}