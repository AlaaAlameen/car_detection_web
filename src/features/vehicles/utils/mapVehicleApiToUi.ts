import type { VehicleApiItem } from "../api/vehicles.types";
import type { Vehicle } from "../models/vehicle.types";
import { resolveVehicleColorHex } from "../utils/color.utils";
import { resolveVehicleCountry } from "../utils/country.utils";

export function mapVehicleApiToUi(item: VehicleApiItem): Vehicle {
  return {
    id: String(item.id),
    plateNumber: item.plate_number,
    country: resolveVehicleCountry(item.country_code),
    color: item.color,
    colorHex: resolveVehicleColorHex(item.color),
    type: item.type,
    model: item.model,
    ownerName: item.owner_name,
    isBlacklisted: item.is_blacklisted,
    createdAt: item.created_at,
  };
}
