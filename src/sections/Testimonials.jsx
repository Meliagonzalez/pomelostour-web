import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

// Para agregar una reseña, sumar un objeto { name, text } al array.
// TODO: reemplazar estos ejemplos por reseñas reales de pasajeros.
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
    <section id="opiniones" className="scroll-mt-28 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Opiniones"
          title="Lo que dicen nuestros visitantes"
          description="Próximamente mostraremos reseñas reales de nuestros pasajeros."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 100}>
              <div className="h-full rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mb-4 h-8 w-8 text-pink-500/40"
                  aria-hidden="true"
                >
                  <path d="M9.983 3 7.03 9.9H4.017v8.1h7.1V9.9H8.055L9.983 5.4V3ZM20.983 3l-2.953 6.9h-3.013v8.1h7.1V9.9h-3.062l1.928-4.5V3Z" />
                </svg>

                <p className="text-slate-600 italic">
                  "{item.text}"
                </p>

                <p className="mt-6 font-bold text-slate-900">
                  {item.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
