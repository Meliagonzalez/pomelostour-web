import { useState } from "react";
import Lightbox, { ZoomHint } from "../components/Lightbox";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import raftingRapido from "../assets/images/optimized/rafting-rapido.webp";
import olaBalsa4 from "../assets/images/optimized/ola-balsa-4.webp";
import aerialRafts from "../assets/images/optimized/dji-0026.webp";
import familia from "../assets/images/optimized/famil.webp";
import saltoBalsa from "../assets/images/optimized/salto-balsa.webp";
import remosArriba from "../assets/images/optimized/remos-arriba.webp";
import plantelRafting from "../assets/images/optimized/plantel-river-rafting.webp";
import deckRafting from "../assets/images/optimized/deck-rafting.webp";
import martinPescador from "../assets/images/optimized/martin-pescador.webp";

const photos = [
  { id: 1, alt: "Bote atravesando un rápido del Río Chimehuín", src: raftingRapido, span: "col-span-2 row-span-2" },
  { id: 2, alt: "Balsa de rafting saltando entre las olas de un rápido en el Río Chimehuín", src: olaBalsa4, span: "col-span-1 row-span-1" },
  { id: 3, alt: "Vista aérea de balsas de rafting navegando el Río Chimehuín", src: aerialRafts, span: "col-span-1 row-span-1" },
  { id: 4, alt: "Familia disfrutando el rafting junto al Volcán Lanín", src: familia, span: "col-span-2 row-span-1" },
  { id: 5, alt: "Pasajero saltando al agua después de un descenso de rafting", src: saltoBalsa, span: "col-span-1 row-span-1" },
  { id: 6, alt: "Remos en alto celebrando un descenso de rafting en el Chimehuín", src: remosArriba, span: "col-span-1 row-span-1" },
  { id: 7, alt: "Grupo de rafting festejando arriba de la balsa con Pomelostour", src: plantelRafting, span: "col-span-2 row-span-1" },
  { id: 8, alt: "Vista del deck de la base de Pomelostour, con el Lago Huechulafquen y el Volcán Lanín", src: deckRafting, span: "col-span-1 row-span-1" },
  { id: 9, alt: "Martín pescador, fauna típica del Río Chimehuín", src: martinPescador, span: "col-span-1 row-span-1" },
];

const iconFocusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="galeria" className="scroll-mt-28 bg-slate-50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Galería"
          title="Viví la aventura"
          description="Algunas imágenes reales de la experiencia en el Río Chimehuín."
        />

        <div className="grid grid-cols-2 gap-4 sm:auto-rows-[170px] sm:grid-flow-dense sm:grid-cols-4 lg:auto-rows-[200px]">
          {photos.map((photo, index) => (
            <Reveal
              key={photo.id}
              delay={(index % 6) * 60}
              className={photo.span}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                className={`group relative block h-full w-full overflow-hidden rounded-2xl ${iconFocusRing}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:aspect-auto"
                />
                <ZoomHint />
              </button>
            </Reveal>
          ))}
        </div>

      </div>

      <Lightbox photos={photos} index={openIndex} onIndexChange={setOpenIndex} />
    </section>
  );
}
