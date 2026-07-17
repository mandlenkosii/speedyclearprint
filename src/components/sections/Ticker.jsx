import servicesTicker from "../../data/servicesTicker";

function Ticker() {
  return (
    <section className="overflow-hidden bg-[var(--ink)] py-4 text-white">
      <div className="ticker-track flex w-max">
        {[...servicesTicker, ...servicesTicker].map((service, index) => (
          <div
            key={index}
            className="mx-8 flex items-center whitespace-nowrap"
          >
            <span className="text-sm font-medium uppercase tracking-wider">
              {service}
            </span>

        <div className="ml-8 flex gap-1">
            <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
            <span className="h-2 w-2 rounded-full bg-pink-500"></span>
            <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
            <span className="h-2 w-2 rounded-full bg-black border border-white/20"></span>
        </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Ticker;