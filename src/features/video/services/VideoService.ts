import { apiClient } from "../../../api/axios";
import { VideosApiEndpoints } from "../api/videos.endpoints";
import type {
  CreateVideoRequest,
  CreateVideoResponse,
  ProcessedVideoResponse,
  VideosApiResponse,
} from "../api/videos.types";
import type { VideoFile } from "../models/video.types";
import { mapVideoApiToUi } from "../utils/mapVideoApiToUi";

class VideoService {
  async getVideos(): Promise<VideoFile[]> {
    const response = await apiClient.get<VideosApiResponse>(
      VideosApiEndpoints.list,
    );

    return response.data.videos.map(mapVideoApiToUi);
  }

  async getRecentVideos(): Promise<VideoFile[]> {
    const videos = await this.getVideos();
    return videos.slice(0, 3);
  }

  async getProcessedVideoUrl(videoId: number): Promise<string> {
    const response = await apiClient.get<ProcessedVideoResponse>(
      VideosApiEndpoints.processed(videoId),
    );

    return response.data.url;
  }

  async createVideo(data: CreateVideoRequest): Promise<CreateVideoResponse> {
    const response = await apiClient.post<CreateVideoResponse>(
      VideosApiEndpoints.list,
      data,
    );

    return response.data;
  }

  async deleteVideo(_id: string): Promise<void> {
    // TODO: integrate with delete API when available
    throw new Error("VideoService.deleteVideo is not implemented yet");
  }
}

export const videoService = new VideoService();