import { useEffect } from "react";
import type { AnalysisVideoSummary } from "../models/analysis.types";

interface VideoPlayerModalProps {
  video: AnalysisVideoSummary;
  onClose: () => void;
}

export function VideoPlayerModal({ video, onClose }: VideoPlayerModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="إغلاق المشغل"
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
      />

      <div className="relative z-10 flex w-full max-w-4xl flex-col gap-4 rounded-2xl border border-white/10 bg-[#0f172a] p-4 shadow-[0_0_60px_rgba(59,130,246,0.15)] sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="min-w-0 truncate text-sm font-semibold text-white/90">
            {video.fileName}
          </p>
          <button
            type="button"
            aria-label="إغلاق"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition hover:bg-white/10 hover:text-white"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="overflow-hidden rounded-xl bg-black ring-1 ring-white/10">
          <video
            src={video.videoUrl}
            poster={video.thumbnailUrl}
            controls
            autoPlay
            className="aspect-video w-full"
          >
            متصفحك لا يدعم عرض الفيديو.
          </video>
        </div>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}