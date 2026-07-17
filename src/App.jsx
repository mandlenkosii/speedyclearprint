import Button from "./components/ui/Button";

function App() {
  return (
    <main className="min-h-screen bg-[var(--paper)]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-6 px-6">
        <h1 className="text-center text-6xl font-semibold">
          Speedyclearprint
        </h1>

        <p className="max-w-xl text-center text-lg text-[var(--ink-light)]">
          Professional printing solutions for businesses and individuals.
        </p>

        <div className="flex gap-4">
          <Button>Get a Quote</Button>

          <Button variant="outline">
            Call Us
          </Button>
        </div>
      </div>
    </main>
  );
}

export default App;