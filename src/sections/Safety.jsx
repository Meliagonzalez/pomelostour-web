export default function Safety() {
  const items = [
    {
      title: "No requiere experiencia",
      description:
        "La actividad está pensada para personas sin experiencia previa.",
    },
    {
      title: "Equipamiento incluido",
      description:
        "Casco, chaleco salvavidas y traje de neopreno incluidos.",
    },
    {
      title: "Edad mínima",
      description:
        "Próximamente",
    },
    {
      title: "Duración",
      description:
        "Próximamente",
    },
  ];

  return (
    <section
      id="seguridad"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-pink-500">
          Seguridad
        </p>

        <h2 className="mb-6 text-center text-5xl font-black text-slate-900">
          Seguridad y requisitos
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-slate-600">
          Nuestro objetivo es que disfrutes una experiencia divertida,
          segura y apta para toda la familia.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="
                rounded-3xl
                bg-white
                p-6
                border
                border-slate-200
                shadow-sm
              "
            >
              <h3 className="text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}