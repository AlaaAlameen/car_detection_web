import { apiClient } from "../../../api/axios";
import { DetectionsApiEndpoints } from "../api/detections.endpoints";
import type { DetectionsApiResponse } from "../api/detections.types";
import type { AnalysisAlert, AnalysisVideoSummary } from "../models/analysis.types";
import type { VehicleDetails } from "../models/vehicleDetails.types";
import { mapDetectionApiToUi } from "../utils/mapDetectionApiToUi";
import type { DetectionDetailsResponse } from "../api/detectionDetails.types";
import { mapDetectionDetailsResponseToVehicleDetails } from "../utils/mapDetectionDetailsToVehicleDetails";

class AnalysisService {
  async getVideoDetections(videoId: number): Promise<AnalysisAlert[]> {
    const response = await apiClient.get<DetectionsApiResponse>(
      DetectionsApiEndpoints.byVideo(videoId),
    );

    return response.data.detections.map(mapDetectionApiToUi);
  }

  /** @deprecated Prefer getVideoDetections + videoService.getVideos */
  async getResults(): Promise<{
    video: AnalysisVideoSummary;
    alerts: AnalysisAlert[];
  }> {
    throw new Error(
      "AnalysisService.getResults is deprecated — use getVideoDetections",
    );
  }

  async getVehicleDetails(id: number): Promise<VehicleDetails> {
    const response = await apiClient.get<DetectionDetailsResponse>(
      DetectionsApiEndpoints.byId(id),
    );

    return mapDetectionDetailsResponseToVehicleDetails(response.data);
  }
}

export const analysisService = new AnalysisService();
