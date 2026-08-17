export const DetectionsApiEndpoints = {
  byVideo: (videoId: number | string) =>
    `/api/admin/videos/${videoId}/detections`,
  byId: (detectionId: number | string) =>
    `/api/admin/detections/${detectionId}`,
} as const;
