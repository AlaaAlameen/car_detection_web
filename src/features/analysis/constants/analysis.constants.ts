import { NO_ALERT_LABEL } from "../utils/violationType.utils";

export const ANALYSIS_PAGE_SIZE = 8;

export const analysisQueryKeys = {
  all: ["analysis"] as const,
  detections: (videoId: number) =>
    [...analysisQueryKeys.all, "detections", videoId] as const,
  details: (detectionId: string | number) =>
    [...analysisQueryKeys.all, "detection-details", detectionId] as const,
};

export const alertTypeOptions = [
  "الكل",
  "اختلاف بيانات المركبة",
  NO_ALERT_LABEL,
] as const;

export const severityOptions = [
  "الكل",
  "عالية",
  "متوسطة",
  "منخفضة",
] as const;
