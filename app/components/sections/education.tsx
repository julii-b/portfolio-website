import CardsCarousel from "@/app/ui/cards-carousel/cards-carousel";
import Card from "@/app/ui/card/card";
import styles from "./sections.module.css";
import SkillBadge from "@/app/ui/skill-badge/skill-badge";
import { faAngular, faLaravel, faPhp, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faAd } from "@fortawesome/free-solid-svg-icons";


export default function Education() {
  return (
    <section className={styles.section} id="education" key="education-section">

      <h2>Education</h2>
      
      <CardsCarousel>

        <Card
        title="B.Sc. Computer Science"
        subtitle="FH Aachen University of Applied Sciences"
        location="Aachen, Germany"
        time="2020 - 2024"
        skills={[
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
        ]}
        backgroundImageUrl="https://cdn.pixabay.com/photo/2014/10/30/15/40/dom-509389_1280.jpg"
        >
          <p>🌟 Grade: 1.3 (ECTS: A) with distinction - top 5% of graduates</p>
          <p>Thesis: Prototype Implementation for Retrieval Augmented Generation and Evaluation of Major LLMs</p>

          <ul>
            <li>Object-oriented programming (Java, C++, Python)</li>
            <li>Model-based systems engineering</li>
            <li>Data analysis and visualization</li>
            <li>Web development and databases (PHP, JavaScript/TypeScript, SQL, HTML, Laravel, Vue.js, Angular)</li>
            <li>Artificial intelligence (traditional problem-solving algorithms, large language models)</li>
          </ul>
        </Card>

        <Card
        title="Multimedia Communication and Documentation Bachelor's program"
        subtitle="TH Aschaffenburg University of Applied Sciences"
        location="Aschaffenburg, Germany"
        time="2018 - 2020"
        skills={[
          
          {name: "Graphic Design"},
          {name: "User Oriented Design"},
          {name: "Web Design"},
          {name: "CSS"},
          {name: "HTML"},
          {name: "JavaScript"},
          {name: "Adobe Creative Suite"},
        ]}
        backgroundImageUrl="https://cdn.pixabay.com/photo/2022/09/05/16/32/johannisburg-castle-7434574_1280.jpg"
        >
          <ul>
            <li>Focus on user-oriented design</li>
            <li>Multimedia tools (Adobe Creative Suite)</li>
            <li>Creation of user manuals and other documentation</li>
            <li>First familiarity with web technologies (HTML, CSS, JavaScript)</li>
          </ul>
        </Card>

      </CardsCarousel>

    </section>
  );
}