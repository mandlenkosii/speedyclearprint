import printProcess from "../../data/printProcess";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ProcessStep from "../ui/ProcessStep";

function PrintProcess() {
  return (
    <section
      id="process"
      className="relative bg-[var(--paper)] py-24 lg:py-32"
    >
      <Container>

        {/* CMYK Registration Marks */}
        <div className="mb-8 flex justify-center gap-3">
          <span className="h-4 w-4 rounded-full bg-cyan-500"></span>
          <span className="h-4 w-4 rounded-full bg-pink-500"></span>
          <span className="h-4 w-4 rounded-full bg-yellow-400"></span>
          <span className="h-4 w-4 rounded-full bg-black"></span>
        </div>

        <SectionHeading
          eyebrow="Our Process"
          title="Five steps. One exceptional print result."
          description="Every project follows a carefully managed workflow—from quotation to delivery—to ensure exceptional quality, accuracy and on-time completion."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-[var(--border)] bg-white p-8 text-center shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
                 Quality Controlled Workflow
            </p>

             <p className="mt-4 text-lg leading-8 text-[var(--ink-light)]">
                Every project follows the same carefully managed production
                process—from quotation and proof approval to production,
                quality control and final collection or delivery.
            </p>
        </div>

        {/* Timeline */}
         <div className="relative mt-24">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-1/2 hidden h-1 -translate-y-1/2 rounded-full bg-[var(--border)] lg:block"></div>

            <div className="grid gap-12 lg:grid-cols-5">
             {printProcess.map((step, index) => (
                <ProcessStep
                    key={step.number}
                    step={step}
                    index={index}
                />
             ))}
            </div>
    </div>
      </Container>
    </section>
  );
}

export default PrintProcess;