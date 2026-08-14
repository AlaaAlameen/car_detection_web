import type { AlertSeverity, AlertType } from "./analysis.types";

export interface ComparisonRow {
  property: string;
  propertyLabel: string;
  aiValue: string;
  actualValue: string;
  confidence: number;
  mismatch: boolean;
}

export interface VehicleDetails {
  id: string;
  plateNumber: string;
  imageUrl: string;
  severity: AlertSeverity;
  score: number;
  alertType: AlertType | string;
  alertMessage: string;
  comparisonRows: ComparisonRow[];
}

export interface FormattedComparisonRow extends ComparisonRow {
  confidenceLabel: string;
  mismatchLabel: string;
}

export interface VehicleDetailsSummaryCard {
  id: string;
  title: string;
  value: string;
}
