import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { HOTEL } from "../data/hotel";

const STATS = [
  { value: HOTEL.stars, suffix: "★", label: "Categoría superior" },
  { value: 24, suffix: " hs", label: "Recepción" },
  { value: 100, suffix: "%", label: "Wi-Fi gratis" },
  { value: 1, suffix: " cuadra", label: "Al Jockey Club" },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    const counter = { val: 0 };
    const tween = gsap.to(counter, {
      val: value,
      duration: 1.6,
      delay: 1.1,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = `${Math.round(counter.val)}${suffix}`;
      },
    });
    return () => tween.kill();
  }, [value, suffix]);

  return <strong ref={ref}>0{suffix}</strong>;
}

export default function HeroStats() {
  return (
    <div className="hero-stats-inner">
      {STATS.map((s) => (
        <div key={s.label} className="hero-stat">
          <Counter value={s.value} suffix={s.suffix} />
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
