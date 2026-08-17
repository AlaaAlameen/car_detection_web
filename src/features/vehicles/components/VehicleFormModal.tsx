import { useState, type ReactNode } from "react";
import { Button, Input } from "../../auth";
import type { CreateVehicleRequest } from "../api/vehicles.types";
import type { Vehicle } from "../models/vehicle.types";
import { VEHICLE_TYPE_OPTIONS } from "../../video/models/video.types";
import { VEHICLE_COLOR_OPTIONS } from "../utils/color.utils";
import { VEHICLE_COUNTRY_OPTIONS } from "../utils/country.utils";

interface VehicleFormModalProps {
  mode: "create" | "edit";
  vehicle?: Vehicle;
  isSaving: boolean;
  onSave: (payload: CreateVehicleRequest) => void;
  onClose: () => void;
}

export function VehicleFormModal({
  mode,
  vehicle,
  isSaving,
  onSave,
  onClose,
}: VehicleFormModalProps) {
  const [plateNumber, setPlateNumber] = useState(vehicle?.plateNumber ?? "");
  const [ownerName, setOwnerName] = useState(vehicle?.ownerName ?? "");
  const [model, setModel] = useState(vehicle?.model ?? "");
  const [countryCode, setCountryCode] = useState(
    vehicle?.country.code ?? VEHICLE_COUNTRY_OPTIONS[0].code,
  );
  const [type, setType] = useState(vehicle?.type ?? VEHICLE_TYPE_OPTIONS[0]);
  const [color, setColor] = useState(
    vehicle?.color ?? VEHICLE_COLOR_OPTIONS[0],
  );

  const isFormValid =
    plateNumber.trim().length > 0 &&
    ownerName.trim().length > 0 &&
    model.trim().length > 0;

  const handleSubmit = () => {
    if (!isFormValid) return;
    onSave({
      plate_number: plateNumber.trim(),
      owner_name: ownerName.trim(),
      model: model.trim(),
      country_code: countryCode,
      type,
      color,
    });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="إغلاق"
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
      />

      <div className="relative z-10 flex w-full max-w-lg flex-col gap-5 rounded-2xl border border-white/10 bg-[#0f172a] p-5 shadow-[0_0_60px_rgba(59,130,246,0.15)] sm:p-6">
        <h2 className="text-lg font-bold text-white">
          {mode === "create" ? "إضافة مركبة جديدة" : "تعديل بيانات المركبة"}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="رقم اللوحة">
            <Input
              value={plateNumber}
              onChange={(e) => setPlateNumber(e.target.value)}
              placeholder="مثال: ABC 1234"
              className="border-white/10 bg-white/5 text-white placeholder:text-white/35 focus:border-blue-500 focus:ring-blue-500/20"
            />
          </Field>

          <Field label="اسم المالك">
            <Input
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              placeholder="اسم مالك المركبة"
              className="border-white/10 bg-white/5 text-white placeholder:text-white/35 focus:border-blue-500 focus:ring-blue-500/20"
            />
          </Field>

          <Field label="الموديل">
            <Input
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="مثال: كامري 2023"
              className="border-white/10 bg-white/5 text-white placeholder:text-white/35 focus:border-blue-500 focus:ring-blue-500/20"
            />
          </Field>

          <Field label="الدولة">
            <SelectField
              value={countryCode}
              onChange={setCountryCode}
              options={VEHICLE_COUNTRY_OPTIONS.map((c) => ({
                value: c.code,
                label: `${c.flag} ${c.name}`,
              }))}
            />
          </Field>

          <Field label="النوع">
            <SelectField
              value={type}
              onChange={setType}
              options={VEHICLE_TYPE_OPTIONS.map((t) => ({
                value: t,
                label: t,
              }))}
            />
          </Field>

          <Field label="اللون">
            <SelectField
              value={color}
              onChange={setColor}
              options={VEHICLE_COLOR_OPTIONS.map((c) => ({
                value: c,
                label: c,
              }))}
            />
          </Field>
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
            disabled={!isFormValid}
            className="w-auto px-5"
          >
            {mode === "create" ? "إضافة المركبة" : "حفظ التعديلات"}
          </Button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-white/70">{label}</label>
      {children}
    </div>
  );
}

function SelectField({
  value,
  options,
  onChange,
}: {
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
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
  );
}