import FadeCarousel from "../components/FadeCarousel";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import baseVistaLanin from "../assets/images/optimized/base-vista-lanin.webp";
import riverPlate01 from "../assets/images/optimized/river-plate-01.webp";
import riverPlate02 from "../assets/images/optimized/river-plate-02.webp";
import riverPlate03 from "../assets/images/optimized/river-plate-03.webp";

// caption "" = el visor muestra la foto sola, sin texto (el alt queda para lectores de pantalla)
const riverPhotos = [
  {
    src: riverPlate01,
    caption: "",
    alt: "Grupo de River Plate con cascos y chalecos de rafting, con el lago y el Volcán Lanín de fondo",
    position: "object-[center_60%]",
  },
  {
    src: riverPlate02,
    caption: "",
    alt: "Dos personas sonrientes con casco y chaleco de rafting de Pomelostour a orillas del río",
  },
  {
    src: riverPlate03,
    caption: "",
    alt: "Grupo de River Plate con cascos y chalecos de rafting a orillas del río",
  },
];

const steps = [
  {
    number: "01",
    title: "Llegada",
    description: "Recepción en la base frente al Lago Huechulafquen.",
  },
  {
    number: "02",
    title: "Equipamiento",
    description: "Traje, medias de neopreno, casco y chaleco.",
  },
  {
    number: "03",
    title: "Briefing",
    description: "Charla de seguridad y técnica de remo con tu guía.",
  },
  {
    number: "04",
    title: "Rafting",
    description: "2 horas en el Chimehuín, incluyendo la Garganta del Diablo.",
  },
  {
    number: "05",
    title: "Regreso",
    description: "Traslado a la base. Vestuarios y merienda (turno tarde).",
  },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export default function ExperienceTimeline() {
  return (
    <section id="experiencia" className="scroll-mt-28 bg-slate-50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="La experiencia"
          title="¿Cómo es la experiencia?"
          description="Desde la llegada hasta el último rápido, te acompañamos para que disfrutes una experiencia segura, divertida e inolvidable en el Río Chimehuín."
        />

        <p className="mb-8 text-center text-sm text-slate-500">
          Turno mañana: 10:30 hs · Turno tarde: 14:30 hs
        </p>

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.3fr_0.85fr] lg:gap-8">

          {/* Tarjeta River Plate */}
          <Reveal className="order-2 flex h-full lg:order-1" delay={0}>
            <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-200 hover:shadow-md">
              <FadeCarousel
                photos={riverPhotos}
                label="Fotos de River Plate con Pomelostour"
                className="min-h-[220px] flex-1 bg-slate-200"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  River Plate eligió Pomelostour
                </h3>

                <p className="mt-2 leading-relaxed text-slate-600">
                  Uno de los clubes más importantes de Argentina eligió vivir la
                  experiencia Pomelostour durante sus visitas a San Martín de los Andes.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Timeline central */}
          <Reveal className="order-1 h-full lg:order-2" delay={80}>
            <div className="h-full rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              <ol className="relative space-y-8">
                <div
                  aria-hidden="true"
                  className="absolute bottom-4 left-6 top-4 w-px bg-slate-200"
                />

                {steps.map((step) => (
                  <li key={step.number} className="relative flex gap-5">
                    <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-black text-white shadow-sm">
                      {step.number}
                    </span>

                    <div className="pt-1.5">
                      <h3 className="text-lg font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-1 leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          {/* Tarjeta Nuestra base */}
          <Reveal className="order-3 flex h-full" delay={160}>
            <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-200 hover:shadow-md">
              <div className="min-h-[220px] flex-1 overflow-hidden">
                <img
                  src={baseVistaLanin}
                  alt="Vista panorámica al Lago Huechulafquen y al Volcán Lanín desde la base de Pomelostour"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Nuestra base exclusiva
                </h3>

                <p className="mt-2 leading-relaxed text-slate-600">
                  Comenzá y terminá la experiencia disfrutando una vista privilegiada
                  al Lago Huechulafquen y al Volcán Lanín.
                </p>
              </div>
            </div>
          </Reveal>

        </div>

        <div className="mt-10 text-center">
          <a
            href="#reserva"
            className={`inline-flex rounded-full bg-brand px-8 py-4 font-bold text-white transition-all duration-200 hover:bg-brand-dark ${focusRing}`}
          >
            Reservar mi turno
          </a>
        </div>
      </div>
    </section>
  );
}
