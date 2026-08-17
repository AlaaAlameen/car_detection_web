
export const BlacklistApiEndpoints = {
  list: "/api/admin/blacklist",
  detail: (id: number | string) => `/api/admin/blacklist/${id}`,
} as const;