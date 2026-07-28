import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone, FaCalendarCheck } from "react-icons/fa6";
import { HOTEL } from "../data/hotel";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", checkin: "", guests: "1", message: "" });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const buildWhatsappUrl = () => {
    const lines = [
      `Hola! Soy ${form.name || "un/a viajero/a"}.`,
      form.checkin && `Fecha de llegada aproximada: ${form.checkin}.`,
      `Cantidad de huéspedes: ${form.guests}.`,
      form.message && `Mensaje: ${form.message}`,
      "Quiero consultar disponibilidad en El Parra Hotel & Suites.",
    ]
      .filter(Boolean)
      .join(" ");
    return `https://wa.me/${HOTEL.whatsappNumber}?text=${encodeURIComponent(lines)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(buildWhatsappUrl(), "_blank", "noreferrer");
  };

  return (
    <section className="contact" id="contacto">
      <div className="container contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">Contacto</span>
          <h2>
            Reservá tu estadía <span className="gold-text">hoy mismo</span>
          </h2>
          <p>
            Elegí el canal que prefieras: te respondemos al instante por
            WhatsApp, por teléfono, o completá el formulario y coordinamos tu
            reserva.
          </p>

          <div className="contact-buttons">
            <a
              className="contact-pill"
              href={`https://wa.me/${HOTEL.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a className="contact-pill" href={`tel:${HOTEL.phones[0].replace(/\s+/g, "")}`}>
              <FaPhone /> Llamar
            </a>
            <a
              className="contact-pill"
              href={HOTEL.bookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaCalendarCheck /> Booking.com
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="form-row">
            <label>
              Nombre
              <input
                type="text"
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Tu nombre"
              />
            </label>
            <label>
              Huéspedes
              <select value={form.guests} onChange={update("guests")}>
                {[1, 2, 3, 4, "5+"].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label>
            Fecha de llegada
            <input type="date" value={form.checkin} onChange={update("checkin")} />
          </label>

          <label>
            Mensaje
            <textarea
              rows={3}
              value={form.message}
              onChange={update("message")}
              placeholder="Contanos qué necesitás..."
            />
          </label>

          <button type="submit" className="btn btn-gold contact-submit">
            Enviar consulta por WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
