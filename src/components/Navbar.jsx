import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, personalInfo } from "../data/portfolio.js";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell container" aria-label="Navegación principal">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Ir al inicio">
          <span className="brand-mark">F</span>
          <span>{personalInfo.name}</span>
          <span className="brand-period">.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div
          className={`nav-content ${menuOpen ? "nav-content--open" : ""}`}
          id="primary-navigation"
        >
          <div className="nav-links">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </div>
          <a className="nav-cta" href="#contacto" onClick={closeMenu}>
            Hablemos <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}
