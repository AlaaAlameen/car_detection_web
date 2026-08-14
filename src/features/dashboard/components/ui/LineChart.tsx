import type { ChartPoint } from "../../models/dashboard.types";

interface LineChartProps {
  data: ChartPoint[];
  height?: number;
}

export function LineChart({ data, height = 220 }: LineChartProps) {
  const width = 560;
  const padding = { top: 20, right: 20, bottom: 36, left: 40 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const max = Math.max(...data.map((d) => d.value), 1);
  const min = Math.min(...data.map((d) => d.value), 0) * 0.85;

  const points = data.map((d, i) => {
    const x =
      padding.left +
      (data.length === 1 ? chartW / 2 : (i / (data.length - 1)) * chartW);
    const y =
      padding.top + chartH - ((d.value - min) / (max - min || 1)) * chartH;
    return { x, y, ...d };
  });

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  const areaPath = `${linePath} L ${points[points.length - 1].x} ${
    padding.top + chartH
  } L ${points[0].x} ${padding.top + chartH} Z`;

  return (
    <div className="w-full overflow-hidden">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full"
        role="img"
        aria-label="مخطط خطي للفحوصات"
      >
        <defs>
          <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
        </defs>

        {[0, 0.25, 0.5, 0.75, 1].map((t) => {
          const y = padding.top + chartH * (1 - t);
          return (
            <line
              key={t}
              x1={padding.left}
              y1={y}
              x2={width - padding.right}
              y2={y}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          );
        })}

        <path d={areaPath} fill="url(#lineFill)" />
        <path
          d={linePath}
          fill="none"
          stroke="url(#lineStroke)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {points.map((p) => (
          <g key={p.label}>
            <circle
              cx={p.x}
              cy={p.y}
              r="5"
              fill="#0B1220"
              stroke="#818CF8"
              strokeWidth="2.5"
            />
            <text
              x={p.x}
              y={height - 10}
              textAnchor="middle"
              className="fill-white/45"
              fontSize="11"
            >
              {p.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
