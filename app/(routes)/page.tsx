import Header from "@/app/components/header/header";
import { Projects, Education, WorkExperience, Languages, ContactMe } from "@/app/components/sections/sections";

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
