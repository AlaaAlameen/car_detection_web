import { apiClient } from "../../../api/axios";
import { VehiclesApiEndpoints } from "../api/vehicles.endpoints";
import type {
  CreateVehicleRequest,
  UpdateVehicleRequest,
  VehiclesApiResponse,
} from "../api/vehicles.types";
import type { Vehicle } from "../models/vehicle.types";
import { mapVehicleApiToUi } from "../utils/mapVehicleApiToUi";

class VehiclesService {
  async getVehicles(): Promise<Vehicle[]> {
    const response = await apiClient.get<VehiclesApiResponse>(
      VehiclesApiEndpoints.list,
    );

    return response.data.data.map(mapVehicleApiToUi);
  }

  async createVehicle(payload: CreateVehicleRequest): Promise<void> {
    await apiClient.post(VehiclesApiEndpoints.list, payload);
  }

  async updateVehicle(
    id: string,
    payload: UpdateVehicleRequest,
  ): Promise<void> {
    await apiClient.put(VehiclesApiEndpoints.detail(id), payload);
  }

  async deleteVehicle(id: string): Promise<void> {
    await apiClient.delete(VehiclesApiEndpoints.detail(id));
  }
}

export const vehiclesService = new VehiclesService();