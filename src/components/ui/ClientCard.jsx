function ClientCard({ name }) {
  return (
    <div className="group flex h-32 items-center justify-center rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
      <h3 className="text-center text-lg font-semibold text-[var(--ink-light)] transition-colors duration-300 group-hover:text-[var(--primary)]">
        {name}
      </h3>
    </div>
  );
}

export default ClientCard;