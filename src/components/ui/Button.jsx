function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
}) {
  const baseStyles =
  "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2";

  const variants = {
    primary:
     "bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[var(--primary)]/30", 

    secondary:
     "border border-[var(--border)] bg-white text-[var(--ink)] shadow-sm hover:-translate-y-0.5 hover:bg-[var(--paper)] hover:shadow-md",  

    outline:
     "border border-[var(--ink)] bg-transparent text-[var(--ink)] hover:-translate-y-0.5 hover:bg-[var(--ink)] hover:text-white", 
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