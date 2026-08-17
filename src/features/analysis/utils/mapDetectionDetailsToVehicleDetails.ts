import type { DetectionDetailsResponse } from "../api/detectionDetails.types";
import type { VehicleDetails, ComparisonRow } from "../models/vehicleDetails.types";
import { mapDetectionSeverity } from "./severity.utils";
import { mapViolationTypeToLabel } from "./violationType.utils";
import { formatConfidencePercent } from "./confidence.utils";

export function mapDetectionDetailsResponseToVehicleDetails(
  resp: DetectionDetailsResponse,
): VehicleDetails {
  const d = resp.detection;

  const comparisonRows: ComparisonRow[] = [
    {
      property: "plate",
      propertyLabel: "رقم اللوحة",
      aiValue: d.comparison.plate.ai,
      actualValue: d.comparison.plate.actual,
      confidence: Math.round(d.comparison.plate.confidence * 100),
      mismatch: d.comparison.plate.mismatch,
    },
    {
      property: "model",
      propertyLabel: "الموديل",
      aiValue: d.comparison.model.ai,
      actualValue: d.comparison.model.actual,
      confidence: Math.round(d.comparison.model.confidence * 100),
      mismatch: d.comparison.model.mismatch,
    },
    {
      property: "type",
      propertyLabel: "النوع",
      aiValue: d.comparison.type.ai,
      actualValue: d.comparison.type.actual,
      confidence: Math.round(d.comparison.type.confidence * 100),
      mismatch: d.comparison.type.mismatch,
    },
    {
      property: "color",
      propertyLabel: "اللون",
      aiValue: d.comparison.color.ai,
      actualValue: d.comparison.color.actual,
      confidence: Math.round(d.comparison.color.confidence * 100),
      mismatch: d.comparison.color.mismatch,
    },
  ];

  const vehicle: VehicleDetails = {
    id: String(d.id),
    plateNumber: d.comparison.plate.ai,
    imageUrl: d.vehicle_image_url,
    severity: mapDetectionSeverity(d.severity),
    score: Math.round(d.risk_score),
    alertType: mapViolationTypeToLabel(d.violation_type),
    alertMessage: d.message ?? "—",
    comparisonRows,
  };

  return vehicle;
}
