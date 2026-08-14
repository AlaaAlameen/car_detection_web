export type VideoStatus = "completed" | "failed" | "processing";

export interface VideoFile {
  id: string;
  name: string;
  size: number;
  formattedSize: string;
  duration: string;
  format: string;
  thumbnailUrl?: string;
  uploadedAt: string;
  status: VideoStatus;
}

export interface SelectedVideoDisplay {
  name: string;
  format: string;
  formattedSize: string;
  duration: string;
  thumbnailUrl: string;
}

export interface VideoUploadConfig {
  supportedFormats: readonly string[];
  maxSizeBytes: number;
  maxSizeLabel: string;
}
