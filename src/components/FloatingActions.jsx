import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp, FaPhone } from "react-icons/fa6";
import { HOTEL } from "../data/hotel";
import "./FloatingActions.css";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="floating-actions"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            className="fab fab-call"
            href={`tel:${HOTEL.phones[0].replace(/\s+/g, "")}`}
            aria-label="Llamar al hotel"
          >
            <FaPhone />
          </a>
          <a
            className="fab fab-whatsapp"
            href={`https://wa.me/${HOTEL.whatsappNumber}?text=${encodeURIComponent(
              HOTEL.whatsappMessage
            )}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Escribir por WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
