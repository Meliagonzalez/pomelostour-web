import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const iconFocusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

// Visor de fotos a pantalla completa. `index` null = cerrado.
// Cada foto: { src, alt, caption? } — si no hay caption se muestra el alt; caption "" = sin texto.
// Se monta en <body> (portal) para que ningún transform de un ancestro (p. ej. Reveal) lo encierre.
export default function Lightbox({ photos, index, onIndexChange }) {
  const closeButtonRef = useRef(null);

  const close = () => onIndexChange(null);
  const showPrev = () => onIndexChange((index - 1 + photos.length) % photos.length);
  const showNext = () => onIndexChange((index + 1) % photos.length);

  useEffect(() => {
    if (index === null) return;

    closeButtonRef.current?.focus();

    function handleKeyDown(e) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  if (index === null) return null;

  const photo = photos[index];
  const caption = photo.caption ?? photo.alt;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      onClick={close}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={close}
        aria-label="Cerrar"
        className={`absolute right-4 top-4 rounded-full p-2 text-white/80 hover:text-white ${iconFocusRing}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); showPrev(); }}
        aria-label="Foto anterior"
        className={`absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/80 hover:text-white md:left-6 ${iconFocusRing}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9" aria-hidden="true">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); showNext(); }}
        aria-label="Foto siguiente"
        className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/80 hover:text-white md:right-6 ${iconFocusRing}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9" aria-hidden="true">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      <div className="max-h-[80vh] w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-h-[80vh] w-full rounded-2xl object-contain"
        />

        {caption && (
          <p className="mt-4 text-center text-sm text-white/70">
            {caption}
          </p>
        )}
      </div>
    </div>,
    document.body
  );
}

// Lupa que aparece al pasar el mouse sobre una foto clickeable (el padre debe tener `group`).
export function ZoomHint() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-8 w-8 scale-75 text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path strokeLinecap="round" d="m21 21-4.35-4.35" />
      </svg>
    </div>
  );
}
