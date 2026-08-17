export interface VehicleCountry {
  code: string;
  name: string;
  flag: string;
}

/** Presentation model used by Vehicles UI components. */
export interface Vehicle {
  id: string;
  plateNumber: string;
  country: VehicleCountry;
  color: string;
  colorHex: string;
  type: string;
  model: string;
  ownerName: string;
  isBlacklisted: boolean;
  createdAt: string;
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

export interface VehiclesSelectionState {
  selectedVehicles: string[];
}

export const VEHICLES_PAGE_SIZE = 8;

export const vehiclesQueryKeys = {
  all: ["vehicles"] as const,
  list: () => [...vehiclesQueryKeys.all, "list"] as const,
};
