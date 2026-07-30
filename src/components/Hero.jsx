import { motion } from "framer-motion";
import HeroPhotoMarquee from "./HeroPhotoMarquee";
import HeroStats from "./HeroStats";
import { useMagnetic } from "../hooks/useMagnetic";
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
  const bookRef = useMagnetic(10);
  const discoverRef = useMagnetic(10);

  return (
    <section className="hero" id="inicio">
      <div className="hero-bg-photo" />
      <div className="hero-glow hero-glow-gold" />
      <div className="hero-glow hero-glow-blue" />
      <div className="hero-grid-pattern" />
      <HeroPhotoMarquee />
      <div className="hero-vignette" />

      <div className="hero-content">
        <div className="hero-main">
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
              ref={bookRef}
              className="btn btn-gold tt"
              data-tooltip="Ir a Booking.com"
              href={HOTEL.bookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              Reservar ahora
            </a>
            <a
              ref={discoverRef}
              className="btn btn-ghost tt"
              data-tooltip="Ver servicios del hotel"
              href="#servicios"
            >
              Descubrir el hotel
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <HeroStats />
      </motion.div>

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
