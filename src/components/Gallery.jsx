import { motion } from "framer-motion";
import { ROOM_GALLERY } from "../data/hotel";
import "./Gallery.css";

export default function Gallery() {
  return (
    <section className="gallery" id="galeria">
      <div className="container">
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
              key={item.seed}
              className={`gallery-item item-${i}`}
              initial={{ opacity: 0, y: 40, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={`https://picsum.photos/seed/${item.seed}/800/900`}
                alt={item.title}
                loading="lazy"
              />
              <figcaption>{item.title}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
