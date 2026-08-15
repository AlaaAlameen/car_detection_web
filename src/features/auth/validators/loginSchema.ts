import { z } from "zod";

export const loginSchema = z.object({
  OfficerID: z
    .string()
    .min(1, "رقم الضابط مطلوب")
    .min(3, "يجب أن يتكوّن رقم الضابط من 3 أحرف على الأقل")
    .max(20, "يجب ألا يتجاوز رقم الضابط 20 حرفًا"),

  password: z
    .string()
    .min(1, "كلمة المرور مطلوبة")
    .min(6, "يجب أن تتكوّن كلمة المرور من 6 أحرف على الأقل"),
  rememberMe: z.boolean().optional(),
});

export type LoginFormValues = z.infer<typeof loginSchema>;