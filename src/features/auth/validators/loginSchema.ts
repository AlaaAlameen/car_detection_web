import { z } from "zod";

export const loginSchema = z.object({
  OfficerID: z
    .string()
    .min(1, "Officer ID is required")
    .min(3, "Officer ID must be at least 3 characters.")
    .max(20, "Officer ID must be at most 20 characters."),

  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

