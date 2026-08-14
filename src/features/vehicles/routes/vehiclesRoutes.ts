export const VehiclesRoutes = {
  list: "/vehicles",
} as const;

export type VehiclesRoute =
  (typeof VehiclesRoutes)[keyof typeof VehiclesRoutes];
