import type { AlertSeverity } from "../models/analysis.types";

const severityConfig: Record<
  AlertSeverity,
  { className: string }
> = {
  عالية: {
    className: "bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/30",
  },
  متوسطة: {
    className: "bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30",
  },
  منخفضة: {
    className:
      "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30",
  },
};

interface SeverityBadgeProps {
  severity: AlertSeverity;
}

export function SeverityBadge({ severity }: SeverityBadgeProps) {
  const config = severityConfig[severity];

  return (
    <span
      className={`inline-flex rounded-md px-2 py-0.5 text-[11px] font-semibold ${config.className}`}
    >
      {severity}
    </span>
  );
}
