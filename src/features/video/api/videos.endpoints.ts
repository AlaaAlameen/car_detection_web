export const VideosApiEndpoints = {
  list: "/api/admin/videos",
  processed: (videoId: number | string) =>
    `/api/admin/videos/processed/${videoId}`,
} as const;