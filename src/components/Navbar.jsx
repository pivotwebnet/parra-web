import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMagnetic } from "../hooks/useMagnetic";
import { HOTEL } from "../data/hotel";
import { asset } from "../utils/assetPath";
import "./Navbar.css";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#recorrido", label: "Recorrido 3D" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ctaRef = useMagnetic(10);

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
          <img
            src={asset("/images/parralogo.png")}
            alt={HOTEL.fullName}
            className="navbar-logo"
          />
        </a>

        <nav className="navbar-links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          ref={ctaRef}
          className="navbar-cta tt tt-bottom"
          data-tooltip="Escribinos por WhatsApp"
          href={`https://wa.me/${HOTEL.whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
        >
          Reservar
        </a>

        <button
          className={`navbar-burger tt tt-bottom ${open ? "is-open" : ""}`}
          data-tooltip={open ? "Cerrar menú" : "Abrir menú"}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
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
