import type { AnalysisAlert, AnalysisStat } from "../models/analysis.types";

function percentOf(part: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((part / total) * 1000) / 10;
}

/**
 * Derive analysis statistics cards from detections (UI alerts).
 */
export function buildAnalysisStats(alerts: AnalysisAlert[]): AnalysisStat[] {
  const total = alerts.length;
  const withAlerts = alerts.filter(
    (alert) => alert.alertType !== "لا يوجد تنبيه",
  ).length;
  const high = alerts.filter((alert) => alert.severity === "عالية").length;
  const medium = alerts.filter((alert) => alert.severity === "متوسطة").length;
  const low = alerts.filter((alert) => alert.severity === "منخفضة").length;

  return [
    {
      id: "total",
      title: "إجمالي السيارات المكتشفة",
      value: total,
      percent: total > 0 ? 100 : 0,
      subtitle: "خلال مدة الفيديو",
      icon: "vehicles",
      gradient: "from-blue-600/40 to-indigo-700/30",
      isPositive: true,
    },
    {
      id: "alerts",
      title: "سيارات لديها تنبيهات",
      value: withAlerts,
      percent: percentOf(withAlerts, total),
      subtitle: "من إجمالي المكتشف",
      icon: "alerts",
      gradient: "from-violet-600/40 to-purple-700/30",
      isPositive: false,
    },
    {
      id: "high",
      title: "سيارات عالية الخطورة",
      value: high,
      percent: percentOf(high, total),
      subtitle: "تتطلب تدخل فوري",
      icon: "wanted",
      gradient: "from-rose-600/40 to-orange-700/30",
      isPositive: false,
    },
    {
      id: "medium",
      title: "سيارات متوسطة الخطورة",
      value: medium,
      percent: percentOf(medium, total),
      subtitle: "تحتاج متابعة",
      icon: "scans",
      gradient: "from-amber-600/40 to-yellow-700/30",
      isPositive: false,
    },
    {
      id: "low",
      title: "سيارات منخفضة الخطورة",
      value: low,
      percent: percentOf(low, total),
      subtitle: "مراقبة روتينية",
      icon: "units",
      gradient: "from-emerald-600/40 to-teal-700/30",
      isPositive: true,
    },
  ];
}
