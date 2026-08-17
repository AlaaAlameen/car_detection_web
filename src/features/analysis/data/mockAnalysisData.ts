import type {
  AnalysisAlert,
  AnalysisStat,
  AnalysisVideoSummary,
} from "../models/analysis.types";

/**
 * Legacy mock seed kept only for VehicleDetails (still mock-driven).
 * Analysis Results page uses live API data.
 */
export const mockAnalysisVideo: AnalysisVideoSummary = {
  id: "av1",
  fileName: "traffic_video_2026_08_10.mp4",
  thumbnailUrl:
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=250&fit=crop",
  videoUrl:
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  processedAt: "2026-08-10 14:35",
  duration: "03:15",
  formattedSize: "178 MB",
  status: "completed",
};

export const mockAnalysisStats: AnalysisStat[] = [];

export const mockAnalysisAlerts: AnalysisAlert[] = [];
