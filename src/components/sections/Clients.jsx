import clients from "../../data/clients";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ClientCard from "../ui/ClientCard";

function Clients() {
  return (
    <section
      id="clients"
      className="bg-white py-24 lg:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Trusted By"
          title="Our valued clients."
          description="We proudly partner with businesses and organisations across Johannesburg, delivering reliable print solutions every day."
          align="center"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {clients.map((client) => (
            <ClientCard
              key={client}
              name={client}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Clients;