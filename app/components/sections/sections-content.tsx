import Card from "@/app/ui/card/card";
import { faAngular, faLaravel, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { color } from "motion";

export type SectionContent = {
  id: string;
  title: string;
  lineColor?: string;
  cards?: Array<{ id: string } & React.ComponentProps<typeof Card>>;
}

const sectionsContent: SectionContent[] = [
  {
    id: "projects",
    title: "Projects",
    lineColor: "#b60000",
    cards: [
      {
        id: "portfolio-website",
        title: "Portfolio Website",
        time: "2026",
        skills: [
          {name: "Next.js"},
          {name: "React", fontAwesomeIcon: faReact},
          {name: "TypeScript"},
        ],
        children: (
          <p>My personal portfolio website showcasing my projects, skills, and experience. Built with Next.js and React.</p>
        ),
      },
      {
        id: "simple-polls",
        title: "SimplePolls",
        time: "2025",
        skills: [
          {name: "Express"},
          {name: "Prisma (PostgreSQL)"},
          {name: "REST API"},
          {name: "OpenAPI (Swagger)"},
          {name: "Supertest & Vitest"},
          {name: "React", fontAwesomeIcon: faReact},
          {name: "React Router"},
          {name: "TypeScript"},
        ],
        children: (
          <p>alskdfjdk</p>
        ),
      },
      {
        id: "guess-the-flag",
        title: "GuessTheFlag",
        time: "2025",
        skills: [
          {name: "React", fontAwesomeIcon: faReact},
          {name: "TypeScript"},
          {name: "3rd Party APIs"},
        ],
        children: (
          <p>alskdfjdk</p>
        ),
      },
    ],
  },
  {
    id: "education",
    title: "Education",
    lineColor: "#96009b",
    cards: [
      {
        id: "bachelor-computer-science",
        title: "B.Sc. Computer Science",
        subtitle: "FH Aachen University of Applied Sciences",
        location: "Aachen, Germany",
        time: "2020 - 2024",
        skills: [
          {name: "Machine Learning"},
          {name: "Model-Based Systems Engineering"},
          {name: "Object-Oriented Programming"},
          {name: "Software Engineering"},
          {name: "Web Development"},
          {name: "C++"},
          {name: "Java"},
          {name: "JavaScript"},
          {name: "PHP"},
          {name: "Python"},
          {name: "SQL"},
          {name: "Angular", fontAwesomeIcon: faAngular},
          {name: "Laravel", fontAwesomeIcon: faLaravel},
          {name: "Vue.js", fontAwesomeIcon: faVuejs},
        ],
        backgroundImageUrl: "https://cdn.pixabay.com/photo/2014/10/30/15/40/dom-509389_1280.jpg",
        children: (
          <>
            <p>🌟 Grade: 1.3 (ECTS: A) with distinction - top 5% of graduates</p>
            <p>Thesis: Prototype Implementation for Retrieval Augmented Generation and Evaluation of Major LLMs</p>

            <ul>
              <li>Object-oriented programming (Java, C++, Python)</li>
              <li>Model-based systems engineering</li>
              <li>Data analysis and visualization</li>
              <li>Web development and databases (PHP, JavaScript/TypeScript, SQL, HTML, Laravel, Vue.js, Angular)</li>
              <li>Artificial intelligence (traditional problem-solving algorithms, large language models)</li>
            </ul>
          </>
        ),
      },
      {
        id: "bachelor-mcd",
        title: "Multimedia Communication and Documentation Bachelor's program",
        subtitle: "TH Aschaffenburg University of Applied Sciences",
        location: "Aschaffenburg, Germany",
        time: "2018 - 2020",
        skills: [
          {name: "Graphic Design"},
          {name: "User Oriented Design"},
          {name: "Web Design"},
          {name: "CSS"},
          {name: "HTML"},
          {name: "JavaScript"},
          {name: "Adobe Creative Suite"},
        ],
        backgroundImageUrl: "https://cdn.pixabay.com/photo/2022/09/05/16/32/johannisburg-castle-7434574_1280.jpg",
        children: (
          <>
            <ul>
              <li>Focus on user-oriented design</li>
              <li>Multimedia tools (Adobe Creative Suite)</li>
              <li>Creation of user manuals and other documentation</li>
              <li>First familiarity with web technologies (HTML, CSS, JavaScript)</li>
            </ul>
          </>
      ),
      }
    ],
  },
  {
    id: "work-experience",
    title: "Work Experience",
    lineColor: "#003597",
    cards: [
      {
        id: "idsb",
        title: "IT Support & Administration with Application Development",
        subtitle: "International German School of Brussels (iDSB)",
        location: "Wezembeek-Oppem, Belgium",
        time: "2025 - Present",
        children: (
          <p>kjhjhjk</p>
        ),
      },
      {
        id: "outlier",
        title: "Coding and Problem-Solving Specialist for AI Training",
        subtitle: "Outlier",
        location: "Remote",
        time: "2024",
        children: (
          <p>kjhjhjk</p>
        ),
      },
      {
        id: "vacuubrand",
        title: "Working Student - Web Design",
        subtitle: "VacuuBrand",
        location: "Wertheim, Germany",
        time: "2019",
        backgroundImageUrl: "https://cdn.pixabay.com/photo/2017/05/24/06/56/wertheim-2339708_1280.jpg",
        children: (
          <p>kjhjhjk</p>
        ),
      }
    ],
  },
  {
    id: "languages",
    title: "Languages",
    lineColor: "#007222",
    cards: [
      {
        id: "german",
        title: "German",
        subtitle: "Native Speaker",
        children: (
          <></>
        ),
      },
      {
        id: "english",
        title: "English",
        subtitle: "C1 Level (Advanced)",
        children: (
          <></>
        ),
      },
      {
        id: "french",
        title: "French",
        subtitle: "B1 Level (Intermediate)",
        children: (
          <></>
        ),
      }
    ],
  },
  {
    id: "contact-form",
    title: "Contact Me",
    lineColor: "#cfbb00"
  }
];
export default sectionsContent;