import type { VideoFile } from "../models/video.types";

export const DEFAULT_VIDEO_THUMBNAIL =
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=160&h=100&fit=crop";

export const mockRecentVideos: VideoFile[] = [
  {
    id: "rv1",
    name: "traffic_video_2026_08_10.mp4",
    size: 186646528,
    formattedSize: "178 MB",
    duration: "03:15",
    format: "MP4",
    thumbnailUrl: DEFAULT_VIDEO_THUMBNAIL,
    uploadedAt: "2026-08-10 14:22",
    status: "completed",
  },
  {
    id: "rv2",
    name: "traffic_video_2026_08_09.mp4",
    size: 327155712,
    formattedSize: "312 MB",
    duration: "06:40",
    format: "MP4",
    thumbnailUrl: DEFAULT_VIDEO_THUMBNAIL,
    uploadedAt: "2026-08-09 11:05",
    status: "completed",
  },
  {
    id: "rv3",
    name: "traffic_video_2026_08_07.mp4",
    size: 117440512,
    formattedSize: "112 MB",
    duration: "02:18",
    format: "MP4",
    thumbnailUrl: DEFAULT_VIDEO_THUMBNAIL,
    uploadedAt: "2026-08-07 09:47",
    status: "failed",
  },
];
