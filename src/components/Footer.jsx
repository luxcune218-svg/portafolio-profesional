import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { getConfiguredSocials, navigation, personalInfo } from "../data/portfolio.js";

const socialIcons = { GitHub: Github, LinkedIn: Linkedin };

export default function Footer() {
  const socials = getConfiguredSocials();
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark">F</span>
          <span>{personalInfo.name}</span><span className="brand-period">.</span>
        </a>
        <div className="footer-nav" aria-label="Navegación de pie de página">
          {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </div>
        <div className="footer-socials">
          {socials.map(({ label, href }) => {
            const Icon = socialIcons[label];
            return <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <Icon size={17} /><ArrowUpRight size={11} className="footer-social-arrow" />
            </a>;
          })}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.</span>
        <a href="#inicio">Hecho con intención <span>↑</span></a>
      </div>
    </footer>
  );
}
