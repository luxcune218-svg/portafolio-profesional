
import {
  BrainCircuit,
  ChartNoAxesCombined,
  Database,
  GitBranch,
  Layers3,
  PanelsTopLeft,
  Server,
  Smartphone,
  Wrench,
} from "lucide-react";

import { skillGroups } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const icons = {
  PanelsTopLeft,
  Server,
  ChartNoAxesCombined,
  BrainCircuit,
  Smartphone,
  Database,
  Layers3,
  Wrench,
  GitBranch,
};

// Correspondencia entre tecnologías y archivos SVG
const technologyIcons = {
  "HTML5": "html5.svg",
  "JavaScript": "javascript.svg",
  "TypeScript": "typescript.svg",
  "React": "react.svg",
  "Bootstrap": "bootstrap.svg",
  "Tailwind CSS": "tailwindcss.svg",

  "Java": "java.svg",
  "Python": "python.svg",
  "Node.js": "nodejs.svg",
  "Express.js": "express.svg",

  "R": "r.svg",
  "Scikit-learn": "scikit-learn.svg",
  "TensorFlow": "tensorflow.svg",
  "PyTorch": "pytorch.svg",

  "Android Studio": "android-studio.svg",

  "MySQL": "mysql.svg",
  "PostgreSQL": "postgresql.svg",
  "Microsoft SQL Server": "sql-server.svg",
  "SQLite": "sqlite.svg",
  "MongoDB": "mongodb.svg",

  "Visual Studio Code": "vscode.svg",
  "Antigravity": "antigravity.svg",
  "RStudio": "rstudio.svg",
  "Google Colab": "google-colab.svg",

  "Git": "git.svg",
  "GitHub": "github.svg",
  "Arduino": "arduino.svg",
  "Arduino (IoT)": "arduino.svg",
};

export default function Skills() {
  return (
    <section className="skills section-shell" id="habilidades">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Caja de herramientas"
            title={
              <>
                Habilidades que estoy{" "}
                <span className="text-accent">desarrollando.</span>
              </>
            }
            description="Tecnologías y herramientas que forman parte de mi formación e intereses."
          />
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon];

            return (
              <Reveal
                className="skill-card"
                delay={Math.min(index % 3, 2) * 70}
                key={group.category}
              >
                <div className="skill-card-top">
                  <span className="skill-icon">
                    {Icon && <Icon size={19} aria-hidden="true" />}
                  </span>

                  <span className="skill-count">
                    {String(group.skills.length).padStart(2, "0")}
                  </span>
                </div>

                <h3>{group.category}</h3>

                <div className="skill-tags skill-tags--icons">
                  {group.skills.map((skill) => {
                    const image = technologyIcons[skill];

                    return (
                      <span
                        className="skill-tag skill-tag--icon"
                        key={skill}
                        title={skill}
                      >
                        {image && (
                          <img
                            src={`/images/tecnologias/${image}`}
                            alt=""
                            loading="lazy"
                          />
                        )}

                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
