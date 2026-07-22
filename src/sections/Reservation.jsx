import { useState } from "react";

export default function Reservation() {
  const [shift, setShift] = useState("Mañana");
  const [people, setPeople] = useState(2);

  const whatsappMessage = encodeURIComponent(
`Hola Pomelostour.

Quisiera consultar disponibilidad para:

Turno: ${shift}

Cantidad de personas: ${people}

Muchas gracias.`
  );

  const whatsappUrl =
    `https://wa.me/5492944802156?text=${whatsappMessage}`;

  return (
    <section
      id="reserva"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-4xl px-6">

        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-pink-500">
          Reserva
        </p>

        <h2 className="mb-6 text-center text-5xl font-black text-slate-900">
          Reservá tu lugar
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-slate-600">
          Elegí el turno y la cantidad de personas. Te responderemos por
          WhatsApp con la disponibilidad y toda la información necesaria.
        </p>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Turno
              </label>

              <select
                value={shift}
                onChange={(e) => setShift(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white p-4"
              >
                <option>Mañana</option>
                <option>Tarde</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Cantidad de personas
              </label>

              <input
                type="number"
                min="1"
                max="35"
                setep="1"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white p-4"
              />
            </div>

          </div>

          <div className="mt-8 text-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                rounded-full
                bg-pink-500
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:bg-pink-600
              "
            >
              Consultar disponibilidad
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}