import { useEffect, useRef, useState } from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import raftingRapido from "../assets/images/Todas/rafting-rapido.jpeg";
import olaBalsa4 from "../assets/images/Todas/ola-balsa-4.jpeg";
import aerialRafts from "../assets/images/Todas/DJI_0026.jpg";
import familia from "../assets/images/Todas/famil.jpeg";
import saltoBalsa from "../assets/images/Todas/Salto balsa.jpeg";
import remosArriba from "../assets/images/Todas/remos-arriba.jpeg";
import plantelRafting from "../assets/images/Todas/plantel-river-rafting.jpeg";
import deckRafting from "../assets/images/Todas/deck-rafting.jpeg";
import martinPescador from "../assets/images/Todas/martin-pescador.jpeg";

const photos = [
  { id: 1, alt: "Bote atravesando un rápido del Río Chimehuín", src: raftingRapido },
  { id: 2, alt: "Balsa saltando entre las olas de un rápido", src: olaBalsa4 },
  { id: 3, alt: "Vista aérea de las balsas navegando el río", src: aerialRafts },
  { id: 4, alt: "Familia disfrutando la bajada junto al Volcán Lanín", src: familia },
  { id: 5, alt: "Saltando al agua después del descenso", src: saltoBalsa },
  { id: 6, alt: "Remos en alto celebrando la bajada", src: remosArriba },
  { id: 7, alt: "Grupo festejando arriba de la balsa", src: plantelRafting },
  { id: 8, alt: "Vista del deck de la base, con el Lago Huechulafquen y el Volcán Lanín", src: deckRafting },
  { id: 9, alt: "Martín pescador, fauna típica del Río Chimehuín", src: martinPescador },
];

const aspectRatios = ["aspect-[3/4]", "aspect-square", "aspect-[4/5]"];

const iconFocusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);
  const closeButtonRef = useRef(null);

  const close = () => setOpenIndex(null);
  const showPrev = () =>
    setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
  const showNext = () =>
    setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length));

  useEffect(() => {
    if (openIndex === null) return;

    closeButtonRef.current?.focus();

    function handleKeyDown(e) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openIndex]);

  const activePhoto = openIndex !== null ? photos[openIndex] : null;

  return (
    <section id="galeria" className="scroll-mt-28 bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Galería"
          title="Viví la aventura"
          description="Algunas imágenes reales de la experiencia en el Río Chimehuín."
        />

        <div className="columns-2 gap-4 md:columns-3">
          {photos.map((photo, index) => (
            <Reveal
              key={photo.id}
              delay={(index % 6) * 60}
              className="mb-4 break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                className={`group block w-full overflow-hidden rounded-3xl ${iconFocusRing}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className={`${aspectRatios[index % aspectRatios.length]} w-full object-cover transition duration-500 group-hover:scale-110`}
                />
              </button>
            </Reveal>
          ))}
        </div>

      </div>

      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.alt}
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
              src={activePhoto.src}
              alt={activePhoto.alt}
              className="max-h-[80vh] w-full rounded-2xl object-contain"
            />

            <p className="mt-4 text-center text-sm text-white/70">
              {activePhoto.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
