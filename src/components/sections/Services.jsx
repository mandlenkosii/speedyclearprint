import services from "../../data/services";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";

function Services() {
  return (
    <section
      id="services"
      className="bg-white py-24 lg:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Print production, end to end."
          description="From business cards to large-format signage, we deliver premium print solutions with exceptional quality and turnaround."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Services;