interface ConfidenceBarProps {
  value: number;
  label: string;
}

export function ConfidenceBar({ value, label }: ConfidenceBarProps) {
  return (
    <div className="flex min-w-[120px] items-center gap-2">
      <div
        className="h-2 flex-1 overflow-hidden rounded-full bg-white/10"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className="h-full rounded-full bg-gradient-to-l from-blue-600 to-violet-500 transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="w-10 shrink-0 text-xs font-semibold text-white/70">
        {label}
      </span>
    </div>
  );
}
