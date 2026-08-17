import type { DetectionApiItem } from "../api/detections.types";
import type { AnalysisAlert } from "../models/analysis.types";
import { mapDetectionSeverity } from "./severity.utils";
import { mapViolationTypeToLabel } from "./violationType.utils";

const EMPTY_FALLBACK = "—";

export function mapDetectionApiToUi(item: DetectionApiItem): AnalysisAlert {
  const message =
    item.message != null && item.message.trim().length > 0
      ? item.message.trim()
      : EMPTY_FALLBACK;

  return {
    id: String(item.id),
    plateNumber: item.plate_number?.trim() || EMPTY_FALLBACK,
    alertType: mapViolationTypeToLabel(item.violation_type),
    severity: mapDetectionSeverity(item.severity),
    message,
    timestamp: EMPTY_FALLBACK,
    // keep original violation_type for navigation/logic
    violationType: item.violation_type ?? null,
  };
}
