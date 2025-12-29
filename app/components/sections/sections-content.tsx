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
        id: "project-portfolio-website",
        title: "Portfolio Website",
        time: "2026",
        skills: [
          {name: "Next.js"},
          {name: "React", fontAwesomeIcon: faReact},
          {name: "TypeScript"},
        ],
        children: (
          <>
            <p>My personal portfolio website showcasing my projects, skills, and experience. Built with Next.js and React.</p>
            <p>Once the project is finished, I will have to complete this description.</p>
          </>
        ),
      },
      {
        id: "project-simple-polls",
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
        backgroundImageUrl: "/background-images/simplepolls-background.png",
        children: (
          <>
            <p>
              <b>Frontend:</b> <a href="https://simplepolls.julius-busch.com" target="_blank" rel="noopener noreferrer"> simplepolls.julius-busch.com </a>
            </p>
            <p>
              <b>Backend API Documentation:</b> <a href="https://apisimplepolls.julius-busch.com/docs" target="_blank" rel="noopener noreferrer"> apisimplepolls.julius-busch.com/docs </a>
            </p>
            <p>
              <b>GitHub Repository:</b> <a href="https://github.com/julii-b/SimplePolls" target="_blank" rel="noopener noreferrer"> github.com/julii-b/SimplePolls </a>
            </p>
            <p>
              With SimplePolls, I wanted to create a simple and user-friendly application that showcases my ability to build full-stack web applications.
              <br />
              The application has a React frontend and an Express backend.
            </p>
            <p>
              For the backend I decided to create a public RESTful API.
              <br />
              The API is documented using OpenAPI (<a href="https://apisimplepolls.julius-busch.com/docs" target="_blank" rel="noopener noreferrer">Swagger UI</a>) and can be accessed publicly.
              <br />
              I used Prisma as an ORM to interact with a PostgreSQL database.
              <br />
              I implemented various security features such as rate limiting and authentication for modifying data, and made a conscious decision on how to set up CORS.
              <br />
              To make sure that everything works as expected, I wrote tests for the API using Supertest and Vitest.
            </p>
            <p>
              For the <a href="https://simplepolls.julius-busch.com" target="_blank" rel="noopener noreferrer">frontend</a> I wanted to create a fun and intuitive interface.
              It is built with React and uses React Router in Data Mode for routing.
              <br />
              The design is responsive, allowing users to enjoy the application on both mobile and desktop devices.
              <br />
              Users can create, edit, share and participate in polls.
              <br />
              Also, I implemented internationalization using i18next, making the frontend available in English, German and French.
            </p>
            <p>
              If you want, please use the links above to check out the project and its code!
            </p>
          </>
        ),
      },
      {
        id: "project-guess-the-flag",
        title: "GuessTheFlag",
        time: "2025",
        skills: [
          {name: "React", fontAwesomeIcon: faReact},
          {name: "TypeScript"},
          {name: "3rd Party APIs"},
        ],
        backgroundImageUrl: "/background-images/guesstheflag-background.png",
        children: (
          <>
            <p>
              <b>Demo:</b> <a href="https://guesstheflag.julius-busch.com" target="_blank" rel="noopener noreferrer"> guesstheflag.julius-busch.com </a>
            </p>
            <p>
                <b>GitHub Repository:</b> <a href="https://github.com/julii-b/guesstheflag" target="_blank" rel="noopener noreferrer"> github.com/julii-b/guesstheflag </a>
            </p>
            <p>
              Because I love learning about different countries and their flags, I created GuessTheFlag to test and improve my flag knowledge in a fun way, and also practice my React skills.
            </p>
            <p>
                You are shown a random flag and you have to guess the country name as quickly as possible, collecting points for correct answers and speed, while competing against your own high score.
            </p>
            <p>
                Because I use the <a href="https://restcountries.com/" target="_blank" rel="noopener noreferrer">REST Countries API</a> to get the country names, the user can guess the country names in 26 different languages.
                <br />
                For the flags themselves, I use the <a href="https://flagcdn.com/" target="_blank" rel="noopener noreferrer">Flags API & CDN</a> by <a href="https://flagpedia.net/" target="_blank" rel="noopener noreferrer">Flagpedia.net</a>. This way, I can be sure that the country names and flags are always up to date.
            </p>
          </>
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
        id: "education-bachelor-computer-science",
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
        id: "education-bachelor-mcd",
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
        id: "work-idsb",
        title: "IT Support & Administration with Application Development",
        subtitle: "International German School of Brussels (iDSB)",
        location: "Wezembeek-Oppem, Belgium",
        time: "2025 - Present",
        backgroundImageUrl: "/background-images/wezembeek-oppem.jpg",
        children: (
          <>
            <ul>
              <li>IT support and troubleshooting for staff, students and parents in a school environment</li>
              <li>User account management, device setup and system administration (laptops, access rights, school systems)</li>
              <li>Preparation and configuration of devices and software for new staff members</li>
              <li>Hardware troubleshooting and basic laptop repairs, including coordination of external repairs</li>
              <li>Frontend development of internal Power Apps for document and process digitalization</li>
              <li>Design and iteration of application frontends based on existing documents and user feedback</li>
              <li>Development of small scripts and internal tools</li>
              <li>Occasional research, procurement and setup of IT equipment for specific use cases</li>
            </ul>
          </>
        ),
      },
      {
        id: "work-outlier",
        title: "Coding and Problem-Solving Specialist for AI Training",
        subtitle: "Outlier",
        location: "Remote",
        time: "2024",
        children: (
          <>
            <ul>
              <li>Designing complex coding problems to test the boundaries of current AIs</li>
              <li>Creating detailed solutions and explanations for coding challenges</li>
              <li>Contributed to AI training by solving coding challenges that current AIs cannot solve</li>
            </ul>
          </>
        ),
      },
      {
        id: "work-vacuubrand",
        title: "Working Student - Web Design",
        subtitle: "VacuuBrand",
        location: "Wertheim, Germany",
        time: "2019",
        skills: [
          {name: "Web Design"},
          {name: "UI Design"},
          {name: "CSS"},
          {name: "HTML"},
        ],
        backgroundImageUrl: "https://cdn.pixabay.com/photo/2017/05/24/06/56/wertheim-2339708_1280.jpg",
        children: (
          <p>Designing a landing page for a new product</p>
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
        id: "language-german",
        title: "German",
        subtitle: "Native Speaker",
        children: (
          <></>
        ),
      },
      {
        id: "language-english",
        title: "English",
        subtitle: "C1 Level (Advanced)",
        children: (
          <></>
        ),
      },
      {
        id: "language-french",
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