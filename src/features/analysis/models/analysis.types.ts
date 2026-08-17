export type AlertSeverity = "عالية" | "متوسطة" | "منخفضة";

export type AlertType =
  | "مطلوب"
  | "سرعة زائدة"
  | "لوحة مزورة"
  | "سلوك مشبوه"
  | "قائمة سوداء"
  | "اختلاف بيانات المركبة"
  | "لا يوجد تنبيه"
  | string;

export interface AnalysisVideoSummary {
  id: string;
  fileName: string;
  thumbnailUrl: string;
  processedAt: string;
  duration: string;
  formattedSize: string;
  status: "completed" | "failed" | "processing";
}

export interface AnalysisStat {
  id: string;
  title: string;
  value: number;
  percent: number;
  subtitle: string;
  icon: "vehicles" | "alerts" | "wanted" | "scans" | "units";
  gradient: string;
  isPositive: boolean;
}

export interface AnalysisAlert {
  id: string;
  plateNumber: string;
  alertType: string;
  severity: AlertSeverity | null;
  message: string;
  timestamp: string;
  // original API violation_type to control navigation and UI state
  violationType?: string | null;
}

export interface AnalysisFilters {
  search: string;
  alertType: string;
  severity: string;
}
