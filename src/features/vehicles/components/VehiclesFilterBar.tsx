import { Button, Input } from "../../auth";
import {
  vehicleColorOptions,
  vehicleTypeOptions,
} from "../data/mockVehiclesData";
import type { VehiclesFilters } from "../models/vehicle.types";

interface VehiclesFilterBarProps {
  filters: VehiclesFilters;
  onSearchChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onColorChange: (value: string) => void;
  onAddClick: () => void;
}

export function VehiclesFilterBar({
  filters,
  onSearchChange,
  onTypeChange,
  onColorChange,
  onAddClick,
}: VehiclesFilterBarProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        {/* مجموعة البحث والفلاتر */}
        <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative min-w-0 flex-1 sm:max-w-md">
            <Input
              value={filters.search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="يبحث عن لوحة أو مالك..."
              className="w-full border-white/10 bg-white/5 py-3 text-white placeholder:text-white/35 focus:border-blue-500 focus:ring-blue-500/20"
            />
          </div>

          <FilterSelect
            label="النوع"
            value={filters.type}
            options={[...vehicleTypeOptions]}
            onChange={onTypeChange}
          />

          <FilterSelect
            label="اللون"
            value={filters.color}
            options={[...vehicleColorOptions]}
            onChange={onColorChange}
          />
        </div>

        {/* حاوية زر الإضافة لضمان ظهوره بشكل متناسق */}
        <div className="flex items-center justify-end">
          <Button
            type="button"
            onClick={onAddClick}
            className="w-auto shrink-0 whitespace-nowrap px-5 shadow-[0_0_24px_rgba(99,102,241,0.35)]"
          >
            + إضافة مركبة
          </Button>
        </div>
      </div>
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
    <div className="relative min-w-[150px] sm:min-w-[160px]">
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 pe-9 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#0f172a] text-white">
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