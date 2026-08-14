import { z } from "zod";
import { VIDEO_UPLOAD_CONFIG } from "./videoUpload.constants";

const supportedSet = new Set<string>(VIDEO_UPLOAD_CONFIG.supportedFormats);

export const videoFileMetaSchema = z.object({
  name: z.string().min(1, "اسم الملف مطلوب"),
  size: z
    .number()
    .max(
      VIDEO_UPLOAD_CONFIG.maxSizeBytes,
      `حجم الملف يتجاوز الحد الأقصى ${VIDEO_UPLOAD_CONFIG.maxSizeLabel}`,
    ),
  extension: z
    .string()
    .refine((ext) => supportedSet.has(ext.toLowerCase()), {
      message: "صيغة الملف غير مدعومة",
    }),
});

export type VideoFileMeta = z.infer<typeof videoFileMetaSchema>;

export function validateVideoFile(file: File): {
  success: boolean;
  error?: string;
} {
  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";

  const result = videoFileMetaSchema.safeParse({
    name: file.name,
    size: file.size,
    extension,
  });

  if (!result.success) {
    return {
      success: false,
      error: result.error.issues[0]?.message ?? "ملف غير صالح",
    };
  }

  return { success: true };
}
