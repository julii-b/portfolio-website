import Header from "@/app/components/header/header";
import SectionWithCards from "@/app/components/section-with-cards/section-with-cards";
import ContactMe from "@/app/components/contact-me/contact-me";

export default function Home() {
  return (
    <>
      <Header />

      <SectionWithCards sectionId="projects" showScrollUpButton showScrollDownButton />
      <SectionWithCards sectionId="education" showScrollUpButton showScrollDownButton />
      <SectionWithCards sectionId="work-experience" showScrollUpButton showScrollDownButton />
      <SectionWithCards sectionId="languages" showScrollUpButton showScrollDownButton />
      <ContactMe />
    </>
  );
}
