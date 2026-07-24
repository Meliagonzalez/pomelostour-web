import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

// Rating y cantidad de reseñas: datos reales confirmados por el cliente (Google Maps).
// Para agregar una reseña, sumar un objeto { name, city, text } al array.
const testimonials = [
  {
    name: "Familia Rodríguez",
    city: "Buenos Aires",
    text: "Llevamos a toda la familia, incluyendo nuestros hijos de 7 y 9 años. Los guías son increíblemente profesionales y el paisaje con el Volcán Lanín de fondo es algo que no se olvida. ¡Ya estamos planeando volver!",
  },
  {
    name: "Martín S.",
    city: "Rosario",
    text: "La Garganta del Diablo es una experiencia única. Muy bien organizado, el equipamiento es completo y los guías te transmiten confianza desde el primer momento. Lo recomiendo sin dudarlo.",
  },
  {
    name: "Carolina y Tomás",
    city: "Córdoba",
    text: "Era nuestra primera vez haciendo rafting y no podríamos haber elegido mejor lugar. La charla de seguridad previa te da toda la tranquilidad. El río, el volcán, la gente... todo 10 puntos.",
  },
];

export default function Testimonials() {
  return (
    <section id="opiniones" className="scroll-mt-28 bg-white py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Opiniones"
          title="Lo que dicen nuestros visitantes"
          description="Más de 25 años llevando familias, parejas y grupos a vivir el Chimehuín."
        />

        {/* Badge de Google Rating */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <img
              src="/google-logo.svg"
              alt="Google"
              className="h-6 w-auto"
            />
            <div className="flex items-center gap-1">
              {/* 5 estrellas */}
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-bold text-lg">4.9</span>
            <span className="text-slate-500 text-sm">· +3.000 reseñas en Google</span>
            <a
              href="https://maps.app.goo.gl/gvDiGoz7ZJw66iSa9"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm underline text-slate-500 hover:text-brand transition-colors duration-150 ${focusRing}`}
            >
              Ver todas →
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 100}>
              <div className="h-full rounded-2xl bg-slate-50 p-8 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mb-4 h-8 w-8 text-brand/40"
                  aria-hidden="true"
                >
                  <path d="M9.983 3 7.03 9.9H4.017v8.1h7.1V9.9H8.055L9.983 5.4V3ZM20.983 3l-2.953 6.9h-3.013v8.1h7.1V9.9h-3.062l1.928-4.5V3Z" />
                </svg>

                <p className="leading-relaxed text-slate-600 italic">
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
