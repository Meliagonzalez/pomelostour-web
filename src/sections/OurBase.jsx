import { useState } from "react";
import Lightbox, { ZoomHint } from "../components/Lightbox";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import deck2 from "../assets/images/optimized/base-deck-2.webp";
import deck from "../assets/images/optimized/base-deck.webp";
import interior1 from "../assets/images/optimized/base-interior-1.webp";
import interior2 from "../assets/images/optimized/base-interior-2.webp";
import banos from "../assets/images/optimized/base-banos.webp";

const tiles = [
  {
    src: banos,
    alt: "Baños modernos de la base de Pomelostour",
    caption: "Baños modernos",
    span: "col-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    src: deck2,
    alt: "Deck panorámico de la base de Pomelostour con vista al Lago Huechulafquen y al Volcán Lanín",
    caption: "Deck panorámico",
    span: "col-span-2",
  },
  {
    src: interior1,
    alt: "Living comedor de la base de Pomelostour con ventanales al lago",
    caption: "Espacios interiores con vista",
    span: "col-span-2",
  },
  {
    src: deck,
    alt: "Rincón de relax con vista privilegiada al lago y a la cordillera",
    caption: "Relax con vista privilegiada",
    span: "col-span-1",
  },
  {
    src: interior2,
    alt: "Instalaciones interiores de la base, con estar y barra",
    caption: "Instalaciones interiores",
    span: "col-span-1",
  },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const features = [
  "Vista panorámica al Lago Huechulafquen y al Volcán Lanín",
  "Deck exclusivo",
  "Baños y vestuarios modernos",
  "Estacionamiento libre y gratuito",
];

export default function OurBase() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="base" className="scroll-mt-28 bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Nuestra base"
          title="La experiencia empieza antes de subir al bote"
          description="Un predio exclusivo frente al Lago Huechulafquen, pensado para que estés cómodo antes y después de vivir el rafting."
        />

        <div className="grid grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-flow-dense sm:grid-cols-4 lg:auto-rows-[240px]">
          {tiles.map((tile, index) => (
            <Reveal
              key={tile.caption}
              delay={index * 70}
              className={tile.span}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                className={`group relative block h-full w-full overflow-hidden rounded-2xl text-left ${focusRing}`}
              >
                <img
                  src={tile.src}
                  alt={tile.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                <ZoomHint />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white sm:text-base">
                  {tile.caption}
                </p>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 border-t border-slate-200 pt-6">
            {features.map((feature) => (
              <span key={feature} className="flex items-center gap-2 text-sm font-medium text-slate-600 sm:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0 text-brand" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {feature}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <Lightbox photos={tiles} index={openIndex} onIndexChange={setOpenIndex} />
    </section>
  );
}
