export const VehiclesApiEndpoints = {
  list: "/api/admin/vehicles",
  detail: (id: number | string) => `/api/admin/vehicles/${id}`,
} as const;