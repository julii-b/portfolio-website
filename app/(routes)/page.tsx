import Image from "next/image";
import Projects from "@/app/components/sections/projects";
import Education from "@/app/components/sections/education";
import Header from "@/app/components/header/header";
import WorkExperience from "@/app/components/sections/work-experience";
import Languages from "@/app/components/sections/languages";
import ContactMe from "@/app/components/contact-me/contact-me";

export default function Home() {
  return (
    <>
      <Header />
      <Projects />
      <Education />
      <WorkExperience />
      <Languages />
      <ContactMe />
    </>
  );
}
