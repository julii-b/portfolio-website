'use client';

import sectionsContent, { type SectionContent } from "@/app/content/sections-content";
import CardsCarousel from "@/app/ui/cards-carousel/cards-carousel";
import Card from "@/app/ui/card/card";
import styles from "./section-with-cards.module.css";
import MetroStation from "@/app/components/metro-line/metro-station/metro-station";
import { Suspense } from "react";
import { Button } from "@/app/ui/button/button";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

/**
 * Renders a section with cards based on the section ID.
 * The cards content is fetched from sectionsContent in @/app/content/sections-content.
 * @param props.sectionId The ID of the section to render.
 * @param props.showScrollButton Whether to show a scroll button at the bottom of the section.
 * @returns The rendered section.
 */
export default function SectionWithCards ({sectionId, showScrollButton}: {sectionId: string, showScrollButton?: boolean}) {

  const sectionContent: SectionContent | undefined = sectionsContent.find(section => section.id === sectionId);
  if (sectionContent && sectionContent.cards) return (
    <Suspense fallback={
    <section className={styles.section} id={sectionId} key={sectionId}>
      <h2 className={styles.title}>{sectionContent?.title}</h2>
    </section>
    }>
      <section className={styles.section} id={sectionId} key={sectionId}>

        <h2 className={styles.title}>{sectionContent?.title}</h2>

        <div className={styles.metroStationWrapper}>
          <MetroStation />
        </div>

        <CardsCarousel>
          {sectionContent?.cards.map((card, index) => (
            <Card
              key={card.id}     
              {...card}
            />
          ))}
        </CardsCarousel>

        {showScrollButton && (
          <motion.div
          className={styles.scrollButtonWrapper}
          initial={{ y: 10, opacity: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.1 }}
          transition={{ type: "tween", duration: 0.5 }}
          >
            <Button
            className={styles.scrollButton}
            aria-label="Scroll to next section"
            onClick={ ()=> {
              // Scroll to next section:
              const thisSection = document.getElementById(sectionId);
              const next = thisSection?.nextElementSibling as HTMLElement | null;
              next?.scrollIntoView({ behavior: 'smooth' });
            } }
            >
              <FontAwesomeIcon icon={faAngleDown} />
            </Button>
          </motion.div>
        )}

      </section>

    </Suspense>
  );
}