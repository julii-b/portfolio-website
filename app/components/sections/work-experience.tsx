import CardsCarousel from "@/app/ui/cards-carousel";
import Card from "@/app/ui/card";
import styles from "./sections.module.css";


export default function WorkExperience() {
  return (
    <section className={styles.section} id="work-experience" key="work-experience-section">

      <h2>Work Experience</h2>

      <CardsCarousel>

        <Card>
          <h3>iDSB</h3>
        </Card>

        <Card>
          <h3>Outlier</h3>
        </Card>

        <Card>
          <h3>VacuuBrand</h3>
        </Card>

      </CardsCarousel>

    </section>
  );
}