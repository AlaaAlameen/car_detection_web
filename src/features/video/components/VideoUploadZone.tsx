import type { ChangeEvent, DragEvent, RefObject } from "react";
import { Button } from "../../auth";

interface VideoUploadZoneProps {
  isDragging: boolean;
  supportedFormats: readonly string[];
  maxSizeLabel: string;
  accept: string;
  validationError: string | null;
  fileInputRef: RefObject<HTMLInputElement | null>;
  onDragEnter: (event: DragEvent<HTMLDivElement>) => void;
  onDragLeave: (event: DragEvent<HTMLDivElement>) => void;
  onDragOver: (event: DragEvent<HTMLDivElement>) => void;
  onDrop: (event: DragEvent<HTMLDivElement>) => void;
  onBrowseClick: () => void;
  onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function VideoUploadZone({
  isDragging,
  supportedFormats,
  maxSizeLabel,
  accept,
  validationError,
  fileInputRef,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  onBrowseClick,
  onFileChange,
}: VideoUploadZoneProps) {
  return (
    <div className="flex flex-col gap-3">
      <div
        role="button"
        tabIndex={0}
        aria-label="منطقة رفع الفيديو"
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onBrowseClick();
          }
        }}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onClick={onBrowseClick}
        className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-12 text-center transition sm:py-16 ${
          isDragging
            ? "border-blue-500 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
            : "border-white/15 bg-white/[0.02] hover:border-blue-500/50 hover:bg-white/[0.04]"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          className="hidden"
          onChange={onFileChange}
          aria-hidden
        />

        <div
          className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-blue-500/25 transition ${
            isDragging ? "scale-110 bg-blue-500/20" : ""
          }`}
        >
          <CloudUploadIcon
            className={`h-8 w-8 text-blue-400 ${isDragging ? "text-blue-300" : ""}`}
          />
        </div>

        <p className="text-lg font-semibold text-white">اسحب الفيديو هنا</p>
        <p className="mt-1.5 text-sm text-white/45">
          أو اضغط لاختيار ملف من جهازك
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-white/40">الصيغ المدعومة:</span>
          {supportedFormats.map((format) => (
            <span
              key={format}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-white/70"
            >
              {format}
            </span>
          ))}
        </div>

        <p className="mt-4 text-xs text-white/35">
          الحد الأقصى لحجم الملف: {maxSizeLabel}
        </p>

        <Button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onBrowseClick();
          }}
          className="mt-6 w-auto px-6 shadow-[0_0_24px_rgba(99,102,241,0.35)]"
        >
          <FolderIcon className="h-4 w-4" />
          اختيار ملف من الجهاز
        </Button>
      </div>

      {validationError && (
        <p className="text-sm text-rose-400" role="alert">
          {validationError}
        </p>
      )}
    </div>
  );
}

function CloudUploadIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden
    >
      <path d="M12 16V8m0 0-3 3m3-3 3 3" />
      <path d="M7 16h10a4 4 0 0 0 .5-8 5.5 5.5 0 0 0-10.5 2A3.5 3.5 0 0 0 7 16Z" />
    </svg>
  );
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden
    >
      <path d="M4 8h5l2 2h9a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
    </svg>
  );
}
