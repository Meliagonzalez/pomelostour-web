import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const icons = {
  check: (
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  ),
  shield: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3.75 4.5 6.75v5.25c0 4.556 3.14 8.212 7.5 9 4.36-.788 7.5-4.444 7.5-9V6.75L12 3.75Z"
    />
  ),
  users: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.4 9.4 0 0 0 2.625.372 9.3 9.3 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.3 12.3 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
    />
  ),
  clock: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
    />
  ),
};

const items = [
  {
    icon: "check",
    title: "No requiere experiencia",
    description:
      "La actividad está pensada para personas sin experiencia previa.",
  },
  {
    icon: "shield",
    title: "Equipamiento incluido",
    description:
      "Casco, chaleco salvavidas y traje de neopreno incluidos.",
  },
  {
    icon: "users",
    title: "Edad mínima",
    description: "Próximamente",
  },
  {
    icon: "clock",
    title: "Duración",
    description: "Próximamente",
  },
];

export default function Safety() {
  return (
    <section id="seguridad" className="scroll-mt-28 bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Seguridad"
          title="Seguridad y requisitos"
          description="Nuestro objetivo es que disfrutes una experiencia divertida, segura y apta para toda la familia."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-50 text-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    {icons[item.icon]}
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
