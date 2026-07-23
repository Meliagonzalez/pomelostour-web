import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

// Para agregar una pregunta, sumar un objeto { question, answer } al array.
const faqs = [
  {
    question: "¿Necesito experiencia previa?",
    answer:
      "No. La actividad está pensada para personas sin experiencia.",
  },
  {
    question: "¿Qué incluye la actividad?",
    answer:
      "Incluye equipamiento completo y acompañamiento de guías especializados.",
  },
  {
    question: "¿Cuál es la edad mínima?",
    answer: "Próximamente.",
  },
  {
    question: "¿Cuánto dura la experiencia?",
    answer: "Próximamente.",
  },
  {
    question: "¿Qué debo llevar?",
    answer: "Próximamente.",
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

      </div>
    </section>
  );
}
