export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <>
      <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-brand">
        {eyebrow}
      </p>

      <h2 className="mb-6 text-balance text-center text-4xl font-black leading-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mb-16 max-w-2xl text-center leading-relaxed text-slate-600">
          {description}
        </p>
      )}
    </>
  );
}
