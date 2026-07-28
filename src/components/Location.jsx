import { motion } from "framer-motion";
import { FaLocationDot, FaPhone, FaClock } from "react-icons/fa6";
import { HOTEL } from "../data/hotel";
import "./Location.css";

export default function Location() {
  return (
    <section className="location" id="ubicacion">
      <div className="container location-grid">
        <motion.div
          className="location-copy"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">Ubicación</span>
          <h2>
            En el centro de todo, <span className="gold-text">en el centro de Rafaela</span>
          </h2>
          <p>
            Estamos a pasos de los principales comercios, bancos y sitios de
            interés de la ciudad, con cochera propia a media cuadra para tu
            comodidad.
          </p>

          <ul className="location-details">
            <li>
              <FaLocationDot />
              <span>{HOTEL.address}</span>
            </li>
            <li>
              <FaPhone />
              <span>{HOTEL.phones.join(" · ")}</span>
            </li>
            <li>
              <FaClock />
              <span>Recepción abierta las 24 horas</span>
            </li>
          </ul>

          <a
            className="btn btn-gold"
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
              HOTEL.address
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Cómo llegar
          </a>
        </motion.div>

        <motion.div
          className="location-map"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <iframe
            title="Ubicación de El Parra Hotel & Suites"
            src={HOTEL.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
