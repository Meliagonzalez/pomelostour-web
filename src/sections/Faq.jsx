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
    <section
      id="faq"
      className="scroll-mt-28 bg-slate-50 py-24"
    >
<div className="mx-auto max-w-3xl px-6">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-pink-500">
          FAQ
        </p>

        <h2 className="mb-6 text-center text-5xl font-black text-slate-900">
          Preguntas frecuentes
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-slate-600">
          Algunas respuestas rápidas antes de reservar.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="font-bold text-slate-900">
                {faq.question}
              </h3>

              <p className="mt-2 text-slate-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}