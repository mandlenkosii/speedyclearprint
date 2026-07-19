import { Phone } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Badge from "../ui/Badge";

function Hero() {
  return (
   <section
  id="hero"
  className="relative flex min-h-[90vh] items-center overflow-hidden py-20 lg:py-28"
>

  {/* Background Texture */}
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
    <div className="absolute inset-0 bg-[radial-gradient(circle,#000_1px,transparent_1px)] [background-size:22px_22px]" />
  </div>


      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <Badge>Johannesburg Print Shop</Badge>

            <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] md:text-6xl lg:text-7xl xl:text-8xl">
              Quality printing,
              <span className="block italic text-[var(--primary)]">
                when deadlines loom.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--ink-light)]">
              Based in Craighall, Speedyclearprint produces over
              one million impressions every month, delivering
              premium litho, digital, promotional and apparel
              printing for businesses across Johannesburg.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#contact">
                Request a Quote
              </Button>

              <Button variant="outline" href="tel:+27680182295">
                <Phone size={18} />
                <span className="ml-2">
                  +27 68 018 2295
                </span>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-[var(--border)] pt-8">
              <div>
                <h3 className="font-display text-4xl text-[var(--primary)]">1M+</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--ink-light)]">
                  Prints per month
                </p>
              </div>

              <div>
                <h3 className="font-display text-4xl text-[var(--primary)]">40+</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--ink-light)]">
                  Print services
                </p>
              </div>

              <div>
                <h3 className="font-display text-4xl text-[var(--primary)] ">24h</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--ink-light)]">
                  Rush turnaround
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white shadow-2xl">
              <img
                src="/images/hero.jpg"
                 alt="Printing Press"
                 className="h-[620px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 rounded-3xl border border-[var(--border)] bg-white p-7 shadow-2xl">
              <div className="mb-4 flex gap-2">
                <span className="h-4 w-4 rounded-full bg-cyan-500"></span>
                <span className="h-4 w-4 rounded-full bg-pink-500"></span>
                <span className="h-4 w-4 rounded-full bg-yellow-400"></span>
                <span className="h-4 w-4 rounded-full bg-black"></span>
            </div>

            <p className="text-sm font-semibold tracking-wide">
                Litho • Digital
            </p>

            <p className="text-sm font-semibold tracking-wide">
                 Promotional • Apparel
            </p>
            </div>

            {/* Floating Badge */}
            <div className="absolute right-6 top-6">
              <Badge>Fast Turnaround</Badge>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;