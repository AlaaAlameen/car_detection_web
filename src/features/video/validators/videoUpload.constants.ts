export const VIDEO_UPLOAD_CONFIG = {
  supportedFormats: ["mp4", "avi", "mov", "mkv"] as const,
  maxSizeBytes: 2 * 1024 ** 3,
  maxSizeLabel: "2 GB",
} as const;

export const VIDEO_FORMAT_LABELS = ["MP4", "AVI", "MOV", "MKV"] as const;
