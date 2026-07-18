import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";

import Container from "../ui/Container";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="bg-[var(--ink)] py-20 text-white">
      <Container>
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Logo />

            <p className="mt-6 max-w-sm leading-7 text-gray-300">
              Quality printing, when deadlines loom.
              Professional litho, digital, promotional
              and apparel printing in Johannesburg.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>

              <li>
                <a href="#capabilities" className="hover:text-white">
                  Capabilities
                </a>
              </li>

              <li>
                <a href="#clients" className="hover:text-white">
                  Clients
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+27 68 018 2295</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>quotes@speedyclearprint.co.za</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Craighall, Johannesburg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            © 2026 Speedyclearprint. All rights reserved.
          </p>

          <a
            href="#"
            className="flex items-center gap-2 text-sm transition hover:text-[var(--primary)]"
          >
            <ArrowUp size={18} />
            Back to Top
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;