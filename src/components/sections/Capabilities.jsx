import { Check } from "lucide-react";

import capabilities from "../../data/capabilities";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

function Capabilities() {
  return (
    <section
      id="capabilities"
      className="bg-[var(--ink)] py-24 text-white lg:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Full Capability List"
          title="If you can print it, we can produce it."
          description="Our experienced team and modern equipment allow us to handle everything from everyday office printing to complex commercial production."
          light
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10"
            >
              <Check
                size={18}
                className="text-[var(--primary)]"
              />

              <span className="text-sm md:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Capabilities;