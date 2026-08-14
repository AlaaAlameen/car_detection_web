import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  displayValue: string;
  subtitle: string;
  displayChange: string;
  isPositive: boolean;
  gradient: string;
  icon: ReactNode;
}

export function StatCard({
  title,
  displayValue,
  subtitle,
  displayChange,
  isPositive,
  gradient,
  icon,
}: StatCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${gradient} p-5 shadow-[0_0_30px_rgba(99,102,241,0.12)] backdrop-blur-xl`}
    >
      <div className="pointer-events-none absolute -start-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-8 -end-4 h-28 w-28 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/15">
          {icon}
        </div>
        <span
          className={`rounded-lg px-2 py-1 text-xs font-semibold ${
            isPositive
              ? "bg-emerald-500/15 text-emerald-400"
              : "bg-rose-500/15 text-rose-400"
          }`}
        >
          {displayChange}
        </span>
      </div>

      <div className="relative z-10 mt-4">
        <p className="text-3xl font-bold tracking-tight text-white">
          {displayValue}
        </p>
        <p className="mt-1 text-sm font-medium text-white/85">{title}</p>
        <p className="mt-0.5 text-xs text-white/50">{subtitle}</p>
      </div>
    </div>
  );
}
