import { Button } from "../../auth";
import { VideoStatusBadge } from "../../video";
import type { AnalysisVideoSummary } from "../models/analysis.types";

interface VideoSummaryCardProps {
  video: AnalysisVideoSummary;
  onViewProcessed: () => void;
}

export function VideoSummaryCard({
  video,
  onViewProcessed,
}: VideoSummaryCardProps) {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-48">
          <img
            src={video.thumbnailUrl}
            alt={video.fileName}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/35">
            <button
              type="button"
              aria-label="تشغيل الفيديو"
              onClick={onViewProcessed}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/90 text-white shadow-[0_0_24px_rgba(59,130,246,0.45)] transition hover:bg-blue-500"
            >
              <PlayIcon />
            </button>
          </div>
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="truncate text-base font-semibold text-white">
              {video.fileName}
            </p>
            <VideoStatusBadge status={video.status} />
          </div>

          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/50">
            <MetaItem label="تاريخ المعالجة" value={video.processedAt} />
            <MetaItem label="المدة" value={video.duration} />
            <MetaItem label="الحجم" value={video.formattedSize} />
          </div>
        </div>
      </div>

      <Button
        type="button"
        onClick={onViewProcessed}
        className="w-full shrink-0 sm:w-auto sm:px-6"
      >
        <PlayIcon className="h-4 w-4" />
        عرض الفيديو المعالج
      </Button>
    </div>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <span>
      <span className="text-white/35">{label}: </span>
      <span className="text-white/70">{value}</span>
    </span>
  );
}

function PlayIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 5v14l11-7L8 5Z" />
    </svg>
  );
}
