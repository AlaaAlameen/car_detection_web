export interface VehicleApiItem {
  id: number;
  plate_number: string;
  country_code: string;
  type: string;
  model: string;
  color: string;
  owner_name: string;
  is_blacklisted: boolean;
  created_at: string;
}

export interface VehiclesApiResponse {
  data: VehicleApiItem[];
}
export interface CreateVehicleRequest {
  plate_number: string;
  country_code: string;
  type: string;
  model: string;
  color: string;
  owner_name: string;
}

export type UpdateVehicleRequest = CreateVehicleRequest;