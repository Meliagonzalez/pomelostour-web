import { useEffect, useId, useRef, useState } from "react";
import StarRating from "./StarRating";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

function formatDate(date) {
  if (!date) return null;
  const [year, month, day] = date.split("-").map(Number);
  const parsed = new Date(year, (month || 1) - 1, day || 1);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed.toLocaleDateString("es-AR", { month: "long", year: "numeric" });
}

export default function ReviewCard({ author, rating, text, date, dateLabel, url, source }) {
  const isGoogle = source === "google";
  const displayDate = dateLabel || formatDate(date);
  const textId = useId();
  const textRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);

  // Mostrar el botón solo si el texto recortado no entra completo.
  useEffect(() => {
    const node = textRef.current;
    if (!node || expanded) return;
    const check = () => setOverflows(node.scrollHeight > node.clientHeight + 1);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [expanded, text]);

  return (
    <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-shadow duration-200 hover:shadow-md sm:p-8">
      <header className="flex items-start gap-3">
        <div
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 text-lg font-bold text-brand"
        >
          {author.charAt(0).toUpperCase()}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-bold text-slate-900">{author}</p>
          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
            <StarRating rating={rating} />
            {displayDate && (
              <span className="text-sm text-slate-500">
                {date ? <time dateTime={date}>{displayDate}</time> : displayDate}
              </span>
            )}
          </div>
        </div>
        {isGoogle && (
          <img
            src="/google-logo.svg"
            alt="Reseña publicada en Google"
            title="Reseña publicada en Google"
            className="mt-1 h-4 w-auto shrink-0 opacity-70"
          />
        )}
      </header>

      <blockquote className="mt-5 flex-1">
        <p
          id={textId}
          ref={textRef}
          className={`whitespace-pre-line leading-relaxed text-slate-600 ${expanded ? "" : "line-clamp-5"}`}
        >
          {text}
        </p>
      </blockquote>

      {(overflows || expanded || url) && (
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          {(overflows || expanded) && (
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
              aria-controls={textId}
              className={`rounded font-semibold text-brand transition-colors duration-150 hover:text-brand-dark ${focusRing}`}
            >
              {expanded ? "Mostrar menos" : "Leer opinión completa"}
            </button>
          )}
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded text-slate-500 underline-offset-2 hover:text-slate-900 hover:underline ${focusRing}`}
            >
              Ver reseña original
            </a>
          )}
        </div>
      )}
    </article>
  );
}
