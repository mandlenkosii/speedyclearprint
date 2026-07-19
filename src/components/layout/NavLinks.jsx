import navigation from "../../data/navigation";

function NavLinks({ onClick }) {
  return (
    <nav className="flex items-center gap-8 xl:gap-10">
      {navigation.map((item) => (
       <a
        key={item.label}
        href={item.href}
        onClick={onClick}
        className="group relative text-sm font-semibold uppercase tracking-[0.15em] text-[var(--ink)] transition-colors duration-300 hover:text-[var(--primary)]"
        >
        {item.label}
        <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full"></span>
    </a> 
      ))}
    </nav>
  );
}

export default NavLinks;