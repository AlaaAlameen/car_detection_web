import { Button, Input } from "../../auth";
import {
  blacklistColorOptions,
  blacklistSeverityOptions,
  blacklistTypeOptions,
} from "../data/mockBlacklistData";
import type { BlacklistFilters } from "../models/blacklist.types";

interface BlacklistFiltersProps {
  filters: BlacklistFilters;
  onSearchChange: (value: string) => void;
  onSeverityChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onColorChange: (value: string) => void;
  onReset: () => void; // يمكنك إبقاؤها في الـ Interface حتى لا تتأثر المكونات الأب (Parent Components)
  onExport: () => void; // نفس الأمر هنا
  onAddClick: () => void;
}

export function BlacklistFiltersBar({
  filters,
  onSearchChange,
  onSeverityChange,
  onTypeChange,
  onColorChange,
  onAddClick,
}: BlacklistFiltersProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative min-w-0 flex-1 sm:max-w-sm">
            <span className="pointer-events-none absolute inset-y-0 start-3 flex items-center text-white/35">
              <SearchIcon />
            </span>
            <Input
              value={filters.search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="بحث برقم المركبة أو اسم المالك..."
              className="border-white/10 bg-white/5 ps-10 text-white placeholder:text-white/35 focus:border-blue-500 focus:ring-blue-500/20"
            />
          </div>

          <FilterSelect
            label="كل درجات الخطورة"
            value={filters.severity}
            options={[...blacklistSeverityOptions]}
            onChange={onSeverityChange}
          />

          <FilterSelect
            label="كل الأنواع"
            value={filters.type}
            options={[...blacklistTypeOptions]}
            onChange={onTypeChange}
          />

          <FilterSelect
            label="كل الألوان"
            value={filters.color}
            options={[...blacklistColorOptions]}
            onChange={onColorChange}
          />
        </div>

        {/* الحفاظ على حاوية الأزرار لضمان بقاء زر الإضافة في مكانه الصحيح عبر استخدام justify-end */}
        <div className="flex flex-wrap items-center justify-end gap-2">
          <Button
            type="button"
            onClick={onAddClick}
            className="w-auto shrink-0 whitespace-nowrap px-5 shadow-[0_0_24px_rgba(99,102,241,0.35)]"
          >
            <PlusIcon />
            إضافة إلى القائمة السوداء
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
    <div className="relative min-w-[150px]">
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

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}