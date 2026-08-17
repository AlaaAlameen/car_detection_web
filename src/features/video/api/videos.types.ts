export type VideoStatus = "completed" | "processing" | "failed";

export interface VideoApiItem {
  id: number;
  name: string;
  uploaded_at: string;
  duration: string;
  status: VideoStatus;
}

export interface VideosApiResponse {
  videos: VideoApiItem[];
}

export interface CreateVideoRequest {
  original_path: string;
  name: string;
  duration: number;
  size: number;
}

/** Backend create response — fields may vary; id is the stable identifier. */
export interface CreateVideoResponse {
  id: number;
  name?: string;
  uploaded_at?: string;
  duration?: string | number;
  status?: VideoStatus;
}

export interface ProcessedVideoResponse {
  url: string;
}