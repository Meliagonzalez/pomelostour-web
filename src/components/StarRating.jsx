const starPath =
  "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

export default function StarRating({ rating = 5, size = "h-4 w-4", emptyClass = "text-slate-200" }) {
  const filled = Math.round(rating);

  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} de 5 estrellas`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`${size} fill-current ${i < filled ? "text-yellow-400" : emptyClass}`}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d={starPath} />
        </svg>
      ))}
    </div>
  );
}
