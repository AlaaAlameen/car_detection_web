import type {
  AnalysisAlert,
  AnalysisVideoSummary,
} from "../models/analysis.types";
import type { VehicleDetails } from "../models/vehicleDetails.types";

/**
 * AnalysisService — prepared for future API integration.
 * Methods are placeholders and throw until implemented.
 */
class AnalysisService {
  async getResults(): Promise<{
    video: AnalysisVideoSummary;
    alerts: AnalysisAlert[];
  }> {
    // TODO: integrate with API
    throw new Error("AnalysisService.getResults is not implemented yet");
  }

  async getVehicleDetails(_id: string): Promise<VehicleDetails> {
    // TODO: integrate with API
    throw new Error("AnalysisService.getVehicleDetails is not implemented yet");
  }
}

export const analysisService = new AnalysisService();
