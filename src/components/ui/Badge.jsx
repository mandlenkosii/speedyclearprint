function Badge({
  children,
  variant = "primary",
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-[var(--primary)] text-white",

    secondary:
      "bg-white border border-[var(--border)] text-[var(--ink)]",

    dark:
      "bg-[var(--ink)] text-white",

    outline:
      "border border-[var(--primary)] text-[var(--primary)] bg-transparent",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

export default Badge;