import { ArrowUpRight, Code2, Database, Lightbulb } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const focusAreas = [
  { icon: Database, label: "Análisis de datos" },
  { icon: Code2, label: "Desarrollo de software" },
  { icon: Lightbulb, label: "Aprendizaje continuo" },
];

export default function About() {
  return (
    <section className="about section-shell section-shell--tint" id="sobre-mi">
      <div className="container about-grid">
        <Reveal className="about-heading">
          <SectionHeading eyebrow="Un poco sobre mí" title={<>Tecnología con <span className="text-accent">propósito.</span></>} />
          <div className="about-callout">
            <span className="callout-line" />
            <p>Me motiva entender cómo la tecnología y los datos pueden convertirse en soluciones útiles.</p>
            <ArrowUpRight size={18} aria-hidden="true" />
          </div>
        </Reveal>
        <Reveal className="about-content" delay={100}>
          <p>
            Soy estudiante de Ingeniería de Software con Inteligencia Artificial en SENATI,
            interesado en el desarrollo de soluciones tecnológicas y el aprendizaje continuo de
            nuevas herramientas y tecnologías.
          </p>
          <p>
            Tengo especial interés en el análisis de datos, la estadística y la inteligencia
            artificial. También me atrae el desarrollo de proyectos de Internet de las Cosas (IoT)
            utilizando Arduino, así como la creación de aplicaciones y soluciones web.
          </p>
          <p>
            Cuento con conocimientos en desarrollo frontend y backend, programación, gestión de
            bases de datos, desarrollo móvil y herramientas de ciencia de datos.
          </p>
          <p>
            Mi objetivo profesional es convertirme en un Analista de Datos, especializado en
            transformar información en conocimiento útil para facilitar la toma de decisiones.
          </p>
          <div className="focus-list">
            {focusAreas.map(({ icon: Icon, label }) => (
              <span className="focus-item" key={label}>
                <Icon size={16} aria-hidden="true" /> {label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
