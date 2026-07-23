import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

// Para agregar una reseña, sumar un objeto { name, city, text } al array.
// TODO: reemplazar estos ejemplos por reseñas reales de pasajeros.
const testimonials = [
  {
    name: "Martina G.",
    city: "Buenos Aires",
    text: "Una experiencia increíble. Los guías te dan confianza desde el primer momento y el paisaje es único.",
  },
  {
    name: "Familia Rodríguez",
    city: "Córdoba",
    text: "Fuimos con chicos de 7 años y fue perfecto. Muy bien organizado y seguro en todo momento.",
  },
  {
    name: "Lucas M.",
    city: "Rosario",
    text: "La Garganta del Diablo es una locura. Definitivamente la mejor actividad de nuestra semana en San Martín.",
  },
];

export default function Testimonials() {
  return (
    <section id="opiniones" className="scroll-mt-28 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Opiniones"
          title="Lo que dicen nuestros visitantes"
          description="Más de 25 años llevando familias, parejas y grupos a vivir el Chimehuín."
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

                <p className="text-sm text-slate-500">
                  {item.city}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
