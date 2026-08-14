import type { ReactNode } from "react";
import { Button } from "../../auth";
import type { SelectedVideoDisplay } from "../models/video.types";

interface SelectedVideoCardProps {
  video: SelectedVideoDisplay;
  onRemove: () => void;
  onStartProcessing: () => void;
  isProcessing: boolean;
  canStartProcessing: boolean;
}

export function SelectedVideoCard({
  video,
  onRemove,
  onStartProcessing,
  isProcessing,
  canStartProcessing,
}: SelectedVideoCardProps) {
  return (
    <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6">
      <p className="text-sm font-semibold text-white/90">الملف المختار</p>

      <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center">
        <img
          src={video.thumbnailUrl}
          alt={video.name}
          className="h-20 w-32 shrink-0 rounded-lg object-cover ring-1 ring-white/10"
        />

        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-white">{video.name}</p>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-white/50">
            <MetaItem icon={<FileIcon />}>{video.format}</MetaItem>
            <MetaItem icon={<SizeIcon />}>{video.formattedSize}</MetaItem>
            <MetaItem icon={<DurationIcon />}>{video.duration}</MetaItem>
          </div>
        </div>

        <button
          type="button"
          aria-label="حذف الملف المختار"
          onClick={onRemove}
          className="flex h-10 w-10 shrink-0 items-center justify-center self-start rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-400 transition hover:bg-rose-500/20 sm:self-center"
        >
          <TrashIcon />
        </button>
      </div>

      <p className="text-xs text-white/35">
        تأكد من أن الفيديو واضح وخالي من التشويش للحصول على أفضل نتائج
      </p>

      <Button
        type="button"
        onClick={onStartProcessing}
        disabled={!canStartProcessing}
        isLoading={isProcessing}
        className="w-full sm:w-auto sm:self-start sm:px-8"
      >
        <PlayIcon />
        بدء المعالجة
      </Button>
    </div>
  );
}

function MetaItem({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="text-white/35">{icon}</span>
      {children}
    </span>
  );
}

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

function SizeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M12 3v18M3 12h18" />
    </svg>
  );
}

function DurationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M4 7h16M9 7V5h6v2M8 7l1 12h6l1-12" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7L8 5Z" />
    </svg>
  );
}
