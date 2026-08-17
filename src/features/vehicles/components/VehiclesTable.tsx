import type { ReactNode } from "react";
import { Checkbox } from "../../auth";
import { MenuGlyph } from "../../dashboard";
import type { Vehicle } from "../models/vehicle.types";

interface VehiclesTableProps {
  vehicles: Vehicle[];
  selectedVehicles: string[];
  allPageSelected: boolean;
  onToggleAll: () => void;
  onToggleOne: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onAddToBlacklist: (id: string) => void;
}

export function VehiclesTable({
  vehicles,
  selectedVehicles,
  allPageSelected,
  onToggleAll,
  onToggleOne,
  onEdit,
  onDelete,
  onAddToBlacklist,
}: VehiclesTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03] text-white/50">
              <th className="px-4 py-3.5 text-start font-medium">
                <Checkbox
                  checked={allPageSelected}
                  onChange={onToggleAll}
                  aria-label="تحديد الكل"
                  className="justify-center"
                />
              </th>
              <th className="px-4 py-3.5 text-start font-medium">لوحة المركبة</th>
              <th className="px-4 py-3.5 text-start font-medium">الدولة</th>
              <th className="px-4 py-3.5 text-start font-medium">اللون</th>
              <th className="px-4 py-3.5 text-start font-medium">النوع</th>
              <th className="px-4 py-3.5 text-start font-medium">الموديل</th>
              <th className="px-4 py-3.5 text-start font-medium">المالك</th>
              <th className="px-4 py-3.5 text-start font-medium">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="px-4 py-12 text-center text-white/40"
                >
                  لا توجد مركبات مطابقة للبحث
                </td>
              </tr>
            ) : (
              vehicles.map((vehicle) => {
                const selected = selectedVehicles.includes(vehicle.id);
                return (
                  <tr
                    key={vehicle.id}
                    className="border-b border-white/5 transition hover:bg-white/[0.04]"
                  >
                    <td className="px-4 py-3.5">
                      <Checkbox
                        checked={selected}
                        onChange={() => onToggleOne(vehicle.id)}
                        aria-label={`تحديد ${vehicle.plateNumber}`}
                      />
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex rounded-lg bg-gradient-to-l from-blue-600/30 to-violet-600/20 px-2.5 py-1 font-semibold tracking-wide text-blue-200 ring-1 ring-blue-500/30">
                        {vehicle.plateNumber}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center gap-2 text-white/80">
                        <span className="text-base leading-none">
                          {vehicle.country.flag}
                        </span>
                        <span className="font-medium">
                          {vehicle.country.code}
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center gap-2 text-white/75">
                        <span
                          className="h-3 w-3 rounded-full ring-1 ring-white/20"
                          style={{ backgroundColor: vehicle.colorHex }}
                        />
                        {vehicle.color}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center gap-2 text-white/75">
                        <MenuGlyph
                          name="vehicles"
                          className="h-4 w-4 text-white/45"
                        />
                        {vehicle.type}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-white/70">
                      {vehicle.model}
                    </td>
                    <td className="px-4 py-3.5 text-white/80">
                      {vehicle.ownerName}
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <ActionButton
                          label="تعديل"
                          onClick={() => onEdit(vehicle.id)}
                        >
                          <EditIcon />
                        </ActionButton>
                        <ActionButton
                          label="حذف"
                          onClick={() => onDelete(vehicle.id)}
                          danger
                        >
                          <DeleteIcon />
                        </ActionButton>
                        {/* <ActionButton label="المزيد">
                          <MoreIcon />
                        </ActionButton> */}
                        <ActionButton
                            label={
                              vehicle.isBlacklisted
                                ? "مضافة أصلًا للقائمة السوداء"
                                : "إضافة للقائمة السوداء"
                            }
                            onClick={() => onAddToBlacklist(vehicle.id)}
                            disabled={vehicle.isBlacklisted}
                            warn
                          >
                            <BlacklistFlagIcon />
                          </ActionButton>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ActionButton({
  children,
  label,
  onClick,
  danger = false,
  warn = false,
  disabled = false,
}: {
  children: ReactNode;
  label: string;
  onClick?: () => void;
  danger?: boolean;
  warn?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      className={`flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white/5 ${
        danger
          ? "text-rose-400 hover:text-rose-300"
          : warn
            ? "text-amber-400 hover:text-amber-300"
            : "text-white/55 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

function EditIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0-3-3L5 17v3Z" />
      <path d="M13 6.5l3 3" />
    </svg>
  );
}

function DeleteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M4 7h16M9 7V5h6v2M8 7l1 12h6l1-12" />
    </svg>
  );
}
function BlacklistFlagIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M5 3v18" />
      <path d="M5 4h12l-2.5 4L17 12H5" />
    </svg>
  );
}

// function MoreIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       className="h-3.5 w-3.5"
//       fill="currentColor"
//       aria-hidden
//     >
//       <circle cx="12" cy="5" r="1.6" />
//       <circle cx="12" cy="12" r="1.6" />
//       <circle cx="12" cy="19" r="1.6" />
//     </svg>
//   );
// }
