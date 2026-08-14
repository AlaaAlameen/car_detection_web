export const AuthRoutes = {
  login: "/login",
} as const;

export type AuthRoute = (typeof AuthRoutes)[keyof typeof AuthRoutes];
