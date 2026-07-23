const testimonials = [
  {
    name: "María G.",
    text: "Una experiencia increíble. Los guías fueron excelentes y el paisaje espectacular.",
  },
  {
    name: "Juan P.",
    text: "Era mi primera vez haciendo rafting y me sentí seguro durante toda la actividad.",
  },
  {
    name: "Lucía R.",
    text: "La mejor excursión de nuestras vacaciones en San Martín de los Andes.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="opiniones"
      className="scroll-mt-28 bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-pink-500">
          Opiniones
        </p>

        <h2 className="mb-6 text-center text-5xl font-black text-slate-900">
          Lo que dicen nuestros visitantes
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-slate-600">
          Próximamente mostraremos reseñas reales de nuestros pasajeros.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
            >
              <p className="text-slate-600 italic">
                "{item.text}"
              </p>

              <p className="mt-6 font-bold text-slate-900">
                {item.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}