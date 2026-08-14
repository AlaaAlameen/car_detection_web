import type { FormattedComparisonRow } from "../models/vehicleDetails.types";
import { ConfidenceBar } from "./ConfidenceBar";

interface VehicleComparisonTableProps {
  rows: FormattedComparisonRow[];
}

export function VehicleComparisonTable({ rows }: VehicleComparisonTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03] text-white/50">
              <th className="px-4 py-3.5 text-start font-medium">الخاصية</th>
              <th className="px-4 py-3.5 text-start font-medium">
                AI Detection
              </th>
              <th className="px-4 py-3.5 text-start font-medium">
                Confidence
              </th>
              <th className="px-4 py-3.5 text-start font-medium">
                البيانات الفعلية
              </th>
              <th className="px-4 py-3.5 text-start font-medium">Mismatch</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.property}
                className="border-b border-white/5 transition hover:bg-white/[0.04]"
              >
                <td className="px-4 py-3.5 font-medium text-white/80">
                  {row.propertyLabel}
                </td>
                <td className="px-4 py-3.5">
                  <ValueText value={row.aiValue} mismatch={row.mismatch} />
                </td>
                <td className="px-4 py-3.5">
                  <ConfidenceBar
                    value={row.confidence}
                    label={row.confidenceLabel}
                  />
                </td>
                <td className="px-4 py-3.5 text-white/70">
                  {row.actualValue}
                </td>
                <td className="px-4 py-3.5">
                  <MismatchBadge mismatch={row.mismatch} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ValueText({
  value,
  mismatch,
}: {
  value: string;
  mismatch: boolean;
}) {
  return (
    <span
      className={`font-medium ${
        mismatch ? "text-rose-400" : "text-emerald-400"
      }`}
    >
      {value}
    </span>
  );
}

function MismatchBadge({ mismatch }: { mismatch: boolean }) {
  return (
    <span
      className={`inline-flex rounded-md px-2 py-0.5 text-[11px] font-semibold ${
        mismatch
          ? "bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/30"
          : "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30"
      }`}
    >
      {mismatch ? "TRUE" : "FALSE"}
    </span>
  );
}
