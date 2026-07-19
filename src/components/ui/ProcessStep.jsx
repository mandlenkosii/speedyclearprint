import {
  BadgeCheck,
  Clock3,
  FileText,
  Layers3,
  Printer,
  Truck,
} from "lucide-react";

const icons = {
  FileText,
  Layers3,
  BadgeCheck,
  Printer,
  Truck,
};

function ProcessStep({ step, index }) {
  const Icon = icons[step.icon];
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col items-center">
      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:h-[420px] lg:flex-col lg:items-center">
        {/* Top Card */}
        {isEven && (
          <div className="group w-full max-w-xs rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <span className="text-xs font-bold tracking-[0.3em] text-[var(--primary)]">
              {step.number}
            </span>

            <h3 className="mt-3 text-xl font-semibold">
              {step.title}
            </h3>

            <div className="mt-4 flex items-center gap-2 text-sm text-[var(--ink-light)]">
              <Clock3 size={16} />
              <span>{step.time}</span>
            </div>

            <p className="mt-4 text-sm leading-7 text-[var(--ink-light)]">
              {step.description}
            </p>
          </div>
        )}

        {/* Top Connector */}
{isEven && (
  <div className="flex flex-1 flex-col items-center">
    <div className="h-10 w-px bg-[var(--border)]"></div>

    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary)] shadow-lg transition-transform duration-300 group-hover:scale-110">
      <Icon className="text-white" size={28} />
    </div>
  </div>
)}

        {/* Bottom Connector */}
        {!isEven && (
        <div className="flex flex-1 flex-col items-center justify-end">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary)] shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Icon className="text-white" size={28} />
            </div>

            <div className="h-10 w-px bg-[var(--border)]"></div>
        </div>
        )}

        {/* Bottom Card */}
        {!isEven && (
          <div className="group w-full max-w-xs rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <span className="text-xs font-bold tracking-[0.3em] text-[var(--primary)]">
              {step.number}
            </span>

            <h3 className="mt-3 text-xl font-semibold">
              {step.title}
            </h3>

            <div className="mt-4 flex items-center gap-2 text-sm text-[var(--ink-light)]">
              <Clock3 size={16} />
              <span>{step.time}</span>
            </div>

            <p className="mt-4 text-sm leading-7 text-[var(--ink-light)]">
              {step.description}
            </p>
          </div>
        )}
      </div>

      {/* Mobile Layout */}
      <div className="flex w-full flex-col items-center lg:hidden">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary)] shadow-lg">
          <Icon className="text-white" size={28} />
        </div>

        <div className="mt-6 w-full rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm">
          <span className="text-xs font-bold tracking-[0.3em] text-[var(--primary)]">
            {step.number}
          </span>

          <h3 className="mt-3 text-xl font-semibold">
            {step.title}
          </h3>

          <div className="mt-4 flex items-center gap-2 text-sm text-[var(--ink-light)]">
            <Clock3 size={16} />
            <span>{step.time}</span>
          </div>

          <p className="mt-4 text-sm leading-7 text-[var(--ink-light)]">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProcessStep;