import { useState } from "react";
import { Button } from "../../auth";
import type { UpdateBlacklistRequest } from "../api/blacklist.types";
import type {
  BlacklistedVehicle,
  BlacklistPriority,
  BlacklistStatus,
} from "../models/blacklist.types";
import {
  mapPriorityToSeverityLabel,
  mapStatusToArabicLabel,
} from "../utils/priority.utils";

interface EditBlacklistModalProps {
  vehicle: BlacklistedVehicle;
  isSaving: boolean;
  onSave: (payload: UpdateBlacklistRequest) => void;
  onClose: () => void;
}

const STATUS_OPTIONS: BlacklistStatus[] = ["active", "blocked", "pending", "review"];
const PRIORITY_OPTIONS: BlacklistPriority[] = ["low", "medium", "high"];

export function EditBlacklistModal({
  vehicle,
  isSaving,
  onSave,
  onClose,
}: EditBlacklistModalProps) {
  const [status, setStatus] = useState<BlacklistStatus>(vehicle.status);
  const [priority, setPriority] = useState<BlacklistPriority>(
    vehicle.priority,
  );
  const [wanted, setWanted] = useState(vehicle.wanted);

  const handleSubmit = () => {
    onSave({ status, priority, wanted });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="إغلاق"
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
      />

      <div className="relative z-10 flex w-full max-w-md flex-col gap-5 rounded-2xl border border-white/10 bg-[#0f172a] p-5 shadow-[0_0_60px_rgba(59,130,246,0.15)] sm:p-6">
        <div>
          <h2 className="text-lg font-bold text-white">
            تعديل بيانات المركبة
          </h2>
          <p className="mt-1 text-sm text-white/45">{vehicle.plateNumber}</p>
        </div>

        <div className="flex flex-col gap-4">
          <SelectField
            label="الحالة"
            value={status}
            onChange={(v) => setStatus(v as BlacklistStatus)}
            options={STATUS_OPTIONS.map((s) => ({
              value: s,
              label: mapStatusToArabicLabel(s),
            }))}
          />

          <SelectField
            label="درجة الأولوية"
            value={priority}
            onChange={(v) => setPriority(v as BlacklistPriority)}
            options={PRIORITY_OPTIONS.map((p) => ({
              value: p,
              label: mapPriorityToSeverityLabel(p),
            }))}
          />

          <SelectField
            label="مطلوب أمنيًا"
            value={wanted ? "true" : "false"}
            onChange={(v) => setWanted(v === "true")}
            options={[
              { value: "true", label: "نعم" },
              { value: "false", label: "لا" },
            ]}
          />
        </div>

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/10"
          >
            إلغاء
          </button>
          <Button
            type="button"
            onClick={handleSubmit}
            isLoading={isSaving}
            loadingLabel="جارٍ الحفظ..."
            className="w-auto px-5"
          >
            حفظ التعديلات
          </Button>
        </div>
      </div>
    </div>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-white/70">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 pe-9 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-[#0f172a] text-white"
            >
              {option.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute inset-y-0 end-3 flex items-center text-white/40">
          ▾
        </span>
      </div>
    </div>
  );
}