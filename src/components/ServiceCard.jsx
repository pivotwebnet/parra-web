import { useRef } from "react";
import { motion } from "framer-motion";
import "./ServiceCard.css";

export default function ServiceCard({ children, className = "", index = 0 }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  return (
    <motion.div
      ref={ref}
      className={`service-card ${className}`}
      onMouseMove={handleMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
    >
      <div className="service-card-glow" />
      <div className="service-card-inner">{children}</div>
    </motion.div>
  );
}
