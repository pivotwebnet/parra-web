import { motion } from "framer-motion";
import {
  FaWifi,
  FaClock,
  FaCar,
  FaDumbbell,
  FaGolfBall,
  FaMugHot,
} from "react-icons/fa";
import { SERVICES } from "../data/hotel";
import ServiceCard from "./ServiceCard";
import "./Amenities.css";

const ICONS = {
  wifi: FaWifi,
  clock: FaClock,
  car: FaCar,
  dumbbell: FaDumbbell,
  golf: FaGolfBall,
  coffee: FaMugHot,
};

export default function Amenities() {
  return (
    <section className="amenities" id="servicios">
      <div className="container">
        <div className="section-heading">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Servicios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Todo lo que necesitás, <span className="gold-text">a un paso</span>
          </motion.h2>
        </div>

        <div className="amenities-grid">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <ServiceCard key={service.title} index={i}>
                <div className="amenity-icon">
                  <Icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </ServiceCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
