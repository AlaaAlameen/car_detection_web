export const AnalysisRoutes = {
  results: "/analysis/results",
  details: "/analysis/vehicle-details/:id",
} as const;

export type AnalysisRoute =
  (typeof AnalysisRoutes)[keyof typeof AnalysisRoutes];

export function buildVehicleDetailsPath(id: string): string {
  return `/analysis/vehicle-details/${id}`;
}
