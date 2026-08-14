import type { BarItem } from "../../models/dashboard.types";

interface BarChartProps {
  data: BarItem[];
  height?: number;
}

export function BarChart({ data, height = 200 }: BarChartProps) {
  const max = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className="flex h-full flex-col justify-end" style={{ minHeight: height }}>
      <div className="flex flex-1 items-end justify-between gap-2 px-1">
        {data.map((item) => {
          const pct = (item.value / max) * 100;
          return (
            <div
              key={item.label}
              className="flex h-full flex-1 flex-col items-center justify-end gap-2"
            >
              <span className="text-xs font-semibold text-white/70">
                {item.value}%
              </span>
              <div className="relative flex w-full flex-1 items-end justify-center">
                <div
                  className="w-[70%] max-w-10 rounded-t-lg shadow-[0_0_20px_rgba(99,102,241,0.25)] transition-all"
                  style={{
                    height: `${pct}%`,
                    background: `linear-gradient(180deg, ${item.color} 0%, ${item.color}88 100%)`,
                    minHeight: 8,
                  }}
                />
              </div>
              <span className="text-center text-[11px] text-white/45">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
