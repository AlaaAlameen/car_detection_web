import { DEFAULT_VIDEO_THUMBNAIL } from "../../video/utils/mapVideoApiToUi";
import type { VideoFile } from "../../video/models/video.types";
import type { AnalysisVideoSummary } from "../models/analysis.types";

export function mapVideoFileToAnalysisSummary(
  video: VideoFile,
): AnalysisVideoSummary {
  return {
    id: video.id,
    fileName: video.name,
    thumbnailUrl: video.thumbnailUrl ?? DEFAULT_VIDEO_THUMBNAIL,
    processedAt: video.uploadedAt,
    duration: video.duration,
    formattedSize: video.formattedSize,
    status: video.status,
  };
}

/** Prefer newest completed video (list order from API is newest-first). */
export function findLatestCompletedVideo(
  videos: VideoFile[],
): VideoFile | undefined {
  return videos.find((video) => video.status === "completed");
}
