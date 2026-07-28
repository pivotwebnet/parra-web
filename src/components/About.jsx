import { motion } from "framer-motion";
import { HOTEL } from "../data/hotel";
import "./About.css";

const stats = [
  { value: "3★", label: "Categoría" },
  { value: "24 hs", label: "Recepción" },
  { value: "100%", label: "Wi-Fi gratis" },
  { value: "1", label: "Cuadra al Jockey Club" },
];

export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="container about-grid">
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-card card-back" />
          <img
            src="https://picsum.photos/seed/parra-facade/900/1100"
            alt={`Fachada de ${HOTEL.fullName}`}
            className="about-card card-front"
          />
          <div className="about-badge">
            <span className="gold-text">{HOTEL.stars}★</span>
            <p>Hotel & Suites</p>
          </div>
        </motion.div>

        <div className="about-copy">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nuestra historia
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            El punto de encuentro en el <span className="gold-text">corazón de Rafaela</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {HOTEL.fullName} es un cómodo alojamiento de {HOTEL.stars} estrellas
            ubicado en pleno centro de Rafaela, provincia de Santa Fe. Ofrecemos
            habitaciones bien equipadas, desayuno americano y estacionamiento sin
            cargo, pensado tanto para viajeros de negocios como para quienes
            visitan la ciudad en familia.
          </motion.p>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
