export const AnalysisRoutes = {
  results: "/analysis/results",
  resultsWithVideo: "/analysis/results/:videoId",
  details: "/analysis/vehicle-details/:id",
} as const;

export type AnalysisRoute =
  (typeof AnalysisRoutes)[keyof typeof AnalysisRoutes];

export function buildAnalysisResultsPath(videoId: string | number): string {
  return `/analysis/results/${videoId}`;
}

export function buildVehicleDetailsPath(id: string): string {
  return `/analysis/vehicle-details/${id}`;
}
