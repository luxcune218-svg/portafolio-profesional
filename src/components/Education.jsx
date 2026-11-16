import { BookOpen, GraduationCap } from "lucide-react";
import { education } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Education() {
  return (
    <section className="education section-shell" id="formacion">
      <div className="container education-grid">
        <Reveal>
          <SectionHeading
            eyebrow="Mi recorrido"
            title={<>Formación para el <span className="text-accent">futuro.</span></>}
            description="Una base académica en crecimiento y una carrera enfocada en la tecnología."
          />
          <div className="education-aside">
            <span className="education-aside-icon"><BookOpen size={19} /></span>
            <span>El aprendizaje es un proceso continuo.</span>
          </div>
        </Reveal>
        <div className="timeline">
          {education.map((item, index) => (
            <Reveal className={`timeline-item ${item.current ? "timeline-item--current" : ""}`} delay={index * 100} key={item.institution}>
              <span className="timeline-marker"><GraduationCap size={17} /></span>
              <div className="timeline-card">
                <div className="timeline-top">
                  <span className="timeline-period">{item.period}</span>
                  {item.current && <span className="current-badge"><span /> En curso</span>}
                </div>
                <h3>{item.institution}</h3>
                {item.program && <p>{item.program}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
