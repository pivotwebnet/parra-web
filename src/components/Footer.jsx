import { FaInstagram, FaGlobe } from "react-icons/fa6";
import { FaTripadvisor } from "react-icons/fa";
import { HOTEL } from "../data/hotel";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/images/parralogo.png" alt={HOTEL.fullName} className="footer-logo" />
          <div>
            <p className="footer-brand-name">{HOTEL.fullName}</p>
            <p className="footer-brand-tag">{HOTEL.address}</p>
          </div>
        </div>

        <nav className="footer-links">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#galeria">Galería</a>
          <a href="#ubicacion">Ubicación</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="footer-social">
          <a
            className="tt"
            data-tooltip="Instagram"
            href={HOTEL.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            className="tt"
            data-tooltip="Tripadvisor"
            href={HOTEL.tripadvisorUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Tripadvisor"
          >
            <FaTripadvisor />
          </a>
          <a
            className="tt"
            data-tooltip="Sitio web"
            href={HOTEL.website}
            target="_blank"
            rel="noreferrer"
            aria-label="Sitio web"
          >
            <FaGlobe />
          </a>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} {HOTEL.fullName}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
