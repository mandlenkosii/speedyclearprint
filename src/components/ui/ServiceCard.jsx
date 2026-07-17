import { ArrowUpRight } from "lucide-react";

function ServiceCard({ service }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <p className="mb-4 text-sm font-semibold text-[var(--primary)]">
          {service.id}
        </p>

        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold">
            {service.title}
          </h3>

          <ArrowUpRight
            className="transition-transform duration-300 group-hover:rotate-45 group-hover:text-[var(--primary)]"
            size={24}
          />
        </div>

        <p className="mt-5 leading-7 text-[var(--ink-light)]">
          {service.description}
        </p>
      </div>
    </article>
  );
}

export default ServiceCard;