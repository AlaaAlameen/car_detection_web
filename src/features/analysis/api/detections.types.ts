export interface DetectionApiItem {
  id: number;
  plate_number: string;
  violation_type: string | null;
  severity: string | null;
  message: string | null;
}

export interface DetectionsApiResponse {
  detections: DetectionApiItem[];
}
