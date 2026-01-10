import sectionsContent, { type SectionContent } from "@/app/content/sections-content";
import CardsCarousel from "@/app/ui/cards-carousel/cards-carousel";
import Card from "@/app/ui/card/card";
import styles from "./section-with-cards.module.css";
import MetroStation from "@/app/components/metro-line/metro-station/metro-station";
import { Suspense } from "react";

/**
 * Renders a section with cards based on the section ID.
 * The cards content is fetched from sectionsContent in @/app/content/sections-content.
 * @param sectionId The ID of the section to render.
 * @returns The rendered section.
 */
export default function SectionWithCards (sectionId: string) {

  const education: SectionContent | undefined = sectionsContent.find(section => section.id === sectionId);
  if (education && education.cards) return (
    <Suspense fallback={
    <section className={styles.section} id={sectionId} key={sectionId}>
      <h2 className={styles.title}>{education?.title}</h2>
    </section>
    }>
      <section className={styles.section} id={sectionId} key={sectionId}>

        <h2 className={styles.title}>{education?.title}</h2>

        <div className={styles.metroStationWrapper}>
          <MetroStation />
        </div>

        <CardsCarousel>
          {education?.cards.map((card, index) => (
            <Card
              key={card.id}     
              {...card}
            />
          ))}
        </CardsCarousel>
      </section>
    </Suspense>
  );
}