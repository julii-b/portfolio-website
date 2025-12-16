import CardsCarousel from "@/app/ui/cards-carousel";
import Card from "@/app/ui/card/card";
import styles from "./sections.module.css";


export default function Languages() {
  return (
    <section className={styles.section} id="languages" key="languages-section">

      <h2>Languages</h2>

      <CardsCarousel>

        <Card
        title="German"
        subtitle="Native Speaker"
        >
          <></>
        </Card>

        <Card
        title="English"
        subtitle="C1 Level (Advanced)"
        >
          <></>
        </Card>

        <Card
        title="French"
        subtitle="B1 Level (Intermediate)"
        >
          <></>
        </Card>
        
      </CardsCarousel>

    </section>
  );
}