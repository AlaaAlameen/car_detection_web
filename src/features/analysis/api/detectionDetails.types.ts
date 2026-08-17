export interface DetectionComparisonField {
  ai: string;
  confidence: number;
  actual: string;
  mismatch: boolean;
}

export interface DetectionDetails {
  id: number;
  vehicle_image_url: string;
  comparison: {
    plate: DetectionComparisonField;
    model: DetectionComparisonField;
    type: DetectionComparisonField;
    color: DetectionComparisonField;
  };
  risk_score: number;
  severity: string | null;
  violation_type: string | null;
  message: string | null;
}

export interface DetectionDetailsResponse {
  detection: DetectionDetails;
}
