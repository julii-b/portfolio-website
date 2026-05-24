import Card from "@/app/ui/card/card";
import XDaysDuolingo from "./x-days-duolingo";
import { faBook, faCode, faDatabase, faEnvelope, faFlaskVial, faHexagonNodes, faLayerGroup, faPaintBrush, faServer, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type SectionContent = {
  id: string;
  title: string;
  lineColor?: string;
  cards?: Array<{ id: string, contentSummary: string } & React.ComponentProps<typeof Card>>;
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
          {name: "Next.js", fontAwesomeIcon: faLayerGroup},
          {name: "React", fontAwesomeIcon: faLayerGroup},
          {name: "Redis", fontAwesomeIcon: faDatabase},
          { name: "Email Delivery", fontAwesomeIcon: faEnvelope },
          { name: "AI Integration", fontAwesomeIcon: faHexagonNodes },
        ],
        backgroundImageUrl: "/background-images/portfolio-background.webp",
        children: (
          <>
            <p>
              <b>GitHub Repository:</b> <a href="https://github.com/julii-b/portfolio-website" target="_blank" rel="noopener noreferrer"> github.com/julii-b/portfolio-website </a>
            </p>
            <p>
              My most recent project is this personal website you are looking at right now.<br />
              I built it to present my skills, projects, and experiences, using Next.js and React.
            </p>
            <p>
              It includes a chatbot to answer questions about me, and help users navigate the website.
              For this, I implemented function calling, so the chatbot can interact with the website. <br />
              The chatbot uses Google's Gemini API, but could also be adapted to work with other APIs.
            </p>
            <p>
              I implemented a contact form that sends email notifications via SMTP2GO, following common security best practices (e.g. header sanitization). <br />
              To prevent spam, I use server-side rate limiting with Redis.
            </p>
            <p>
              Feel free to play around with the chatbot and explore my website!<br />
              You can also find the code on GitHub using the link above.
            </p>
          </>
        ),
        contentSummary: "Personal portfolio website (Next.js/React). Includes a navigation chatbot using Google Gemini API with function calling. Contact form sends email via SMTP2GO; server-side rate limiting via Redis. User is currently viewing this site. Code: github.com/julii-b/portfolio-website."
      },
      {
        id: "project-simple-polls",
        title: "SimplePolls",
        time: "2025",
        skills: [
          {name: "Express", fontAwesomeIcon: faLayerGroup},
          {name: "React", fontAwesomeIcon: faLayerGroup},
          {name: "Prisma (PostgreSQL)", fontAwesomeIcon: faDatabase},
          {name: "REST API", fontAwesomeIcon: faServer},
          {name: "OpenAPI (Swagger)", fontAwesomeIcon: faBook},
          {name: "Supertest & Vitest", fontAwesomeIcon: faFlaskVial},
        ],
        backgroundImageUrl: "/background-images/simplepolls-background.webp",
        children: (
          <>
            <p>
              <b>Frontend Demo:</b> <a href="https://simplepolls.julius-busch.com" target="_blank" rel="noopener noreferrer"> simplepolls.julius-busch.com </a>
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
              Please use the links above to check out the project and its code!
            </p>
          </>
        ),
        contentSummary: "Full-stack poll app. Frontend: React + React Router (data routers), i18next (EN/DE/FR). Backend: Express REST API with Prisma + PostgreSQL, documented with OpenAPI (Swagger UI), includes rate limiting + auth for write operations, tested with Supertest + Vitest. Demo: simplepolls.julius-busch.com. Code: github.com/julii-b/SimplePolls."
      },
      {
        id: "project-guess-the-flag",
        title: "GuessTheFlag",
        time: "2025",
        skills: [
          {name: "React", fontAwesomeIcon: faLayerGroup},
          {name: "3rd Party APIs", fontAwesomeIcon: faServer},
        ],
        backgroundImageUrl: "/background-images/guesstheflag-background.webp",
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
        contentSummary: "React quiz game for guessing country flags. Uses REST Countries API for localized country names and Flagpedia/flagcdn.com for flag images. Demo: guesstheflag.julius-busch.com. Code: github.com/julii-b/guesstheflag."
      },
    ],
  },
  {
    id: "education",
    title: "Education",
    lineColor: "#96009b",
    cards: [
      {
        id: "education-computer-science",
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
          {name: "C++", fontAwesomeIcon: faCode},
          {name: "Java", fontAwesomeIcon: faCode},
          {name: "JavaScript", fontAwesomeIcon: faCode},
          {name: "PHP", fontAwesomeIcon: faCode},
          {name: "Python", fontAwesomeIcon: faCode},
          {name: "SQL", fontAwesomeIcon: faDatabase},
          {name: "Angular", fontAwesomeIcon: faLayerGroup},
          {name: "Laravel", fontAwesomeIcon: faLayerGroup},
          {name: "Vue.js", fontAwesomeIcon: faLayerGroup},
        ],
        backgroundImageUrl: "/background-images/aachen.webp",
        children: (
          <>
            <p><b>Grade:</b> <FontAwesomeIcon icon={faStar} color="orange"/> 1.3 (ECTS: A), graduated with distinction (top 5% of graduates)</p>
            <p><b>Thesis:</b> Prototype Implementation for Retrieval Augmented Generation and Evaluation of Major LLMs</p>

            <p>
              I studied Computer Science at the FH Aachen University of Applied Sciences from 2020 to 2024.<br />
              The program covered different aspects of computer science:
            </p>
            <p>
              I had courses in higher mathematics, algorithms, data structures and computer architecture, which helped me build
              an understanding of the theoretical foundations of computer science.
            </p>
            <p>
              I also became confident in multiple programming languages, including object-oriented programming with Java, C++ and Python.<br />
              Web development remained a very important topic to me, as I deepened my knowledge in frontend and backend development using the
              languages PHP, JavaScript/TypeScript, and SQL, together with frameworks like Laravel, Vue.js and Angular.
            </p>
            <p>
              I enjoyed learning core software engineering skills, like UML, design patterns, testing and project management.
            </p>
            <p>
              For my thesis with the title "Prototype Implementation for Retrieval Augmented Generation and Evaluation of Major LLMs",
              building on previous courses in artificial intelligence, I implemented a prototype for Retrieval Augmented Generation (RAG).<br />
              RAG is a technique to enhance the capabilities of large language models (LLMs) by integrating external knowledge sources.<br />
              Using this prototype, I evaluated multiple LLMs to determine their performance in RAG, by feeding them with the content of the
              German-language Wikipedia, and asking questions on the provided text.<br />
              The evaluated models included versions of OpenAI's GPT models via the OpenAI API, as well as versions of locally executed models like
              Llama, Gemma, Mistral, and Mixtral.<br />
              The thesis was part of the AKzentE4.0 project of FH Aachen, which aims to make AI technologies accessible for small and medium-sized enterprises.
            </p>
            <p>
              My thesis was graded with 1.0, the best possible grade. Overall I graduated with a grade of 1.3 and distinction,
              being among the top 5% of graduates in my program.
            </p>
          </>
        ),
        contentSummary: "B.Sc. Computer Science (FH Aachen), graduated with distinction (overall grade 1.3 - top 5% of graduates). Focus: OOP (Java/C++/Python), software engineering, web development (PHP/TypeScript/SQL; Laravel/Vue/Angular), AI/LLMs. Thesis: Retrieval-Augmented Generation prototype and evaluation of major LLMs."
      },
      {
        id: "education-mcd",
        title: "Multimedia Communication and Documentation Bachelor's program",
        subtitle: "TH Aschaffenburg University of Applied Sciences",
        location: "Aschaffenburg, Germany",
        time: "2018 - 2020",
        skills: [
          {name: "Graphic Design"},
          {name: "User Oriented Design"},
          {name: "Web Design"},
          {name: "CSS", fontAwesomeIcon: faCode},
          {name: "HTML", fontAwesomeIcon: faCode},
          {name: "JavaScript", fontAwesomeIcon: faCode},
          {name: "Adobe Creative Suite", fontAwesomeIcon: faPaintBrush},
        ],
        backgroundImageUrl: "/background-images/aschaffenburg.webp",
        children: (
          <>
            <p>
              I began my studies with a Bachelor's program in Multimedia Communication and Documentation
              at the TH Aschaffenburg University of Applied Sciences.<br />
              The program focused on user-oriented design and communication.
            </p>
            <p>
              While studying in Aschaffenburg, I worked with many different multimedia tools, including the
              Adobe Creative Suite and first experience with web design and technologies like HTML, CSS and JavaScript.<br />
              I developed an eye for usability, clarity and the need to meet users where they are.<br />
            </p>
            <p>
              I realized that, while the focus on user experience and design was very interesting to me,
              I started reaching the limits of how I could apply this knowledge in practice and was more and
              more interested in the technical side of things.<br />
              I spent more time learning programming on the side, and eventually decided to
              switch to a Computer Science degree to build a stronger technical knowledge. The skills I
              acquired still influence how I approach software development today.
            </p>
          </>
      ),
        contentSummary: "Studies in user-oriented design, communication/documentation, multimedia tools (e.g. Adobe Creative Suite) plus early web development (HTML/CSS/JavaScript). Switched to Computer Science to focus on the technical side; usability and clarity still influence my work."

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
        title: "IT Support & Software Development",
        subtitle: "International German School of Brussels (iDSB)",
        location: "Wezembeek-Oppem, Belgium",
        time: "2025 - Present",
        backgroundImageUrl: "/background-images/wezembeek-oppem.webp",
        children: (
          <>
            <p>
              I started working at the International German School of Brussels in February 2025, initially doing IT support only.<br />
              My responsibility is to provide support to over 700 users, including staff, students and parents, for any kind of
              IT-related issues.<br />

              This includes managing user accounts, setting up new devices and other system administration tasks,
              as well as troubleshooting hardware and software issues and coordinating external repairs when necessary.
            </p>
            <p>
              Over time, my role increasingly developed towards software development. Today, I spend the majority of my time building internal
              applications and tools that help digitize documents and processes within the school.
            </p>
            <p>
              My main development project is an internal system built with React and Next.js. It includes Microsoft 365 authentication, email
              notifications, and workflow and approval tracking. I design and iterate on this application based on user feedback, with the
              goal of making internal processes easier and more transparent for the people using them.
            </p>
            <p>
              In addition to this larger project, I build smaller internal tools with React to improve day-to-day workflows.
            </p>
          </>
        ),
        contentSummary: "User support for staff/students/parents, account management, device setup, troubleshooting, and coordinating external repairs. Also develops internal apps with Next.js - e.g. a system for approval and workflow management - and small tools to digitalize school processes."
      },
      {
        id: "work-outlier",
        title: "Coding and Problem-Solving Specialist for AI Training",
        subtitle: "Outlier",
        location: "Remote",
        time: "2024",
        children: (
          <>
            <p>
              In 2024 I worked on the Outlier platform as a Coding and Problem-Solving Specialist,
              contributing to the training and evaluation of large language models.
            </p>
            <p>
              I mainly focused on solving complex coding and reasoning tasks, designed to identify
              weaknesses of current AI models. These tasks required me to carefully analyze the problem and
              come up with a solution that correctly handled all kinds of edge cases.
            </p>
            <p>
              Additionally, I reviewed and improved solutions created by others, and wrote new coding tasks
              that were designed to be challenging for AI models.
            </p>
            <p>
              For most tasks, I worked with Python to create solutions, which I documented in detail,
              so they could be easily reviewed by others.
            </p>
            <p>
              My contributions were used to improve the performance of large language models on coding 
              and reasoning tasks.
            </p>
          </>
        ),
        contentSummary: "Contributed to AI model training/evaluation by designing, solving and reviewing difficult coding + reasoning tasks. Documented solutions and created/iterated on challenge tasks, mainly in Python."

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
          {name: "CSS", fontAwesomeIcon: faCode},
          {name: "HTML", fontAwesomeIcon: faCode},
        ],
        backgroundImageUrl: "/background-images/wertheim.webp",
        children: (
          <>
            <p>
              In 2019, while studying Multimedia Communication and Documentation, I worked at
              VacuuBrand as a working student.
            </p>
            <p>
              My task was to design and implement a landing page for Vacuu-LAN. <br />
              I implemented it within VacuuBrand's CMS using HTML and CSS, applying my knowledge in web design.<br />
              The landing page works on both mobile and desktop devices.
            </p>
          </>
        ),
        contentSummary: "Designed a landing page for a product in the company's CMS using HTML and CSS."
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
        backgroundImageUrl: "/background-images/julius-1.webp",
        children: (
          <>
            <p>
              I was born and grew up in a small town in southern Germany, so German is my native language.<br />
              It was the main language throughout my education.
            </p>
            <p>
              Today, it is also one of the two main languages I use at work.
            </p>
          </>
        ),
        contentSummary: "Main teaching language throughout education, and one of the two main languages used at work."
      },
      {
        id: "language-english",
        title: "English",
        subtitle: "C1 Level (Advanced)",
        backgroundImageUrl: "/background-images/julius-2.webp",
        children: (
          <>
            <p>
              I started learning English in primary school.
              In high school, English was one of the subjects I chose for advanced courses.
            </p>
            <p>
              During my university studies, I had several courses taught in English and participated in
              group projects with international students.
              <br />
              My thesis was also written in English.
            </p>
            <p>
              Today, English is one of the two main languages I use at work to communicate with colleagues.
            </p>
          </>
        ),
        contentSummary: "Learned from primary school, advanced courses in high school, university courses and thesis in English, currently one of two main languages used at work."
      },
      {
        id: "language-french",
        title: "French",
        subtitle: "B1 Level (Intermediate)",
        backgroundImageUrl: "/background-images/julius-3.webp",
        children: (
          <>
            <p>
              Ever since I knew that I would eventually move to Brussels because my partner
              already lived here, I started learning French.
            </p>
            <p>
              I began with Duolingo, where I currently proudly hold a streak of <XDaysDuolingo />
              - <a href="https://www.duolingo.com/profile/julius.bu" target="_blank" rel="noopener noreferrer">follow
              me on Duolingo</a> if you want to :).
              <br />
              Since moving to Brussels, I'm also taking French classes.
            </p>
            <p>
              I keep making progress every day and am proud of every everyday conversation
              that works a little better than the last one.
            </p>
          </>
        ),
        contentSummary: "Started learning French with Duolingo before moving to Brussels, taking French classes since moving, making progress in everyday conversations."
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