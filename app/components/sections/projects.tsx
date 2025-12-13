import CardsCarousel from "@/app/ui/cards-carousel";
import Card from "@/app/ui/card";
import styles from "./sections.module.css";


export default function Projects() {
  return (
    <section className={styles.section} id="projects" key="projects-section">

      <h2>Projects</h2>

      <CardsCarousel>

        <Card>
          <h3>Portfolio Website</h3>
        </Card>

        <Card>
          <h3>SimplePolls</h3>
        </Card>

        <Card>
          <h3>GuessTheFlag</h3>
        </Card>

      </CardsCarousel>

    </section>
  );
}