import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { useMagnetic } from "../hooks/useMagnetic";
import { HOTEL } from "../data/hotel";
import "./QuickBooking.css";

export default function QuickBooking() {
  const [form, setForm] = useState({ checkin: "", checkinTime: "", guests: "1" });
  const submitRef = useMagnetic(8);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      "Hola! Quiero consultar disponibilidad en El Parra Hotel & Suites.",
      form.checkin &&
        `Fecha de llegada aproximada: ${form.checkin}${
          form.checkinTime ? ` a las ${form.checkinTime} hs` : ""
        }.`,
      `Cantidad de huéspedes: ${form.guests}.`,
    ]
      .filter(Boolean)
      .join(" ");
    const url = `https://wa.me/${HOTEL.whatsappNumber}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="quick-booking-wrap container-wide">
      <motion.form
        className="quick-booking"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <label className="quick-booking-field">
          <span>Fecha de llegada</span>
          <input type="date" value={form.checkin} onChange={update("checkin")} />
        </label>

        <label className="quick-booking-field">
          <span>Hora aproximada</span>
          <input type="time" value={form.checkinTime} onChange={update("checkinTime")} />
        </label>

        <label className="quick-booking-field">
          <span>Huéspedes</span>
          <select value={form.guests} onChange={update("guests")}>
            {[1, 2, 3, 4, "5+"].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>

        <button
          ref={submitRef}
          type="submit"
          className="quick-booking-submit tt"
          data-tooltip="Enviar consulta por WhatsApp"
        >
          <FaWhatsapp /> Consultar disponibilidad
        </button>
      </motion.form>
    </div>
  );
}
