import type {
  AlertItemData,
  DashboardStat,
} from "../models/dashboard.types";

/**
 * DashboardService — prepared for future API integration.
 * Methods are placeholders and throw until implemented.
 */
class DashboardService {
  async getStats(): Promise<DashboardStat[]> {
    // TODO: integrate with API
    throw new Error("DashboardService.getStats is not implemented yet");
  }

  async getAlerts(): Promise<AlertItemData[]> {
    // TODO: integrate with API
    throw new Error("DashboardService.getAlerts is not implemented yet");
  }
}

export const dashboardService = new DashboardService();
