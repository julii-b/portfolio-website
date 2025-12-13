import CardsCarousel from "@/app/ui/cards-carousel";
import Card from "@/app/ui/card";
import styles from "./sections.module.css";


export default function Languages() {
  return (
    <section className={styles.section} id="languages" key="languages-section">

      <h2>Languages</h2>

      <CardsCarousel>

        <Card>
          <h3>German</h3>
        </Card>

        <Card>
          <h3>English</h3>
        </Card>

        <Card>
          <h3>French</h3>
        </Card>

      </CardsCarousel>

    </section>
  );
}