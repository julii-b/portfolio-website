import styles from './page.module.css';
import Header from "@/app/components/header/header";
import SectionWithCards from "@/app/components/section-with-cards/section-with-cards";
import ContactMe from "@/app/components/contact-me/contact-me";

export default function Home() {
  return (
    <>
      <Header
      className={styles.snapBottom}
      />
      
      <SectionWithCards
      sectionId="projects"
      showScrollUpButton showScrollDownButton
      className={styles.snapBottom}
      role="main"
      />
      <SectionWithCards
      sectionId="education"
      showScrollUpButton showScrollDownButton
      className={styles.snapBottom}
      />
      <SectionWithCards
      sectionId="work-experience"
      showScrollUpButton showScrollDownButton
      className={styles.snapBottom}
      />
      <SectionWithCards
      sectionId="languages"
      showScrollUpButton
      showScrollDownButton
      className={styles.snapBottom}
      />
      <ContactMe
      className={styles.snapBottom}
      />
      
    </>
  );
}
