import type { BlacklistedVehicle } from "../models/blacklist.types";

/**
 * BlacklistService — prepared for future API integration.
 * Methods are placeholders and throw until implemented.
 */
class BlacklistService {
  async getVehicles(): Promise<BlacklistedVehicle[]> {
    // TODO: integrate with API
    throw new Error("BlacklistService.getVehicles is not implemented yet");
  }

  async getVehicle(_id: string): Promise<BlacklistedVehicle> {
    // TODO: integrate with API
    throw new Error("BlacklistService.getVehicle is not implemented yet");
  }

  async createVehicle(
    _data: Omit<BlacklistedVehicle, "id">,
  ): Promise<BlacklistedVehicle> {
    // TODO: integrate with API
    throw new Error("BlacklistService.createVehicle is not implemented yet");
  }

  async updateVehicle(
    _id: string,
    _data: Partial<BlacklistedVehicle>,
  ): Promise<BlacklistedVehicle> {
    // TODO: integrate with API
    throw new Error("BlacklistService.updateVehicle is not implemented yet");
  }

  async deleteVehicle(_id: string): Promise<void> {
    // TODO: integrate with API
    throw new Error("BlacklistService.deleteVehicle is not implemented yet");
  }
}

export const blacklistService = new BlacklistService();
