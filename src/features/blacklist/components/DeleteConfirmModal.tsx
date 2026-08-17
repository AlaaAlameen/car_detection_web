import type { BlacklistedVehicle } from "../models/blacklist.types";

interface DeleteConfirmModalProps {
  vehicle: BlacklistedVehicle;
  isDeleting: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

export function DeleteConfirmModal({
  vehicle,
  isDeleting,
  onConfirm,
  onClose,
}: DeleteConfirmModalProps) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="إغلاق"
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
      />

      <div className="relative z-10 flex w-full max-w-sm flex-col gap-5 rounded-2xl border border-white/10 bg-[#0f172a] p-5 shadow-[0_0_60px_rgba(244,63,94,0.15)] sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/30">
            <WarningIcon />
          </div>
          <div>
            <h2 className="text-base font-bold text-white">تأكيد الحذف</h2>
            <p className="mt-0.5 text-sm text-white/50">
              لا يمكن التراجع عن هذا الإجراء
            </p>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-white/70">
          هل أنت متأكد من حذف المركبة{" "}
          <span className="font-semibold text-white">
            {vehicle.plateNumber}
          </span>{" "}
          من القائمة السوداء؟
        </p>

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/10"
          >
            إلغاء
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isDeleting}
            className="flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isDeleting ? "جارٍ الحذف..." : "حذف نهائيًا"}
          </button>
        </div>
      </div>
    </div>
  );
}

function WarningIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M12 9v4M12 17h.01" />
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
    </svg>
  );
}