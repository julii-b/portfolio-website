import CardsCarousel from "@/app/ui/cards-carousel/cards-carousel";
import Card from "@/app/ui/card/card";
import styles from "./sections.module.css";
import MetroStation from "@/app/components/metro-line/metro-station/metro-station";


/**
 * Work experience section component displaying work experience in a card carousel.
 */
export default function WorkExperience() {
  return (
    <section className={styles.section} id="work-experience" key="work-experience-section">

      <h2>Work Experience</h2>

      <div className={styles.metroStationWrapper}>
        <MetroStation />
      </div>

      <CardsCarousel>

        <Card
        title="IT Support & Administration with Application Development"
        subtitle="International German School of Brussels (iDSB)"
        location="Wezembeek-Oppem, Belgium"
        time="2025 - Present"
        >
          <p>kjhjhjk</p>
        </Card>

        <Card
        title="Coding and Problem-Solving Specialist for AI Training"
        subtitle="Outlier"
        location="Remote"
        time="2024"
        >
          <p></p>
        </Card>

        <Card
        title="Working Student - Web Design"
        subtitle="VacuuBrand"
        location="Wertheim, Germany"
        time="2019"
        backgroundImageUrl="https://cdn.pixabay.com/photo/2017/05/24/06/56/wertheim-2339708_1280.jpg"
        >
          <p></p>
        </Card>


      </CardsCarousel>

    </section>
  );
}