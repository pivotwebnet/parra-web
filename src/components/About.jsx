import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HOTEL, HOTEL_PHOTOS } from "../data/hotel";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "3★", label: "Categoría" },
  { value: "24 hs", label: "Recepción" },
  { value: "100%", label: "Wi-Fi gratis" },
  { value: "1", label: "Cuadra al Jockey Club" },
];

export default function About() {
  const trackRef = useRef(null);
  const imgRefs = useRef([]);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % HOTEL_PHOTOS.length);
    }, 4200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    imgRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        opacity: i === activeIndex ? 1 : 0,
        duration: 1.1,
        ease: "power2.inOut",
      });
    });
  }, [activeIndex]);

  return (
    <section className="about" id="nosotros" ref={sectionRef}>
      <div className="container about-grid">
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-card card-back" />
          <div className="about-card card-front">
            <div className="card-front-track" ref={trackRef}>
              {HOTEL_PHOTOS.map((photo, i) => (
                <img
                  key={photo.src}
                  ref={(el) => (imgRefs.current[i] = el)}
                  src={photo.src}
                  alt={photo.alt}
                  className="card-front-img"
                  style={{ opacity: i === 0 ? 1 : 0 }}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              ))}
            </div>
          </div>
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
