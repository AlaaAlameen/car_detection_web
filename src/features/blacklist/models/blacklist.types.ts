export type BlacklistSeverity = "عالية" | "متوسطة" | "منخفضة";

export type BlacklistVehicleType =
  | "سيدان"
  | "دفع رباعي"
  | "هاتشباك"
  | "بيك أب"
  | "شاحنة";

export type BlacklistVehicleColor =
  | "أبيض"
  | "أسود"
  | "أحمر"
  | "أزرق"
  | "رمادي"
  | "فضي";

export interface BlacklistedVehicle {
  id: string;
  plateNumber: string;
  ownerName: string;
  reason: string;
  severity: BlacklistSeverity;
  color: BlacklistVehicleColor;
  colorCode: string;
  type: BlacklistVehicleType;
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
