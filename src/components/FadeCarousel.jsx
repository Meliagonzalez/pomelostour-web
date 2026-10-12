import { useEffect, useState } from "react";
import Lightbox, { ZoomHint } from "./Lightbox";

const INTERVAL_MS = 2500;

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

// Con mouse, las flechas aparecen al pasar el cursor; en pantallas táctiles quedan siempre visibles.
const arrowClass = `absolute top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition-opacity duration-300 hover:bg-black/55 pointer-fine:opacity-0 pointer-fine:group-hover:opacity-100 focus-visible:opacity-100 ${focusRing}`;

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

// Carrusel con fundido que avanza solo. Cada foto: { src, alt, position? }.
// Click en la foto la abre ampliada en el Lightbox.
// Se pausa con el cursor encima, con foco dentro o con el visor abierto; con reduced-motion no avanza solo.
export default function FadeCarousel({ photos, label, className = "" }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [reducedMotion] = useState(prefersReducedMotion);

  const goTo = (i) => setIndex((i + photos.length) % photos.length);

  // Al navegar dentro del visor, el carrusel queda en la misma foto al cerrarlo.
  const handleLightboxChange = (i) => {
    setOpenIndex(i);
    if (i !== null) setIndex(i);
    // El foco estuvo dentro del visor (portal): al cerrarlo no llega un blur que despause.
    else setPaused(false);
  };

  const stopped = paused || openIndex !== null || reducedMotion || photos.length < 2;

  // Un timeout por foto: cualquier cambio manual reinicia la cuenta.
  useEffect(() => {
    if (stopped) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % photos.length), INTERVAL_MS);
    return () => clearTimeout(id);
  }, [index, stopped, photos.length]);

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label={label}
      className={`group relative overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
    >
      {photos.map((photo, i) => (
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          aria-hidden={i !== index}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover ${photo.position ?? "object-center"} transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <button
        type="button"
        onClick={() => setOpenIndex(index)}
        aria-label={`Ampliar foto ${index + 1} de ${photos.length}`}
        className={`absolute inset-0 h-full w-full cursor-zoom-in ${focusRing} focus-visible:-outline-offset-4`}
      >
        <ZoomHint />
      </button>

      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Foto anterior"
            className={`${arrowClass} left-3`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Foto siguiente"
            className={`${arrowClass} right-3`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1.5 bg-gradient-to-t from-black/40 to-transparent pb-3 pt-6">
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ver foto ${i + 1} de ${photos.length}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all duration-300 ${focusRing} ${
                  i === index ? "w-5 bg-white" : "w-2 bg-white/60 hover:bg-white/90"
                }`}
              />
            ))}
          </div>
        </>
      )}

      <Lightbox photos={photos} index={openIndex} onIndexChange={handleLightboxChange} />
    </div>
  );
}
