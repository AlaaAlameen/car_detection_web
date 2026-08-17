import type { AlertSeverity } from "../models/analysis.types";

/**
 * Maps API severity (Arabic or English) to UI AlertSeverity.
 * Returns null when severity is missing/unknown.
 */
export function mapDetectionSeverity(
  raw: string | null | undefined,
): AlertSeverity | null {
  if (raw == null) return null;

  const value = raw.trim();
  if (!value) return null;

  const normalized = value.toLowerCase();

  const map: Record<string, AlertSeverity> = {
    high: "عالية",
    medium: "متوسطة",
    low: "منخفضة",
    عالي: "عالية",
    عالية: "عالية",
    متوسط: "متوسطة",
    متوسطة: "متوسطة",
    منخفض: "منخفضة",
    منخفضة: "منخفضة",
  };

  return map[normalized] ?? map[value] ?? null;
}
