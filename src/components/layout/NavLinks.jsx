import navigation from "../../data/navigation";

function NavLinks({ onClick }) {
  return (
    <nav className="flex items-center gap-8">
      {navigation.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={onClick}
          className="font-medium text-[var(--ink)] transition-colors duration-300 hover:text-[var(--primary)]"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default NavLinks;