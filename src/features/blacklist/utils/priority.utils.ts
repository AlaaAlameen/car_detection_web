import type {
  BlacklistPriority,
  BlacklistPriorityApiValue,
  BlacklistSeverityLabel,
  BlacklistStatus,
} from "../models/blacklist.types";

const PRIORITY_LABEL_MAP: Record<BlacklistPriority, BlacklistSeverityLabel> = {
  high: "عالية",
  medium: "متوسطة",
  low: "منخفضة",
};

const STATUS_LABEL_MAP: Record<BlacklistStatus, string> = {
  active: "نشط",
  review: "قيد المراجعة",
  blocked: "محظور",
  pending: "قيد الانتظار",
};
export function mapPriorityToSeverityLabel(
  priority: BlacklistPriority,
): BlacklistSeverityLabel {
  return PRIORITY_LABEL_MAP[priority] ?? "متوسطة";
}

export function mapStatusToArabicLabel(status: BlacklistStatus): string {
  return STATUS_LABEL_MAP[status] ?? status;
}

export function mapWantedStatusToReason(
  wanted: boolean,
  status: BlacklistStatus,
): string {
  if (wanted) {
    return "مطلوب";
  }
  return mapStatusToArabicLabel(status);
}
const PRIORITY_API_VALUE_MAP: Record<BlacklistPriority, BlacklistPriorityApiValue> = {
  high: "عالي",
  medium: "متوسط",
  low: "منخفض",
};

export function mapPriorityToApiValue(
  priority: BlacklistPriority,
): BlacklistPriorityApiValue {
  return PRIORITY_API_VALUE_MAP[priority] ?? "متوسط";
}

const PRIORITY_FROM_API_VALUE_MAP: Record<BlacklistPriorityApiValue, BlacklistPriority> = {
  "عالي": "high",
  "متوسط": "medium",
  "منخفض": "low",
};

export function mapApiValueToPriority(
  value: BlacklistPriorityApiValue,
): BlacklistPriority {
  return PRIORITY_FROM_API_VALUE_MAP[value] ?? "medium";
}