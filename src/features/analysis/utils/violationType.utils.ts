/** Known API violation_type → Arabic UI label */
const VIOLATION_TYPE_LABELS: Record<string, string> = {
  vehicle_mismatch: "اختلاف بيانات المركبة",
};

export const NO_ALERT_LABEL = "لا يوجد تنبيه";

/**
 * Maps API violation_type to a user-facing Arabic label.
 * Null/empty → "لا يوجد تنبيه".
 */
export function mapViolationTypeToLabel(
  violationType: string | null | undefined,
): string {
  if (violationType == null) return NO_ALERT_LABEL;

  const key = violationType.trim();
  if (!key) return NO_ALERT_LABEL;

  return VIOLATION_TYPE_LABELS[key] ?? VIOLATION_TYPE_LABELS[key.toLowerCase()] ?? key;
}
