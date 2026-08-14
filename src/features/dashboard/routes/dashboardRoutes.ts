export const DashboardRoutes = {
  home: "/dashboard",
} as const;

export type DashboardRoute =
  (typeof DashboardRoutes)[keyof typeof DashboardRoutes];
