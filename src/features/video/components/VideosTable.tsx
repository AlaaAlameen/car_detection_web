import type { VideoFile } from "../models/video.types";
import { VideoStatusBadge } from "./VideoStatusBadge";

interface VideosTableProps {
  videos: VideoFile[];
  onRowClick: (id: string) => void;
}

export function VideosTable({ videos, onRowClick }: VideosTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse text-sm">
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
            </tr>
          </thead>
          <tbody>
            {videos.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-12 text-center text-white/40"
                >
                  لا توجد فيديوهات مطابقة للبحث
                </td>
              </tr>
            ) : (
              videos.map((video) => (
                <tr
                  key={video.id}
                  onClick={() => onRowClick(video.id)}
                  className="cursor-pointer border-b border-white/5 transition hover:bg-white/[0.04]"
                >
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      {video.thumbnailUrl ? (
                        <img
                          src={video.thumbnailUrl}
                          alt=""
                          className="h-10 w-14 shrink-0 rounded-md object-cover ring-1 ring-white/10"
                        />
                      ) : (
                        <div className="h-10 w-14 shrink-0 rounded-md bg-white/10 ring-1 ring-white/10" />
                      )}
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
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}