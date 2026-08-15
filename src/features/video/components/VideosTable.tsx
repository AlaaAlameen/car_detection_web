import type { ReactNode } from "react";
import type { VideoFile } from "../models/video.types";
import { VideoStatusBadge } from "./VideoStatusBadge";

interface VideosTableProps {
  videos: VideoFile[];
  onPreview: (id: string) => void;
  onPlay: (id: string) => void;
  onMore: (id: string) => void;
}

export function VideosTable({
  videos,
  onPreview,
  onPlay,
  onMore,
}: VideosTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03] text-white/50">
              <th className="px-4 py-3.5 text-start font-medium">
                اسم الفيديو
              </th>
              <th className="px-4 py-3.5 text-start font-medium">
                تاريخ الرفع
              </th>
              <th className="px-4 py-3.5 text-start font-medium">المدة</th>
              <th className="px-4 py-3.5 text-start font-medium">الحجم</th>
              <th className="px-4 py-3.5 text-start font-medium">الحالة</th>
              <th className="px-4 py-3.5 text-start font-medium">
                الإجراءات
              </th>
            </tr>
          </thead>
          <tbody>
            {videos.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-12 text-center text-white/40"
                >
                  لا توجد فيديوهات مطابقة للبحث
                </td>
              </tr>
            ) : (
              videos.map((video) => (
                <tr
                  key={video.id}
                  className="border-b border-white/5 transition hover:bg-white/[0.04]"
                >
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <img
                        src={video.thumbnailUrl}
                        alt=""
                        className="h-10 w-14 shrink-0 rounded-md object-cover ring-1 ring-white/10"
                      />
                      <span className="font-medium text-white/90">
                        {video.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-white/60">
                    {video.uploadedAt}
                  </td>
                  <td className="px-4 py-3.5 text-white/60">
                    {video.duration}
                  </td>
                  <td className="px-4 py-3.5 text-white/60">
                    {video.formattedSize}
                  </td>
                  <td className="px-4 py-3.5">
                    <VideoStatusBadge status={video.status} />
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-1.5">
                      <ActionButton
                        label="معاينة"
                        onClick={() => onPreview(video.id)}
                      >
                        <EyeIcon />
                      </ActionButton>
                      <ActionButton
                        label="تشغيل"
                        onClick={() => onPlay(video.id)}
                      >
                        <PlayIcon />
                      </ActionButton>
                      <ActionButton
                        label="المزيد"
                        onClick={() => onMore(video.id)}
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
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7L8 5Z" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
      <circle cx="12" cy="5" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="12" cy="19" r="1.6" />
    </svg>
  );
}