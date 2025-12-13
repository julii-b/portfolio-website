import CardsCarousel from "@/app/ui/cards-carousel";
import Card from "@/app/ui/card";
import styles from "./sections.module.css";


export default function Education() {
  return (
    <section className={styles.section} id="education" key="education-section">

      <h2>Education</h2>
      
      <CardsCarousel>

        <Card>
          <h3>FH Aachen</h3>
        </Card>

        <Card>
          <h3>TH Aschaffenburg</h3>
        </Card>

      </CardsCarousel>

    </section>
  );
}