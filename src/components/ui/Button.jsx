function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-[var(--primary)] text-white hover:opacity-90",

    secondary:
      "border border-[var(--border)] bg-white hover:bg-gray-100",

    outline:
      "border border-[var(--ink)] hover:bg-[var(--ink)] hover:text-white",
  };

  const className = `${baseStyles} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;