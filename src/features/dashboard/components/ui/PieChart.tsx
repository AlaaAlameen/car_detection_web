import type { PieSlice } from "../../models/dashboard.types";

interface PieChartProps {
  data: PieSlice[];
  size?: number;
}

export function PieChart({ data, size = 180 }: PieChartProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0) || 1;
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - 8;
  const inner = radius * 0.58;

  let cumulative = 0;

  const slices = data.map((slice) => {
    const start = (cumulative / total) * Math.PI * 2 - Math.PI / 2;
    cumulative += slice.value;
    const end = (cumulative / total) * Math.PI * 2 - Math.PI / 2;

    const x1 = cx + radius * Math.cos(start);
    const y1 = cy + radius * Math.sin(start);
    const x2 = cx + radius * Math.cos(end);
    const y2 = cy + radius * Math.sin(end);
    const ix1 = cx + inner * Math.cos(end);
    const iy1 = cy + inner * Math.sin(end);
    const ix2 = cx + inner * Math.cos(start);
    const iy2 = cy + inner * Math.sin(start);
    const large = end - start > Math.PI ? 1 : 0;

    const path = [
      `M ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${large} 1 ${x2} ${y2}`,
      `L ${ix1} ${iy1}`,
      `A ${inner} ${inner} 0 ${large} 0 ${ix2} ${iy2}`,
      "Z",
    ].join(" ");

    return { ...slice, path };
  });

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="shrink-0"
        role="img"
        aria-label="توزيع الألوان"
      >
        {slices.map((s) => (
          <path
            key={s.label}
            d={s.path}
            fill={s.color}
            className="opacity-90 transition hover:opacity-100"
          />
        ))}
        <circle cx={cx} cy={cy} r={inner - 2} fill="#0B1220" />
        <text
          x={cx}
          y={cy - 4}
          textAnchor="middle"
          className="fill-white"
          fontSize="18"
          fontWeight="700"
        >
          {total}%
        </text>
        <text
          x={cx}
          y={cy + 14}
          textAnchor="middle"
          className="fill-white/45"
          fontSize="10"
        >
          الإجمالي
        </text>
      </svg>

      <ul className="flex w-full flex-col gap-2">
        {data.map((d) => (
          <li
            key={d.label}
            className="flex items-center justify-between gap-3 text-sm"
          >
            <span className="flex items-center gap-2 text-white/70">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: d.color }}
              />
              {d.label}
            </span>
            <span className="font-semibold text-white/90">{d.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
