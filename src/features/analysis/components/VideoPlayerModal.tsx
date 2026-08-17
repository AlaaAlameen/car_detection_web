import { useEffect } from "react";
import type { AnalysisVideoSummary } from "../models/analysis.types";

interface VideoPlayerModalProps {
  video: AnalysisVideoSummary;
  videoUrl: string | null;
  isLoading: boolean;
  isError: boolean;
  onRetry: () => void;
  onClose: () => void;
}

export function VideoPlayerModal({
  video,
  videoUrl,
  isLoading,
  isError,
  onRetry,
  onClose,
}: VideoPlayerModalProps) {
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

        <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-black ring-1 ring-white/10">
          {isLoading ? (
            <div className="flex flex-col items-center gap-3 text-white/50">
              <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-blue-500" />
              <p className="text-sm">جاري تحميل الفيديو...</p>
            </div>
          ) : isError ? (
            <div className="flex flex-col items-center gap-3 px-4 text-center text-white/60">
              <p className="text-sm">تعذر تحميل الفيديو المعالج</p>
              <button
                type="button"
                onClick={onRetry}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 transition hover:bg-white/10"
              >
                إعادة المحاولة
              </button>
            </div>
          ) : (
            <video
              src={videoUrl ?? undefined}
              poster={video.thumbnailUrl}
              controls
              autoPlay
              className="h-full w-full"
            >
              متصفحك لا يدعم عرض الفيديو.
            </video>
          )}
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