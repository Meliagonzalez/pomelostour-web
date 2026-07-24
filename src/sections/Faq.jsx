import { useState } from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

// Para agregar una pregunta, sumar un objeto { q, a } dentro de la categoría correspondiente.
const categorias = [
  {
    id: "experiencia",
    label: "Experiencia",
    preguntas: [
      { q: "¿Dónde se realiza la actividad?", a: "En el Río Chimehuín, a 67 km de San Martín de los Andes y 23 km de Junín de los Andes." },
      { q: "¿Cuánto dura?", a: "Aproximadamente 2 horas en el agua. Turno mañana: 10:30 a ~13:00 hs. Turno tarde: 14:30 a ~18:30 hs." },
      { q: "¿Es necesario tener experiencia previa?", a: "No, la actividad es apta para todo público sin experiencia." },
      { q: "¿Cuántas personas van por embarcación?", a: "En general 8 personas. En condiciones favorables pueden ir hasta 9." },
      { q: "¿Quién guía la actividad?", a: "Un guía profesional con titulación IRF (International Rafting Federation)." },
      { q: "¿Qué nivel de dificultad tiene el río?", a: "Dificultad media en primavera y baja-media en verano." },
      { q: "¿Hay que saber nadar?", a: "No. Todos los participantes llevan chaleco de flotación." },
      { q: "¿Cuál es la edad mínima?", a: "6 años en diciembre, enero y febrero. 8 años en octubre y noviembre." },
    ],
  },
  {
    id: "equipamiento",
    label: "Equipamiento",
    preguntas: [
      { q: "¿Qué entrega Pomelostour?", a: "Medias de neopreno, traje de neopreno (con mangas en días fríos), chaqueta rompevientos, casco y chaleco de flotación." },
      { q: "¿Qué tengo que llevar?", a: "Traje de baño y zapatillas. En días fríos podés sumar una remera térmica debajo del traje. No uses ojotas — no son compatibles con las medias de neopreno." },
      { q: "¿Debo llevar traje de neopreno propio?", a: "No, salvo que prefieras usar el tuyo." },
      { q: "¿Puedo usar anteojos?", a: "Sí, pero se recomienda que tengan sujetador o strap." },
      { q: "¿Puedo llevar GoPro?", a: "Sí, aunque queda bajo tu responsabilidad en caso de extravío." },
      { q: "¿Puedo llevar el celular al bote?", a: "No se recomienda — se puede perder con facilidad." },
      { q: "¿Hay fotografía profesional?", a: "Sí, como servicio opcional con costo aparte. Se contrata el mismo día." },
    ],
  },
  {
    id: "clima",
    label: "Clima",
    preguntas: [
      { q: "¿Qué pasa si llueve?", a: "La actividad se realiza igual." },
      { q: "¿La actividad se suspende por mal tiempo?", a: "Solo en caso de tormenta eléctrica." },
      { q: "¿Cómo está el agua?", a: "Cristalina, entre 16 y 18°C según la temporada." },
      { q: "¿Hace mucho frío?", a: "Depende del día. En días fríos proveemos equipamiento acorde al clima." },
    ],
  },
  {
    id: "instalaciones",
    label: "Instalaciones",
    preguntas: [
      { q: "¿Hay baños y vestuarios?", a: "Sí, baños completos y vestuarios para ambos sexos." },
      { q: "¿Hay estacionamiento?", a: "Sí, libre y gratuito dentro del predio." },
      { q: "¿Hay lugar para esperar?", a: "Sí, en nuestro predio frente al Lago Huechulafquen con vista al Volcán Lanín." },
      { q: "¿Hay merienda?", a: "Sí, en el turno tarde." },
      { q: "¿Cómo llego a la base?", a: "A 67 km de San Martín de los Andes: 60 km de pavimento + 7 km de ripio. Sin señal en los últimos kilómetros — recomendamos descargar el mapa de antemano." },
      { q: "¿Hay traslado disponible?", a: "Sí, en el turno tarde desde San Martín de los Andes y Junín de los Andes. El turno mañana es solo con vehículo propio." },
    ],
  },
  {
    id: "reservas",
    label: "Reservas",
    preguntas: [
      { q: "¿Cómo reservo?", a: "Por WhatsApp o de forma presencial en Av. San Martín 941, Local 2, San Martín de los Andes." },
      { q: "¿Cómo puedo pagar?", a: "Efectivo, transferencia bancaria o Mercado Pago." },
      { q: "¿Con cuánta anticipación debo reservar?", a: "Cuanto antes mejor — los cupos por turno son limitados." },
      { q: "¿Puedo cancelar?", a: "Sí. Con más de 24 horas de anticipación se devuelve el 100%." },
      { q: "¿Puedo cambiar la fecha?", a: "Sí, con al menos 24 horas de anticipación. Sin esa anticipación no hay reintegro." },
      { q: "¿Qué pasa si llego tarde?", a: "Se pierde la actividad y no hay devolución." },
      { q: "¿Pueden participar personas embarazadas?", a: "No." },
      { q: "¿Pueden participar personas con problemas de salud?", a: "Depende del caso. Comunicarlo antes de reservar." },
    ],
  },
];

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState(categorias[0].id);
  const [openQuestion, setOpenQuestion] = useState(null);

  const activeCategoryData = categorias.find((cat) => cat.id === activeCategory);

  function handleTabClick(id) {
    setActiveCategory(id);
    setOpenQuestion(null);
  }

  return (
    <section id="faq" className="scroll-mt-28 bg-slate-50 py-14 md:py-24">
      <div className="mx-auto max-w-3xl px-6">

        <SectionHeading
          eyebrow="FAQ"
          title="Preguntas frecuentes"
          description="Algunas respuestas rápidas antes de reservar."
        />

        <div className="mb-8 flex gap-2 overflow-x-auto whitespace-nowrap pb-2">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleTabClick(cat.id)}
              aria-pressed={activeCategory === cat.id}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-150 ${focusRing} ${
                activeCategory === cat.id
                  ? "bg-brand text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {activeCategoryData.preguntas.map((faq, index) => (
            <Reveal key={`${activeCategory}-${faq.q}`} delay={index * 60}>
              <details
                className="group rounded-2xl border border-slate-200 bg-white p-6"
                open={openQuestion === faq.q}
                onToggle={(e) => {
                  setOpenQuestion(e.target.open ? faq.q : null);
                }}
              >
                <summary
                  className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {faq.q}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 shrink-0 text-brand transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>

                <p className="mt-3 leading-relaxed text-slate-600">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-slate-600">¿Tu consulta no está acá?</p>

          <a
            href="https://api.whatsapp.com/send/?phone=5492944802156&text=Hola%2C%20tengo%20una%20consulta%20sobre%20el%20rafting."
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex rounded-full bg-brand px-8 py-4 font-bold text-white transition-all duration-200 hover:bg-brand-dark ${focusRing}`}
          >
            Escribinos por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
