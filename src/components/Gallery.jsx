import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaXmark, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { ROOM_GALLERY } from "../data/hotel";
import "./Gallery.css";

function Lightbox({ index, onClose, onPrev, onNext }) {
  const item = ROOM_GALLERY[index];

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      className="lightbox-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <button
        type="button"
        className="lightbox-close tt tt-bottom"
        data-tooltip="Cerrar"
        aria-label="Cerrar"
        onClick={onClose}
      >
        <FaXmark />
      </button>

      <button
        type="button"
        className="lightbox-nav lightbox-prev tt"
        data-tooltip="Foto anterior"
        aria-label="Foto anterior"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        <FaChevronLeft />
      </button>

      <motion.figure
        className="lightbox-figure"
        key={item.src}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={item.src} alt={item.title} />
        <figcaption>{item.title}</figcaption>
      </motion.figure>

      <button
        type="button"
        className="lightbox-nav lightbox-next tt"
        data-tooltip="Foto siguiente"
        aria-label="Foto siguiente"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        <FaChevronRight />
      </button>
    </motion.div>
  );
}

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i - 1 + ROOM_GALLERY.length) % ROOM_GALLERY.length),
    []
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % ROOM_GALLERY.length),
    []
  );

  return (
    <section className="gallery" id="galeria">
      <div className="container-wide">
        <div className="section-heading">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Galería
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Un vistazo a <span className="gold-text">tu estadía</span>
          </motion.h2>
        </div>

        <div className="gallery-grid">
          {ROOM_GALLERY.map((item, i) => (
            <motion.figure
              key={item.src}
              className={`gallery-item item-${i} tt`}
              data-tooltip="Ver foto completa"
              initial={{ opacity: 0, y: 40, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setActiveIndex(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActiveIndex(i);
              }}
            >
              <img src={item.src} alt={item.title} loading="lazy" />
              <figcaption>{item.title}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <Lightbox index={activeIndex} onClose={close} onPrev={prev} onNext={next} />
        )}
      </AnimatePresence>
    </section>
  );
}
