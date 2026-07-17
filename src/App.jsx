import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import SectionHeading from "./components/ui/SectionHeading";

function App() {
  return (
    <main className="min-h-screen bg-[var(--paper)] py-24">
      <Container>
        <SectionHeading
          eyebrow="Welcome"
          title="Quality printing, when deadlines loom."
          description="Professional litho, digital, promotional and apparel printing for businesses across Johannesburg."
          align="center"
        />

        <div className="mt-10 flex justify-center gap-4">
          <Button>Request a Quote</Button>

          <Button variant="outline">
            Call Us
          </Button>
        </div>
      </Container>
    </main>
  );
}

export default App;