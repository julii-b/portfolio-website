'use client';

import { JSX, ReactNode } from "react";
import styles from "./card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";
import SkillBadge from "../skill-badge/skill-badge";

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