import { Menu, X } from "lucide-react";
import { useState } from "react";
import NavLinks from "./NavLinks";

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg border border-[var(--border)] p-2 lg:hidden"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="absolute left-0 top-20 w-full border-t border-[var(--border)] bg-[var(--paper)] p-6 shadow-lg lg:hidden">
          <div className="flex flex-col gap-6">
            <NavLinks onClick={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}

export default MobileMenu;