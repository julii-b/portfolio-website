import CardsCarousel from "@/app/ui/cards-carousel/cards-carousel";
import Card from "@/app/ui/card/card";
import styles from "./sections.module.css";
import MetroStation from "@/app/components/metro-line/metro-station/metro-station";

/**
 * Languages section component displaying languages in a card carousel.
 */
export default function Languages() {
  return (
    <section className={styles.section} id="languages" key="languages-section">

      <h2>Languages</h2>

      <div className={styles.metroStationWrapper}>
        <MetroStation />
      </div>

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