import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Sparkles } from "lucide-react";
import { getConfiguredSocials, personalInfo } from "../data/portfolio.js";

const socialIcons = { GitHub: Github, LinkedIn: Linkedin };

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const socials = getConfiguredSocials();

  return (
    <section className="hero section-shell" id="inicio">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="availability">
            <span className="availability-dot" />
            <span>Aprendiendo y construyendo</span>
          </div>
          <p className="hero-greeting">Hola, soy</p>
          <h1>
            {personalInfo.name}
            <span className="hero-title">
              {personalInfo.role} <span className="text-accent">{personalInfo.specialization}</span>
            </span>
          </h1>
          <p className="hero-description">{personalInfo.introduction}</p>
          <div className="interest-list" aria-label="Áreas de interés">
            {personalInfo.interests.map((interest, index) => (
              <span key={interest}>
                {index > 0 && <span className="interest-separator" aria-hidden="true">/</span>}
                {interest}
              </span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="button button--primary" href="#proyectos">
              Ver mis proyectos <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="button button--secondary" href="#contacto">
              Contactarme <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-socials">
            <span>Encuéntrame en</span>
            {socials.length ? (
              socials.map(({ label, href }) => {
                const Icon = socialIcons[label];
                return (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                    <Icon size={18} />
                  </a>
                );
              })
            ) : (
              <span className="social-placeholder">Perfiles por configurar</span>
            )}
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="portrait-frame">
            {!photoFailed ? (
              <img
                src={personalInfo.photo}
                alt={`Fotografía profesional de ${personalInfo.name}`}
                onError={() => setPhotoFailed(true)}
              />
            ) : (
              <div className="portrait-placeholder" aria-label="Espacio para la fotografía profesional">
                <div className="placeholder-grid" />
                <div className="placeholder-avatar">
                  <span>{personalInfo.name.charAt(0)}</span>
                </div>
                <div className="placeholder-caption">
                  <Sparkles size={14} />
                  <span>Tu fotografía aquí</span>
                </div>
              </div>
            )}
          </div>
          <div className="floating-note floating-note--top">
            <span className="note-icon"><Sparkles size={17} /></span>
            <span><strong>Curiosidad</strong><small>por aprender</small></span>
          </div>
          <div className="floating-note floating-note--bottom">
            <span className="note-dot" />
            <span><strong>Datos + tecnología</strong><small>Un camino en construcción</small></span>
          </div>
          <a className="scroll-cue" href="#sobre-mi" aria-label="Desplazarse a la sección Sobre mí">
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
