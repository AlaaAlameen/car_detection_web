import type { VideoApiItem } from "../api/videos.types";
import type { VideoFile } from "../models/video.types";
import { formatDuration } from "./formatDuration";

export const DEFAULT_VIDEO_THUMBNAIL =
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=160&h=100&fit=crop";

export function mapVideoApiToUi(item: VideoApiItem): VideoFile {
  const extension = item.name.split(".").pop()?.toUpperCase() ?? "MP4";

  return {
    id: String(item.id),
    name: item.name,
    size: 0,
    formattedSize: "—",
    duration: formatDuration(item.duration),
    format: extension,
    thumbnailUrl: DEFAULT_VIDEO_THUMBNAIL,
    uploadedAt: item.uploaded_at,
    status: item.status,
  };
}
