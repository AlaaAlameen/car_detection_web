import { apiClient } from "../../../api/axios";
import { BlacklistApiEndpoints } from "../api/blacklist.endpoints";
import type { BlacklistedVehicle } from "../models/blacklist.types";
import { mapBlacklistApiToUi } from "../utils/mapBlacklistApiToUi";
import type {
  BlacklistApiResponse,
  CreateBlacklistRequest,
  UpdateBlacklistRequest,
} from "../api/blacklist.types";
import { mapPriorityToApiValue } from "../utils/priority.utils";

class BlacklistService {
  async getBlacklist(): Promise<BlacklistedVehicle[]> {
    const response = await apiClient.get<BlacklistApiResponse>(
      BlacklistApiEndpoints.list,
    );

    return response.data.data.map(mapBlacklistApiToUi);
  }

  
  async deleteBlacklistEntry(id: string): Promise<void> {
    await apiClient.delete(BlacklistApiEndpoints.detail(id));
  }


async updateBlacklistEntry(id: string, payload: UpdateBlacklistRequest): Promise<void> {
  await apiClient.put(BlacklistApiEndpoints.detail(id), {
    ...payload,
    priority: mapPriorityToApiValue(payload.priority),
  });
}

async addToBlacklist(payload: CreateBlacklistRequest): Promise<void> {
  await apiClient.post(BlacklistApiEndpoints.list, {
    ...payload,
    priority: mapPriorityToApiValue(payload.priority),
  });
}
}

export const blacklistService = new BlacklistService();
