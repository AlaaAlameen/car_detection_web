import type { VideoFile } from "../models/video.types";

/**
 * VideoService — prepared for future API integration.
 * Methods are placeholders and throw until implemented.
 */
class VideoService {
  async getRecentVideos(): Promise<VideoFile[]> {
    // TODO: integrate with API
    throw new Error("VideoService.getRecentVideos is not implemented yet");
  }

  async uploadVideo(_file: File): Promise<VideoFile> {
    // TODO: integrate with API
    throw new Error("VideoService.uploadVideo is not implemented yet");
  }

  async deleteVideo(_id: string): Promise<void> {
    // TODO: integrate with API
    throw new Error("VideoService.deleteVideo is not implemented yet");
  }

  async startProcessing(_id: string): Promise<void> {
    // TODO: integrate with API
    throw new Error("VideoService.startProcessing is not implemented yet");
  }
}

export const videoService = new VideoService();
