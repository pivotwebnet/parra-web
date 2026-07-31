import { lazy, Suspense, useEffect, useRef, useState } from "react";

const HotelTour = lazy(() => import("./HotelTour"));

function TourPlaceholder() {
  return (
    <section
      className="hotel-tour"
      id="recorrido"
      style={{ minHeight: "clamp(420px, 60vw, 760px)" }}
    />
  );
}

export default function HotelTourLazy() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView]);

  if (!inView) {
    return (
      <div ref={ref}>
        <TourPlaceholder />
      </div>
    );
  }

  return (
    <Suspense fallback={<TourPlaceholder />}>
      <HotelTour />
    </Suspense>
  );
}
