function Logo() {
  return (
    <a
      href="#"
      className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
    >
      {/* Logo Mark */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--ink)] shadow-md">
       <span className="font-display text-2xl font-semibold text-white">S</span>

        {/* Registration Dot */}
        <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-[var(--paper)] bg-[var(--primary)]"></span>
      </div>

      {/* Brand Name */}
      <div className="flex items-baseline text-xl font-bold tracking-tight">
        <span className="text-[var(--ink)]">Speedy</span>

        <span className="text-[var(--primary)]">clear</span>

        <span className="text-[var(--ink)]">print</span>
      </div>
    </a>
  );
}

export default Logo;