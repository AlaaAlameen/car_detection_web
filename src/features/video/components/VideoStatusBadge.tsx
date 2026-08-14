import type { VideoStatus } from "../models/video.types";

const statusConfig: Record<
  VideoStatus,
  { label: string; className: string }
> = {
  completed: {
    label: "مكتمل",
    className:
      "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30",
  },
  failed: {
    label: "فشل",
    className: "bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/30",
  },
  processing: {
    label: "قيد المعالجة",
    className: "bg-blue-500/15 text-blue-400 ring-1 ring-blue-500/30",
  },
};

interface VideoStatusBadgeProps {
  status: VideoStatus;
}

export function VideoStatusBadge({ status }: VideoStatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex rounded-md px-2 py-0.5 text-[11px] font-semibold ${config.className}`}
    >
      {config.label}
    </span>
  );
}
