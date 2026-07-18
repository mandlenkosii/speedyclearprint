function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) {
  const alignment =
    align === "center"
      ? "text-center mx-auto"
      : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-4xl font-semibold leading-tight md:text-5xl ${
          light ? "text-white" : "text-[var(--ink)]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-lg leading-8 ${
            light
              ? "text-gray-300"
              : "text-[var(--ink-light)]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;