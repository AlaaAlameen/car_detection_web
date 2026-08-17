import type {
  BlacklistPriority,
  BlacklistPriorityApiValue,
  BlacklistStatus,
} from "../models/blacklist.types";

export interface BlacklistApiItem {
  id: number;
  plate_number: string;
  owner_name: string;
  vehicle_type: string;
  vehicle_color: string;
  priority: BlacklistPriorityApiValue;
  status: BlacklistStatus;
  wanted: boolean;
  created_at: string;
}

export interface BlacklistApiResponse {
  data: BlacklistApiItem[];
}

export interface UpdateBlacklistRequest {
  status: BlacklistStatus;
  priority: BlacklistPriority;
  wanted: boolean;
}

export interface CreateBlacklistRequest {
  vehicle_id: number;
  status: BlacklistStatus;
  priority: BlacklistPriority;
  wanted: boolean;
}

export interface UpdateBlacklistApiPayload extends Omit<UpdateBlacklistRequest, "priority"> {
  priority: BlacklistPriorityApiValue;
}

export interface CreateBlacklistApiPayload extends Omit<CreateBlacklistRequest, "priority"> {
  priority: BlacklistPriorityApiValue;
}