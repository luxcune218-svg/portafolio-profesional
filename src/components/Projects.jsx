
import {
  Code2,
  ExternalLink,
  Globe2,
  Layers2,
} from "lucide-react";

import { projects } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Projects() {
  return (
    <section
      className="projects section-shell section-shell--tint"
      id="proyectos"
    >
      <div className="container">

        {/* ENCABEZADO */}
        <Reveal>
          <SectionHeading
            eyebrow="Trabajo seleccionado"
            title={
              <>
                Ideas que toman{" "}
                <span className="text-accent">forma.</span>
              </>
            }
            description="Proyectos reales que reflejan mi interés por desarrollar soluciones tecnológicas."
          />
        </Reveal>

        {/* CONTENEDOR DE PROYECTOS */}
        <div className="projects-grid">

          {projects.map((project) => (
            <Reveal
              className="project-card"
              key={project.number}
            >

              {/* IMAGEN DEL PROYECTO */}
              <div className="project-preview">

                {project.website ? (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-image-link"
                    aria-label={`Visitar ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={`Captura de ${project.title}`}
                      className="project-real-image"
                      loading="lazy"
                    />

                    <span className="project-image-overlay">
                      <ExternalLink size={25} />
                      <span>Visitar página web</span>
                    </span>
                  </a>
                ) : (
                  <div className="project-image-link">
                    <img
                      src={project.image}
                      alt={`Captura de ${project.title}`}
                      className="project-real-image"
                      loading="lazy"
                    />
                  </div>
                )}

                <span className="project-type">
                  <Globe2 size={13} />
                  {project.type}
                </span>

              </div>

              {/* INFORMACIÓN DEL PROYECTO */}
              <div className="project-info">

                <div className="project-number">
                  PROYECTO {project.number}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {/* TECNOLOGÍAS UTILIZADAS */}
                <div className="project-bottom">

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* REPOSITORIO GITHUB */}
                  {project.repository && (
                    <div className="project-links">
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Ver código del proyecto en GitHub"
                        title="Ver código en GitHub"
                      >
                        <Code2 size={18} />
                      </a>
                    </div>
                  )}

                </div>

                {/* BOTÓN VER PROYECTO */}
                {project.website && (
                  <a
                    className="button button--primary project-visit-button"
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver proyecto
                    <ExternalLink size={17} />
                  </a>
                )}

              </div>

            </Reveal>
          ))}

          {/* TARJETA PARA FUTUROS PROYECTOS */}
          <Reveal
            className="project-next-card"
            delay={100}
          >
            <span className="next-card-icon">
              <Layers2 size={20} />
            </span>

            <span className="eyebrow">
              Próximamente
            </span>

            <h3>Más proyectos en camino.</h3>

            <p>
              Un espacio para futuros proyectos de análisis de datos,
              inteligencia artificial, Machine Learning e IoT con Arduino.
            </p>

            <span className="next-card-line" />
          </Reveal>

        </div>
      </div>
    </section>
  );
}
