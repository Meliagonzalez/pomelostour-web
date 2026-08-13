import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { es } from "react-day-picker/locale";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const focusRing =
  "focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand";

const SHIFT_DETAILS = {
  "Mañana": {
    detail: "10:30 hs · Finaliza ~13:00 hs · Solo vehículo propio · Sin merienda",
    messageLabel: "Mañana (10:30 hs)",
  },
  "Tarde": {
    detail: "14:30 hs · Finaliza ~18:30 hs · Incluye merienda · Traslado disponible",
    messageLabel: "Tarde (14:30 hs)",
  },
};

const TRANSFER_OPTIONS = {
  no: "No, vamos por nuestra cuenta.",
  sma: "Sí, desde San Martín de los Andes.",
  junin: "Sí, desde Junín de los Andes.",
};

function formatDisplayDate(d) {
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

export default function Reservation() {
  const [date, setDate] = useState(undefined);
  const [shift, setShift] = useState("Mañana");
  const [people, setPeople] = useState(2);
  const [transfer, setTransfer] = useState("");
  const [errors, setErrors] = useState({});
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [datePickerAlignRight, setDatePickerAlignRight] = useState(false);
  const dateFieldRef = useRef(null);
  const datePickerPopoverRef = useRef(null);

  const minDateObj = new Date();
  minDateObj.setHours(0, 0, 0, 0);
  minDateObj.setDate(minDateObj.getDate() + 1);

  useEffect(() => {
    if (!datePickerOpen) return;

    function handlePointerDown(event) {
      if (dateFieldRef.current && !dateFieldRef.current.contains(event.target)) {
        setDatePickerOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setDatePickerOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [datePickerOpen]);

  useLayoutEffect(() => {
    if (!datePickerOpen) return;

    const trigger = dateFieldRef.current;
    const popover = datePickerPopoverRef.current;
    if (!trigger || !popover) return;

    const triggerLeft = trigger.getBoundingClientRect().left;
    const popoverWidth = popover.offsetWidth;
    const overflowsRight = triggerLeft + popoverWidth > window.innerWidth - 16;

    setDatePickerAlignRight(overflowsRight);
  }, [datePickerOpen]);

  function handleDateSelect(selected) {
    setDate(selected);
    setDatePickerOpen(false);
    if (selected) {
      setErrors((prev) => {
        const rest = { ...prev };
        delete rest.date;
        return rest;
      });
    }
  }

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
    } else if (date < minDateObj) {
      newErrors.date = "La fecha debe ser con al menos 1 día de anticipación.";
    }

    if (!shift) {
      newErrors.shift = "Seleccioná un turno.";
    }

    const peopleNumber = Number(people);
    if (!people || Number.isNaN(peopleNumber) || peopleNumber < 1 || peopleNumber > 9) {
      newErrors.people = "Ingresá una cantidad válida de personas (entre 1 y 9).";
    }

    if (shift === "Tarde" && !transfer) {
      newErrors.transfer = "Seleccioná una opción.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const formattedDate = formatDisplayDate(date);

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
      className="scroll-mt-28 bg-white py-14 md:py-24"
    >
      <div className="mx-auto max-w-4xl px-6">

        <SectionHeading
          eyebrow="Reserva"
          title="Reservá tu lugar"
          description="Elegí el turno y la cantidad de personas. Te responderemos por WhatsApp con la disponibilidad y toda la información necesaria."
        />

        <Reveal as="div" className="rounded-2xl bg-slate-50 p-8 shadow-sm">

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label htmlFor="reserva-fecha" className="mb-2 block font-semibold text-slate-700">
                Fecha deseada
              </label>

              <div ref={dateFieldRef} className="relative">
                <button
                  id="reserva-fecha"
                  type="button"
                  onClick={() => setDatePickerOpen((open) => !open)}
                  aria-haspopup="dialog"
                  aria-expanded={datePickerOpen}
                  aria-invalid={Boolean(errors.date)}
                  aria-describedby={errors.date ? "reserva-fecha-error" : undefined}
                  className={`flex w-full cursor-pointer items-center justify-between rounded-xl border border-slate-300 bg-white p-4 text-left ${focusRing} ${date ? "text-slate-900" : "text-slate-400"}`}
                >
                  <span>{date ? formatDisplayDate(date) : "Seleccioná una fecha"}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-5 w-5 shrink-0 text-slate-400"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4.5" width="18" height="16" rx="2" />
                    <path d="M16 2.5v4M8 2.5v4M3 9.5h18" />
                  </svg>
                </button>

                {datePickerOpen && (
                  <div
                    ref={datePickerPopoverRef}
                    role="dialog"
                    aria-modal="true"
                    className={`absolute top-full z-50 mt-2 rounded-xl border border-gray-100 bg-white p-3 shadow-lg ${datePickerAlignRight ? "right-0" : "left-0"}`}
                  >
                    <DayPicker
                      mode="single"
                      locale={es}
                      selected={date}
                      onSelect={handleDateSelect}
                      disabled={{ before: minDateObj }}
                      defaultMonth={date ?? new Date()}
                      classNames={{
                        today: "underline decoration-2 underline-offset-4",
                        disabled: "cursor-not-allowed text-slate-300",
                      }}
                    />
                  </div>
                )}
              </div>

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
                className={`w-full cursor-pointer rounded-xl border border-slate-300 bg-white p-4 ${focusRing}`}
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
                max="9"
                step="1"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                aria-invalid={Boolean(errors.people)}
                aria-describedby={errors.people ? "reserva-personas-error" : undefined}
                className={`w-full rounded-xl border border-slate-300 bg-white p-4 ${focusRing}`}
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
                  className="w-full cursor-pointer rounded-xl border border-slate-300 bg-white p-4"
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
              className={`
                inline-flex
                cursor-pointer
                rounded-full
                bg-brand
                px-8
                py-4
                font-bold
                text-white
                transition-all
                duration-200
                hover:bg-brand-dark
                ${focusRing}
              `}
            >
              Reservar por WhatsApp
            </button>
          </div>

        </Reveal>
      </div>
    </section>
  );
}