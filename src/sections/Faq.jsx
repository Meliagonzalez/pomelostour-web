import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500";

// Para agregar una pregunta, sumar un objeto { question, answer } al array.
const faqs = [
  {
    question: "¿Hay que saber nadar?",
    answer: "No. Todos los participantes llevan chaleco de flotación durante toda la actividad.",
  },
  {
    question: "¿Cuál es la edad mínima?",
    answer: "6 años en diciembre, enero y febrero. 8 años en octubre y noviembre.",
  },
  {
    question: "¿Cuánto dura la experiencia?",
    answer:
      "Aproximadamente 2 horas en el agua. El turno mañana va de 10:30 a ~13:00 hs. El turno tarde de 14:30 a ~18:30 hs.",
  },
  {
    question: "¿Qué incluye la actividad?",
    answer:
      "Guía profesional IRF, traje de neopreno, medias de neopreno, chaqueta rompevientos, casco, chaleco de flotación, transporte interno y uso de vestuarios y baños. El turno tarde incluye merienda.",
  },
  {
    question: "¿Qué tengo que llevar?",
    answer:
      "Traje de baño, zapatillas y una muda de ropa seca para cambiarte. En días fríos podés sumar una remera térmica. No uses ojotas.",
  },
  {
    question: "¿Qué pasa si llueve?",
    answer: "La actividad se realiza igual. Solo se suspende en caso de tormenta eléctrica.",
  },
  {
    question: "¿Hay traslado disponible?",
    answer:
      "Sí, en el turno tarde desde San Martín de los Andes y Junín de los Andes. El turno mañana es solo con vehículo propio.",
  },
  {
    question: "¿Hay baños, vestuarios y estacionamiento?",
    answer: "Sí. La base cuenta con baños completos, vestuarios para ambos sexos y estacionamiento gratuito.",
  },
  {
    question: "¿Cómo puedo pagar?",
    answer: "Efectivo, transferencia bancaria o Mercado Pago.",
  },
  {
    question: "¿Puedo cancelar o cambiar la fecha?",
    answer:
      "Sí, con más de 24 horas de anticipación se devuelve el 100%. Sin esa anticipación no hay reintegro. Si llegás tarde se pierde la actividad sin devolución.",
  },
  {
    question: "¿Hay fotografía profesional?",
    answer: "Sí, como servicio opcional con costo aparte. Se contrata el mismo día de la actividad.",
  },
  {
    question: "¿Pueden participar personas con problemas de salud?",
    answer:
      "Las personas embarazadas no pueden participar. Cualquier otra condición médica debe comunicarse antes de reservar para evaluarla.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 bg-slate-50 py-24">
      <div className="mx-auto max-w-3xl px-6">

        <SectionHeading
          eyebrow="FAQ"
          title="Preguntas frecuentes"
          description="Algunas respuestas rápidas antes de reservar."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 60}>
              <details className="group rounded-2xl border border-slate-200 bg-white p-6 open:shadow-sm">
                <summary
                  className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
                >
                  {faq.question}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 shrink-0 text-pink-500 transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>

                <p className="mt-3 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-slate-600">¿Tenés otra consulta?</p>

          <a
            href="https://api.whatsapp.com/send/?phone=5492944802156&text=Hola%2C%20tengo%20una%20consulta%20sobre%20el%20rafting."
            target="_blank"
            rel="noreferrer"
            className={`inline-flex rounded-full bg-pink-500 px-8 py-4 font-semibold text-white transition hover:bg-pink-600 ${focusRing}`}
          >
            Escribinos por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
