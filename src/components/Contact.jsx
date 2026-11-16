import { ArrowUpRight, Github, Mail, Phone } from "lucide-react";
import { personalInfo } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Contact() {
  const contactMethods = [
    { label: "Correo electrónico", value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: Mail },
    {
      label: "Correo alternativo",
      value: personalInfo.secondaryEmail,
      href: `mailto:${personalInfo.secondaryEmail}`,
      icon: Mail,
    },
    { label: "Teléfono", value: personalInfo.phone, href: `tel:${personalInfo.phone}`, icon: Phone },
    {
      label: "GitHub",
      value: personalInfo.githubUsername,
      href: personalInfo.github,
      icon: Github,
      external: true,
    },
  ];

  return (
    <section className="contact section-shell section-shell--tint" id="contacto">
      <div className="container">
        <Reveal className="contact-panel">
          <div className="contact-content">
            <SectionHeading
              eyebrow="Contacto"
              title={<>Mis datos de <span className="text-accent">contacto.</span></>}
            />
          </div>
          <div className="contact-methods">
            {contactMethods.map(({ label, value, href, icon: Icon, external }) => (
              <a
                className="contact-method"
                href={href}
                key={label}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
              >
                <span className="contact-method-icon"><Icon size={18} aria-hidden="true" /></span>
                <span className="contact-method-copy">
                  <span className="contact-method-label">{label}</span>
                  <span className="contact-method-value">{value}</span>
                </span>
                <ArrowUpRight className="contact-method-arrow" size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
