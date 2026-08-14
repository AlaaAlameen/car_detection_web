export type VehicleType = "سيدان" | "دفع رباعي" | "شاحنة" | "رياضية" | "فان";

export type VehicleColor =
  | "أبيض"
  | "أسود"
  | "فضي"
  | "أزرق"
  | "أحمر"
  | "رمادي";

export interface VehicleCountry {
  code: string;
  name: string;
  flag: string;
}

export interface Vehicle {
  id: string;
  plateNumber: string;
  country: VehicleCountry;
  color: VehicleColor;
  colorHex: string;
  type: VehicleType;
  modelYear: number;
  ownerName: string;
  isBlacklisted: boolean;
}

export interface VehicleStat {
  id: string;
  title: string;
  value: number;
  subtitle: string;
  changePercent: number;
  icon: "vehicles" | "blacklist";
  gradient: string;
}

export interface VehiclesFilters {
  search: string;
  type: string;
  color: string;
}

export interface VehiclesState {
  vehicles: Vehicle[];
  selectedVehicles: string[];
}
