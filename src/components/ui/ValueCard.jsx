function ValueCard({ value }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      
      {/* Accent Bar */}
      <span className="absolute left-0 top-0 h-full w-1 bg-[var(--primary)] scale-y-0 transition-transform duration-300 origin-top group-hover:scale-y-100"></span>

      <p className="mb-6 text-sm font-bold tracking-widest text-[var(--primary)]">
        {value.id}
      </p>

      <h3 className="text-2xl font-semibold">
        {value.title}
      </h3>

      <p className="mt-5 leading-7 text-[var(--ink-light)]">
        {value.description}
      </p>
    </article>
  );
}

export default ValueCard;