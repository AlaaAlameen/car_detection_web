import type { BlacklistApiItem } from "../api/blacklist.types";
import type { BlacklistedVehicle } from "../models/blacklist.types";
import { resolveVehicleColorHex } from "../../vehicles/utils/color.utils";
import {
  mapApiValueToPriority,
  mapPriorityToSeverityLabel,
  mapWantedStatusToReason,
} from "./priority.utils";

export function mapBlacklistApiToUi(
  item: BlacklistApiItem,
): BlacklistedVehicle {
  const priority = mapApiValueToPriority(item.priority);

  return {
    id: String(item.id),
    plateNumber: item.plate_number,
    ownerName: item.owner_name,
    reason: mapWantedStatusToReason(item.wanted, item.status),
    severity: mapPriorityToSeverityLabel(priority),
    priority,
    status: item.status,
    wanted: item.wanted,
    color: item.vehicle_color,
    colorCode: resolveVehicleColorHex(item.vehicle_color),
    type: item.vehicle_type,
    createdAt: item.created_at,
  };
}
