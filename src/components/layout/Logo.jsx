function Logo() {
  return (
    <a
      href="#"
      className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
    >
      {/* Logo Mark */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--ink)]">
        <span className="font-serif text-xl font-bold text-white">S</span>

        {/* Registration Dot */}
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-[var(--primary)]"></span>
      </div>

      {/* Brand Name */}
      <div className="flex items-baseline text-2xl font-semibold">
        <span>Speedy</span>
        <span className="text-[var(--primary)]">clear</span>
        <span>print</span>
      </div>
    </a>
  );
}

export default Logo;