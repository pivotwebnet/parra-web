import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrthographicCamera, Html, OrbitControls } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import { HotelModel } from "./HotelModel";
import { TOUR_PINS } from "../data/hotel";
import "./HotelTour.css";

function Pin({ pin, active, onEnter, onLeave }) {
  return (
    <Html position={pin.position} center zIndexRange={[20, 0]} occlude={false}>
      <button
        type="button"
        className={`tour-pin tt ${active ? "is-active" : ""}`}
        data-tooltip={pin.label}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={onEnter}
        aria-label={pin.label}
      >
        <span className="tour-pin-ring" />
        <span className="tour-pin-dot" />
      </button>
    </Html>
  );
}

function Scene({ activeId, setActiveId }) {
  return (
    <>
      <OrthographicCamera makeDefault position={[0, 0.6, 9]} zoom={62} near={0.1} far={50} />

      <ambientLight intensity={0.8} />
      <hemisphereLight args={["#ffffff", "#0a1128", 0.6]} />
      <directionalLight position={[4, 6, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-5, 3, -4]} intensity={0.4} color="#8fa8d6" />

      <group rotation={[0, -0.55, 0]}>
        <HotelModel position={[0, -0.1, 0]} />
        {TOUR_PINS.map((pin) => (
          <Pin
            key={pin.id}
            pin={pin}
            active={activeId === pin.id}
            onEnter={() => setActiveId(pin.id)}
            onLeave={() => setActiveId((id) => (id === pin.id ? null : id))}
          />
        ))}
      </group>

      <ContactShadows
        position={[0, -2.9, 0]}
        opacity={0.4}
        scale={12}
        blur={2.6}
        far={3}
        color="#000814"
      />

      <OrbitControls
        makeDefault
        enableZoom={false}
        enablePan={false}
        enableRotate
        enableDamping
        dampingFactor={0.09}
        rotateSpeed={0.6}
        minPolarAngle={Math.PI / 2 - 0.6}
        maxPolarAngle={Math.PI / 2 + 0.3}
        target={[0, 0, 0]}
      />
    </>
  );
}

export default function HotelTour() {
  const [activeId, setActiveId] = useState(TOUR_PINS[0].id);
  const activePin = TOUR_PINS.find((p) => p.id === activeId) ?? TOUR_PINS[0];

  return (
    <section className="hotel-tour" id="recorrido">
      <div className="container-wide">
        <div className="section-heading">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Recorrido virtual
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Explorá <span className="gold-text">cada sector</span> del hotel
          </motion.h2>
        </div>

        <div className="tour-layout">
          <div className="tour-canvas-wrap">
            <span className="tour-hint">Mantené presionado y arrastrá para girar</span>
            <Canvas dpr={[1, 1.8]} gl={{ antialias: true, alpha: true }}>
              <Suspense fallback={null}>
                <Scene activeId={activeId} setActiveId={setActiveId} />
              </Suspense>
            </Canvas>
          </div>

          <div className="tour-panel">
            <AnimatePresence mode="wait">
              <motion.figure
                key={activePin.id}
                className="tour-preview"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <img src={activePin.image} alt={activePin.label} />
                <figcaption>
                  <span>{activePin.floor}</span>
                  <strong>{activePin.label}</strong>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            <ul className="tour-legend">
              {TOUR_PINS.map((pin) => (
                <li key={pin.id}>
                  <button
                    type="button"
                    className={`tt ${activeId === pin.id ? "is-active" : ""}`}
                    data-tooltip={`Ver foto: ${pin.label}`}
                    onMouseEnter={() => setActiveId(pin.id)}
                    onClick={() => setActiveId(pin.id)}
                  >
                    <span className="tour-legend-dot" />
                    <span className="tour-legend-text">
                      <strong>{pin.label}</strong>
                      <em>{pin.floor}</em>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
