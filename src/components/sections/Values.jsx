import values from "../../data/values";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ValueCard from "../ui/ValueCard";

function Values() {
  return (
    <section
      id="values"
      className="py-24 lg:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Our Values"
          title="The principles behind every job that leaves the press."
          description="Everything we produce is guided by quality, integrity and a commitment to exceptional customer service."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value) => (
            <ValueCard
              key={value.id}
              value={value}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Values;