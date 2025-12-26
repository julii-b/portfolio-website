import sectionsContent, { type SectionContent } from "./sections-content";
import CardsCarousel from "@/app/ui/cards-carousel/cards-carousel";
import Card from "@/app/ui/card/card";
import styles from "./sections.module.css";
import MetroStation from "@/app/components/metro-line/metro-station/metro-station";
import ContactMeComponent from "@/app/components/sections/contact-me/contact-me";

export function SectionWithCards (sectionId: string) {

  const education: SectionContent | undefined = sectionsContent.find(section => section.id === sectionId);
  if (education && education.cards) return (
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
  );
}

export function Education() {
  return SectionWithCards("education");
}

export function Projects() {
  return SectionWithCards("projects");
}

export function WorkExperience() {
  return SectionWithCards("work-experience");
}

export function Languages() {
  return SectionWithCards("languages");
}

export function ContactMe() {
  return <ContactMeComponent />;
}