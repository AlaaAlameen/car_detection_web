export const VideoRoutes = {
  upload: "/video/upload",
  list: "/video",
} as const;

export type VideoRoute = (typeof VideoRoutes)[keyof typeof VideoRoutes];
