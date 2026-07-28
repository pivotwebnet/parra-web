import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HOTEL } from "../data/hotel";
import "./Navbar.css";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar-inner container">
        <a href="#inicio" className="navbar-brand">
          <span className="navbar-brand-mark">EP</span>
          <span className="navbar-brand-text">{HOTEL.name}</span>
        </a>

        <nav className="navbar-links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="navbar-cta"
          href={`https://wa.me/${HOTEL.whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
        >
          Reservar
        </a>

        <button
          className={`navbar-burger ${open ? "is-open" : ""}`}
          aria-label="Abrir menú"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar-mobile ${open ? "is-open" : ""}`}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          href={`https://wa.me/${HOTEL.whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="navbar-mobile-cta"
        >
          Reservar por WhatsApp
        </a>
      </div>
    </motion.header>
  );
}
