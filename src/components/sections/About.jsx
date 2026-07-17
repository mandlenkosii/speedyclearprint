import about from "../../data/about";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-20 lg:grid-cols-2">
          {/* Left */}

          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow={about.heading}
              title={about.title}
            />
          </div>

          {/* Right */}

          <div className="space-y-8">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-8 text-[var(--ink-light)]"
              >
                {paragraph}
              </p>
            ))}

            {/* Mission */}

            <div className="mt-12 rounded-3xl border border-[var(--border)] bg-white p-10 shadow-sm">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
                Our Mission
              </p>

              <p className="text-xl leading-9 font-medium">
                {about.mission}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;