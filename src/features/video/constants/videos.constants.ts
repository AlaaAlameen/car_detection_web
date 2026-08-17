import type { VideoStatus } from "../models/video.types";

export const VIDEOS_PAGE_SIZE = 8;

export const videoStatusOptions = [
  "الكل",
  "مكتمل",
  "قيد المعالجة",
  "فشل",
] as const;

export const statusLabelToKey: Record<string, VideoStatus> = {
  مكتمل: "completed",
  "قيد المعالجة": "processing",
  فشل: "failed",
};

export const videosQueryKeys = {
  all: ["videos"] as const,
  list: () => [...videosQueryKeys.all, "list"] as const,
  recent: () => [...videosQueryKeys.all, "recent"] as const,
  processed: (videoId: number) =>
    [...videosQueryKeys.all, "processed", videoId] as const,
};