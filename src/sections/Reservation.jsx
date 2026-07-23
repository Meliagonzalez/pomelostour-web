import { useState } from "react";

const SHIFT_DETAILS = {
  "Mañana": {
    detail: "10:30 hs · Finaliza ~13:00 hs · Solo vehículo propio · Sin merienda",
    messageLabel: "Mañana (10:30 hs)",
  },
  "Tarde": {
    detail: "14:30 hs · Finaliza ~18:30 hs · Incluye merienda",
    messageLabel: "Tarde (14:30 hs)",
  },
};

const TRANSFER_OPTIONS = {
  no: "No, vamos por nuestra cuenta.",
  sma: "Sí, desde San Martín de los Andes.",
  junin: "Sí, desde Junín de los Andes.",
};

export default function Reservation() {
  const [date, setDate] = useState("");
  const [shift, setShift] = useState("Mañana");
  const [people, setPeople] = useState(2);
  const [transfer, setTransfer] = useState("");
  const [errors, setErrors] = useState({});

  const minDateObj = new Date();
  minDateObj.setDate(minDateObj.getDate() + 1);
  const minDate = `${minDateObj.getFullYear()}-${String(minDateObj.getMonth() + 1).padStart(2, "0")}-${String(minDateObj.getDate()).padStart(2, "0")}`;

  function handleShiftChange(value) {
    setShift(value);
    if (value !== "Tarde") {
      setTransfer("");
      setErrors((prev) => {
        const rest = { ...prev };
        delete rest.transfer;
        return rest;
      });
    }
  }

  function handleSubmit() {
    const newErrors = {};

    if (!date) {
      newErrors.date = "Seleccioná una fecha.";
    } else if (date < minDate) {
      newErrors.date = "La fecha debe ser con al menos 1 día de anticipación.";
    }

    if (!shift) {
      newErrors.shift = "Seleccioná un turno.";
    }

    const peopleNumber = Number(people);
    if (!people || Number.isNaN(peopleNumber) || peopleNumber < 1 || peopleNumber > 12) {
      newErrors.people = "Ingresá una cantidad válida de personas (entre 1 y 12).";
    }

    if (shift === "Tarde" && !transfer) {
      newErrors.transfer = "Seleccioná una opción.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const [year, month, day] = date.split("-");
    const formattedDate = `${day}/${month}/${year}`;

    const messageLines = [
      "¡Hola! \u{1F44B}",
      "",
      "Quisiera consultar disponibilidad para realizar rafting.",
      "",
      `\u{1F4C5} Fecha: ${formattedDate}`,
      `\u{1F558} Turno: ${SHIFT_DETAILS[shift].messageLabel}`,
      `\u{1F465} Personas: ${people}`,
    ];

    if (shift === "Tarde") {
      messageLines.push(`\u{1F690} Traslado: ${TRANSFER_OPTIONS[transfer]}`);
    }

    messageLines.push("", "¡Muchas gracias!");

    const message = messageLines.join("\n");

    const whatsappUrl =
      `https://api.whatsapp.com/send/?phone=5492944802156&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="reserva"
      className="scroll-mt-28 bg-white py-24"
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
              <label htmlFor="reserva-fecha" className="mb-2 block font-semibold text-slate-700">
                Fecha deseada
              </label>

              <input
                id="reserva-fecha"
                type="date"
                min={minDate}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                aria-invalid={Boolean(errors.date)}
                aria-describedby={errors.date ? "reserva-fecha-error" : undefined}
                className="w-full rounded-xl border border-slate-300 bg-white p-4"
              />

              {errors.date && (
                <p id="reserva-fecha-error" className="mt-1 text-sm text-red-600">
                  {errors.date}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="reserva-turno" className="mb-2 block font-semibold text-slate-700">
                Turno
              </label>

              <select
                id="reserva-turno"
                value={shift}
                onChange={(e) => handleShiftChange(e.target.value)}
                aria-invalid={Boolean(errors.shift)}
                aria-describedby={errors.shift ? "reserva-turno-error" : undefined}
                className="w-full rounded-xl border border-slate-300 bg-white p-4"
              >
                <option value="Mañana">Mañana</option>
                <option value="Tarde">Tarde</option>
              </select>

              <p className="mt-2 text-sm text-slate-500">
                {SHIFT_DETAILS[shift].detail}
              </p>

              {errors.shift && (
                <p id="reserva-turno-error" className="mt-1 text-sm text-red-600">
                  {errors.shift}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="reserva-personas" className="mb-2 block font-semibold text-slate-700">
                Cantidad de personas
              </label>

              <input
                id="reserva-personas"
                type="number"
                min="1"
                max="12"
                step="1"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                aria-invalid={Boolean(errors.people)}
                aria-describedby={errors.people ? "reserva-personas-error" : undefined}
                className="w-full rounded-xl border border-slate-300 bg-white p-4"
              />

              {errors.people && (
                <p id="reserva-personas-error" className="mt-1 text-sm text-red-600">
                  {errors.people}
                </p>
              )}
            </div>

            {shift === "Tarde" && (
              <div>
                <label htmlFor="reserva-traslado" className="mb-2 block font-semibold text-slate-700">
                  ¿Necesitás traslado?
                </label>

                <select
                  id="reserva-traslado"
                  value={transfer}
                  onChange={(e) => setTransfer(e.target.value)}
                  aria-invalid={Boolean(errors.transfer)}
                  aria-describedby={errors.transfer ? "reserva-traslado-error" : undefined}
                  className="w-full rounded-xl border border-slate-300 bg-white p-4"
                >
                  <option value="" disabled hidden>¿Necesitás traslado?</option>
                  <option value="no">No, vamos por nuestra cuenta.</option>
                  <option value="sma">Sí, desde San Martín de los Andes.</option>
                  <option value="junin">Sí, desde Junín de los Andes.</option>
                </select>

                {errors.transfer && (
                  <p id="reserva-traslado-error" className="mt-1 text-sm text-red-600">
                    {errors.transfer}
                  </p>
                )}
              </div>
            )}

          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={handleSubmit}
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
              Reservar por WhatsApp
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}