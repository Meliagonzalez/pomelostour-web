const steps = [
  {
    number: "01",
    title: "Llegada",
    description: "Recepción en la base",
  },
  {
    number: "02",
    title: "Equipamiento",
    description: "Casco, chaleco y neopreno",
  },
  {
    number: "03",
    title: "Briefing",
    description: "Instrucciones y seguridad",
  },
  {
    number: "04",
    title: "Rafting",
    description: "Aventura en el Chimehuín",
  },
  {
    number: "05",
    title: "Regreso",
    description: "Fin de la experiencia",
  },
];

export default function ExperienceTimeline() {
  return (
        <section
        id="experiencia"
  className="scroll-mt-28 bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-pink-500">
          La experiencia
        </p>

        <h2 className="mb-6 text-center text-5xl font-black text-slate-900">
  ¿Cómo es la experiencia?
</h2>

<p className="mx-auto mb-16 max-w-2xl text-center text-slate-600">
  Desde la llegada hasta el último rápido, te acompañamos para que disfrutes
  una experiencia segura, divertida e inolvidable en el Río Chimehuín.
</p>

        <div className="grid gap-8 md:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl
               bg-white
               p-6
               shadow-sm
               border
               border-slate-200
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-xl"
            >
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
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
  href="#reserva"
  className="inline-flex rounded-full bg-pink-500 px-8 py-4 font-semibold text-white hover:bg-pink-600"
>
  Reservar mi turno
</a>
        </div>
      </div>
    </section>
  );
}