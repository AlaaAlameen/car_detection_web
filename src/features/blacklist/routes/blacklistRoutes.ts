export const BlacklistRoutes = {
  list: "/blacklist",
} as const;

export type BlacklistRoute =
  (typeof BlacklistRoutes)[keyof typeof BlacklistRoutes];
