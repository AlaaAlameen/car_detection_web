import type { ReactNode } from "react";
import type { AnalysisAlert } from "../models/analysis.types";
import { SeverityBadge } from "./SeverityBadge";

interface AnalysisAlertsTableProps {
  alerts: AnalysisAlert[];
  pageStartIndex: number;
  onRowClick: (id: string) => void;
  onView: (id: string) => void;
  onPlay: (id: string) => void;
  onMore: (id: string) => void;
}

export function AnalysisAlertsTable({
  alerts,
  pageStartIndex,
  onRowClick,
  onView,
  onPlay,
  onMore,
}: AnalysisAlertsTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03] text-white/50">
              <th className="px-4 py-3.5 text-start font-medium">#</th>
              <th className="px-4 py-3.5 text-start font-medium">رقم اللوحة</th>
              <th className="px-4 py-3.5 text-start font-medium">نوع التنبيه</th>
              <th className="px-4 py-3.5 text-start font-medium">درجة الخطورة</th>
              <th className="px-4 py-3.5 text-start font-medium">الرسالة</th>
              <th className="px-4 py-3.5 text-start font-medium">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {alerts.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-12 text-center text-white/40"
                >
                  لا توجد تنبيهات مطابقة للبحث
                </td>
              </tr>
            ) : (
              alerts.map((alert, index) => (
                <tr
                  key={alert.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => onRowClick(alert.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      onRowClick(alert.id);
                    }
                  }}
                  className="cursor-pointer border-b border-white/5 transition hover:bg-white/[0.04]"
                >
                  <td className="px-4 py-3.5 text-white/45">
                    {pageStartIndex + index}
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="inline-flex rounded-lg bg-gradient-to-l from-blue-600/30 to-violet-600/20 px-2.5 py-1 font-semibold tracking-wide text-blue-200 ring-1 ring-blue-500/30">
                      {alert.plateNumber}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-white/75">
                    {alert.alertType}
                  </td>
                  <td className="px-4 py-3.5">
                    <SeverityBadge severity={alert.severity} />
                  </td>
                  <td className="max-w-xs px-4 py-3.5 text-white/60">
                    <span className="line-clamp-2">{alert.message}</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <div
                      className="flex items-center gap-1.5"
                      onClick={(event) => event.stopPropagation()}
                      onKeyDown={(event) => event.stopPropagation()}
                    >
                      <ActionButton
                        label="عرض"
                        onClick={() => onView(alert.id)}
                      >
                        <EyeIcon />
                      </ActionButton>
                      <ActionButton
                        label="تشغيل المقطع"
                        onClick={() => onPlay(alert.id)}
                      >
                        <PlayIcon />
                      </ActionButton>
                      <ActionButton
                        label="المزيد"
                        onClick={() => onMore(alert.id)}
                      >
                        <MoreIcon />
                      </ActionButton>
                    </div>
                  </td>
                </tr>
              ))
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
}: {
  children: ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/55 transition hover:bg-white/10 hover:text-white"
    >
      {children}
    </button>
  );
}

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 5v14l11-7L8 5Z" />
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
