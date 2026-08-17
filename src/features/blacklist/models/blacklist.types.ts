export type BlacklistPriority = "high" | "medium" | "low";
export type BlacklistPriorityApiValue = "عالي" | "متوسط" | "منخفض";

export type BlacklistStatus = "active" | "blocked"| "pending"|"review";

export type BlacklistSeverityLabel = "عالية" | "متوسطة" | "منخفضة";

/** Presentation model used by Blacklist UI components. */
export interface BlacklistedVehicle {
  id: string;
  plateNumber: string;
  ownerName: string;
  /** Display label for the existing "سبب الطلب" column (derived from wanted/status). */
  reason: string;
  severity: BlacklistSeverityLabel;
  priority: BlacklistPriority;
  status: BlacklistStatus;
  wanted: boolean;
  color: string;
  colorCode: string;
  type: string;
  createdAt: string;
}

export interface BlacklistFilters {
  search: string;
  severity: string;
  type: string;
  color: string;
}

export interface BlacklistStat {
  id: string;
  title: string;
  value: number;
  subtitle: string;
  changePercent: number;
  icon: "blacklist" | "wanted" | "scans" | "units";
  gradient: string;
  isPositive: boolean;
}

export const BLACKLIST_DEFAULT_PAGE_SIZE = 7;

export const blacklistPageSizeOptions = [7, 10, 25] as const;

export const blacklistQueryKeys = {
  all: ["blacklist"] as const,
  list: () => [...blacklistQueryKeys.all, "list"] as const,
};
