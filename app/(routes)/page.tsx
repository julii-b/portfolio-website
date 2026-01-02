import Header from "@/app/components/header/header";
import SectionWithCards from "@/app/components/section-with-cards/section-with-cards";
import ContactMe from "@/app/components/contact-me/contact-me";

export default function Home() {
  return (
    <>
      <Header />

      {SectionWithCards("projects")}
      {SectionWithCards("education")}
      {SectionWithCards("work-experience")}
      {SectionWithCards("languages")}
      <ContactMe />
    </>
  );
}
