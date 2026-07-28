import { motion } from "framer-motion";
import Hero3D from "./Hero3D";
import { HOTEL } from "../data/hotel";
import "./Hero.css";

const slideRight = {
  hidden: { opacity: 0, x: -70 },
  show: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <Hero3D />
      <div className="hero-vignette" />

      <div className="hero-content container">
        <motion.span
          className="eyebrow"
          custom={0}
          variants={slideRight}
          initial="hidden"
          animate="show"
        >
          {HOTEL.stars} Estrellas · {HOTEL.city}, {HOTEL.province}
        </motion.span>

        <motion.h1
          className="hero-title"
          custom={1}
          variants={slideRight}
          initial="hidden"
          animate="show"
        >
          <span className="gold-text">HOTEL PARRA</span> & Suites
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          custom={2}
          variants={slideRight}
          initial="hidden"
          animate="show"
        >
          En Rafaela, lo mejor y en pleno centro
        </motion.p>

        <motion.div
          className="hero-actions"
          custom={3}
          variants={slideRight}
          initial="hidden"
          animate="show"
        >
          <a
            className="btn btn-gold"
            href={HOTEL.bookingUrl}
            target="_blank"
            rel="noreferrer"
          >
            Reservar ahora
          </a>
          <a className="btn btn-ghost" href="#servicios">
            Descubrir el hotel
          </a>
        </motion.div>
      </div>

      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <span />
        <p>Desplázate</p>
      </motion.div>
    </section>
  );
}
