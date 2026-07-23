import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

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
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500";

export default function ExperienceTimeline() {
  return (
    <section id="experiencia" className="scroll-mt-28 bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="La experiencia"
          title="¿Cómo es la experiencia?"
          description="Desde la llegada hasta el último rápido, te acompañamos para que disfrutes una experiencia segura, divertida e inolvidable en el Río Chimehuín."
        />

        <p className="mb-10 text-center text-sm text-slate-500">
          Turno mañana: 10:30 hs · Turno tarde: 14:30 hs
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 80}>
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <span className="text-4xl font-black text-pink-500">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-slate-600">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#reserva"
            className={`inline-flex rounded-full bg-pink-500 px-8 py-4 font-semibold text-white transition hover:bg-pink-600 ${focusRing}`}
          >
            Reservar mi turno
          </a>
        </div>
      </div>
    </section>
  );
}
