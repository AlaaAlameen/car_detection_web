import type { ReactNode } from "react";
import { SeverityBadge } from "../../analysis";
import { MenuGlyph } from "../../dashboard";
import type { BlacklistedVehicle } from "../models/blacklist.types";

interface BlacklistTableProps {
  vehicles: BlacklistedVehicle[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onMore: (id: string) => void;
}

export function BlacklistTable({
  vehicles,
  onEdit,
  onDelete,
  onMore,
}: BlacklistTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[960px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03] text-white/50">
              <th className="px-4 py-3.5 text-start font-medium">رقم المركبة</th>
              <th className="px-4 py-3.5 text-start font-medium">اسم المالك</th>
              <th className="px-4 py-3.5 text-start font-medium">سبب الطلب</th>
              <th className="px-4 py-3.5 text-start font-medium">درجة الخطورة</th>
              <th className="px-4 py-3.5 text-start font-medium">اللون</th>
              <th className="px-4 py-3.5 text-start font-medium">النوع</th>
              <th className="px-4 py-3.5 text-start font-medium">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-12 text-center text-white/40"
                >
                  لا توجد مركبات مطابقة للبحث
                </td>
              </tr>
            ) : (
              vehicles.map((vehicle) => (
                <BlacklistTableRow
                  key={vehicle.id}
                  vehicle={vehicle}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onMore={onMore}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface BlacklistTableRowProps {
  vehicle: BlacklistedVehicle;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onMore: (id: string) => void;
}

function BlacklistTableRow({
  vehicle,
  onEdit,
  onDelete,
  onMore,
}: BlacklistTableRowProps) {
  return (
    <tr className="border-b border-white/5 transition hover:bg-white/[0.04]">
      <td className="px-4 py-3.5">
        <span className="inline-flex rounded-lg bg-gradient-to-l from-blue-600/30 to-violet-600/20 px-2.5 py-1 font-semibold tracking-wide text-blue-200 ring-1 ring-blue-500/30">
          {vehicle.plateNumber}
        </span>
      </td>
      <td className="px-4 py-3.5 text-white/80">{vehicle.ownerName}</td>
      <td className="px-4 py-3.5 text-white/65">{vehicle.reason}</td>
      <td className="px-4 py-3.5">
        <SeverityBadge severity={vehicle.severity} />
      </td>
      <td className="px-4 py-3.5">
        <span className="inline-flex items-center gap-2 text-white/75">
          <span
            className="h-3 w-3 rounded-full ring-1 ring-white/20"
            style={{ backgroundColor: vehicle.colorCode }}
          />
          {vehicle.color}
        </span>
      </td>
      <td className="px-4 py-3.5">
        <span className="inline-flex items-center gap-2 text-white/75">
          <MenuGlyph name="vehicles" className="h-4 w-4 text-white/45" />
          {vehicle.type}
        </span>
      </td>
      <td className="px-4 py-3.5">
        <div className="flex items-center gap-1.5">
          <ActionButton
            label="حذف"
            danger
            onClick={() => onDelete(vehicle.id)}
          >
            <TrashIcon />
          </ActionButton>
          <ActionButton label="تعديل" onClick={() => onEdit(vehicle.id)}>
            <EditIcon />
          </ActionButton>
          <ActionButton label="المزيد" muted onClick={() => onMore(vehicle.id)}>
            <MoreIcon />
          </ActionButton>
        </div>
      </td>
    </tr>
  );
}

function ActionButton({
  children,
  label,
  onClick,
  danger = false,
  muted = false,
}: {
  children: ReactNode;
  label: string;
  onClick: () => void;
  danger?: boolean;
  muted?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:bg-white/10 ${
        danger
          ? "text-rose-400 hover:text-rose-300"
          : muted
            ? "text-white/55 hover:text-white"
            : "text-blue-400 hover:text-blue-300"
      }`}
    >
      {children}
    </button>
  );
}

function TrashIcon() {
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

function MoreIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="currentColor"
      aria-hidden
    >
      <circle cx="12" cy="5" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="12" cy="19" r="1.6" />
    </svg>
  );
}
