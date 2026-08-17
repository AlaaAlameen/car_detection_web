import type {
  AlertItemData,
  DashboardStat,
} from "../models/dashboard.types";


class DashboardService {
  async getStats(): Promise<DashboardStat[]> {
    throw new Error("DashboardService.getStats is not implemented yet");
  }

  async getAlerts(): Promise<AlertItemData[]> {
    throw new Error("DashboardService.getAlerts is not implemented yet");
  }
}

export const dashboardService = new DashboardService();
