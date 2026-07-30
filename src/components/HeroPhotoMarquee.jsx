import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { HOTEL_PHOTOS as PHOTOS } from "../data/hotel";
import "./HeroPhotoMarquee.css";

const COLUMNS = [
  { photos: [PHOTOS[0], PHOTOS[2], PHOTOS[4], PHOTOS[6]], duration: 34 },
  { photos: [PHOTOS[1], PHOTOS[3], PHOTOS[5], PHOTOS[0]], duration: 26 },
  { photos: [PHOTOS[5], PHOTOS[6], PHOTOS[1], PHOTOS[4]], duration: 40 },
];

function MarqueeColumn({ photos, duration, offset = false }) {
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        trackRef.current,
        { yPercent: -50 },
        { yPercent: 0, duration, repeat: -1, ease: "none" }
      );
    });
    return () => ctx.revert();
  }, [duration]);

  const doubled = [...photos, ...photos];

  return (
    <div className={`marquee-col ${offset ? "marquee-col-offset" : ""}`}>
      <div className="marquee-track" ref={trackRef}>
        {doubled.map((photo, i) => (
          <figure className="marquee-frame" key={`${photo.src}-${i}`}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function HeroPhotoMarquee() {
  return (
    <div className="hero-photo-marquee" aria-hidden="true">
      {COLUMNS.map((col, i) => (
        <MarqueeColumn key={i} photos={col.photos} duration={col.duration} offset={i === 1} />
      ))}
    </div>
  );
}
