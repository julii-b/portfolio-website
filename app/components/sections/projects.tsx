import CardsCarousel from "@/app/ui/cards-carousel";
import Card from "@/app/ui/card/card";
import styles from "./sections.module.css";
import { faReact } from "@fortawesome/free-brands-svg-icons";


export default function Projects() {
  return (
    <section className={styles.section} id="projects" key="projects-section">

      <h2>Projects</h2>

      <CardsCarousel>

        <Card
        title="Portfolio Website"
        time="2026"
        skills={[
          {name: "Next.js"},
          {name: "React", fontAwesomeIcon: faReact},
          {name: "TypeScript"},
        ]}
        >
          <p>dshgfffh</p>
        </Card>

        <Card
        title="SimplePolls"
        time="2025"
        skills={[
          {name: "Express"},
          {name: "Prisma (PostgreSQL)"},
          {name: "REST API"},
          {name: "OpenAPI (Swagger)"},
          {name: "Supertest & Vitest"},
          {name: "React", fontAwesomeIcon: faReact},
          {name: "React Router"},
          {name: "TypeScript"},
        ]}
        >
          <p>asdkfslkdjf</p>
        </Card>

        <Card
        title="GuessTheFlag"
        time="2025"
        skills={[
          {name: "React", fontAwesomeIcon: faReact},
          {name: "TypeScript"},
          {name: "3rd Party APIs"},
        ]}
        >
          <p>asdfjsdlkajld</p>
        </Card>

      </CardsCarousel>

    </section>
  );
}