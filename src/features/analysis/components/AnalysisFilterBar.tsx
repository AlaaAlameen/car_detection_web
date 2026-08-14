import { Input } from "../../auth";
import {
  alertTypeOptions,
  severityOptions,
} from "../data/mockAnalysisData";
import type { AnalysisFilters } from "../models/analysis.types";

interface AnalysisFilterBarProps {
  filters: AnalysisFilters;
  onSearchChange: (value: string) => void;
  onAlertTypeChange: (value: string) => void;
  onSeverityChange: (value: string) => void;
}

export function AnalysisFilterBar({
  filters,
  onSearchChange,
  onAlertTypeChange,
  onSeverityChange,
}: AnalysisFilterBarProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="min-w-0 flex-1 sm:max-w-sm">
        <Input
          value={filters.search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="بحث برقم اللوحة..."
          className="border-white/10 bg-white/5 text-white placeholder:text-white/35 focus:border-blue-500 focus:ring-blue-500/20"
        />
      </div>

      <FilterSelect
        label="أنواع التنبيهات"
        value={filters.alertType}
        options={[...alertTypeOptions]}
        onChange={onAlertTypeChange}
      />

      <FilterSelect
        label="كل درجات الخطورة"
        value={filters.severity}
        options={[...severityOptions]}
        onChange={onSeverityChange}
      />
    </div>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative min-w-[160px]">
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 pe-9 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-[#0f172a] text-white"
          >
            {option === "الكل" ? label : option}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute inset-y-0 end-3 flex items-center text-white/40">
        ▾
      </span>
    </div>
  );
}
