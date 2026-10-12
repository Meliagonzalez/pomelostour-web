import { useState } from "react";
import Lightbox, { ZoomHint } from "../components/Lightbox";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import equipGrupo from "../assets/images/optimized/equip-grupo.webp";
import equipTraje from "../assets/images/optimized/equip-traje.webp";
import equipCampera from "../assets/images/optimized/equip-campera.webp";
import equipChaleco from "../assets/images/optimized/equip-chaleco.webp";
import equipCasco from "../assets/images/optimized/equip-casco.webp";
import equipBotas from "../assets/images/optimized/equip-botas.webp";
import equipMedias from "../assets/images/optimized/equip-medias.webp";

const incluye = [
  "Traje y medias de neopreno",
  "Casco homologado",
  "Chaleco de flotación",
  "Chaqueta rompevientos",
];

// `encuadre` (opcional): proporción + posición que recorta solo fondo vacío (pared/piso)
// para que el producto se vea más grande; sin él, la foto se muestra entera.
const piezas = [
  {
    src: equipTraje,
    alt: "Traje de neopreno de manga larga Pomelostour colgado, marca Bandu",
    caption: "Traje de neopreno",
  },
  {
    src: equipCampera,
    alt: "Chaqueta rompevientos impermeable Pomelostour colgada",
    caption: "Chaqueta rompevientos",
  },
  {
    src: equipChaleco,
    alt: "Chaleco de flotación Pomelostour colgado, con logo de la marca",
    caption: "Chaleco de flotación",
  },
  {
    src: equipCasco,
    alt: "Casco de agua homologado color amarillo",
    caption: "Casco",
    encuadre: "aspect-[4/5] object-[center_45%]",
  },
  {
    src: equipMedias,
    alt: "Par de medias de neopreno para rafting",
    caption: "Medias de neopreno",
  },
  {
    src: equipBotas,
    alt: "Botas de neopreno para agua",
    caption: "Botas para agua",
    encuadre: "aspect-[8/7] object-[center_52%]",
    nota: "Si no traés calzado que se pueda mojar",
  },
];

const fotoGrupo = {
  src: equipGrupo,
  alt: "Equipamiento completo de rafting de Pomelostour: traje y medias de neopreno, chaleco de flotación, casco, chaqueta rompevientos y remo",
  caption: "Equipamiento completo",
};

// Orden del visor: foto grupal primero, después las piezas
const fotosVisor = [
  fotoGrupo,
  ...piezas.map(({ src, alt, caption, nota }) => ({
    src,
    alt,
    caption: nota ? `${caption} — ${nota}` : caption,
  })),
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const requisitos = [
  { value: "Sin experiencia", label: "No hace falta haber remado antes" },
  { value: "6–8 años", label: "Edad mínima según temporada" },
  { value: "~2 horas", label: "Duración en el agua" },
];

export default function Equipment() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="equipamiento" className="scroll-mt-28 bg-slate-50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Equipamiento"
          title="Equipamiento premium incluido"
          description="Todo lo que necesitás para vivir la experiencia con comodidad y seguridad. No tenés que preocuparte por nada."
        />

        {/* Intro: foto grupal + descripción */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,480px)_1fr] lg:items-center lg:gap-14">
          <Reveal className="mx-auto w-full max-w-md rounded-2xl bg-white p-2 shadow-sm sm:p-3 lg:max-w-none">
            {/* 4:5 recorta solo pared y piso vacíos; todo el equipo queda a la vista */}
            <button
              type="button"
              onClick={() => setOpenIndex(0)}
              className={`group relative block w-full overflow-hidden rounded-xl ${focusRing}`}
            >
              <img
                src={fotoGrupo.src}
                alt={fotoGrupo.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <ZoomHint />
            </button>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <h3 className="text-2xl font-black leading-tight text-slate-900 md:text-3xl">
                Equipamiento completo para disfrutar el río
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                Te proporcionamos el equipamiento necesario para realizar la actividad,
                incluyendo traje y medias de neopreno, casco, chaleco de flotación y
                chaqueta rompevientos.
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {incluye.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700 sm:text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0 text-brand" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Grid de piezas reales: cada foto entera (object-contain) sobre fondo neutro, título abajo */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:auto-rows-fr sm:grid-cols-3 lg:gap-6">
          {piezas.map((item, index) => (
            <Reveal key={item.caption} delay={index * 70} className="h-full">
              <button
                type="button"
                onClick={() => setOpenIndex(index + 1)}
                className={`group flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-slate-200 transition-shadow duration-200 hover:shadow-md ${focusRing}`}
              >
                <div className="relative flex h-48 items-center justify-center bg-slate-100 p-2 sm:h-64 sm:p-3 lg:h-[300px]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className={`max-w-full rounded-lg transition-transform duration-500 group-hover:scale-[1.03] ${
                      item.encuadre ? `h-full ${item.encuadre} object-cover` : "max-h-full object-contain"
                    }`}
                  />
                  <ZoomHint />
                </div>
                <div className="px-4 py-3">
                  <p className="text-sm font-semibold text-slate-900 sm:text-base">{item.caption}</p>
                  {item.nota && (
                    <p className="mt-0.5 text-xs leading-snug text-slate-500 sm:text-sm">{item.nota}</p>
                  )}
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 grid grid-cols-1 gap-6 rounded-2xl bg-slate-900 px-8 py-8 text-center sm:grid-cols-3">
            {requisitos.map((item) => (
              <div key={item.value}>
                <p className="text-xl font-black text-white">{item.value}</p>
                <p className="mt-1 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>

      <Lightbox photos={fotosVisor} index={openIndex} onIndexChange={setOpenIndex} />
    </section>
  );
}
