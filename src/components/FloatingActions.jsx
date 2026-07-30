import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp, FaPhone, FaArrowUp } from "react-icons/fa6";
import { HOTEL } from "../data/hotel";
import "./FloatingActions.css";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="floating-actions">
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            className="fab fab-top tt"
            data-tooltip="Volver arriba"
            aria-label="Volver arriba"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        className="fab fab-call tt"
        data-tooltip="Llamar al hotel"
        href={`tel:${HOTEL.phones[0].replace(/\s+/g, "")}`}
        aria-label="Llamar al hotel"
      >
        <FaPhone />
      </a>
      <a
        className="fab fab-whatsapp tt"
        data-tooltip="Escribir por WhatsApp"
        href={`https://wa.me/${HOTEL.whatsappNumber}?text=${encodeURIComponent(
          HOTEL.whatsappMessage
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Escribir por WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
