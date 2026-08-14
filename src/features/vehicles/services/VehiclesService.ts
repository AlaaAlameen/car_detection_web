import type { Vehicle } from "../models/vehicle.types";

/**
 * VehiclesService — prepared for future API integration.
 * Methods are placeholders and throw until implemented.
 */
class VehiclesService {
  async getVehicles(): Promise<Vehicle[]> {
    // TODO: integrate with API
    throw new Error("VehiclesService.getVehicles is not implemented yet");
  }

  async createVehicle(_payload: Omit<Vehicle, "id">): Promise<Vehicle> {
    // TODO: integrate with API
    throw new Error("VehiclesService.createVehicle is not implemented yet");
  }
}

export const vehiclesService = new VehiclesService();
