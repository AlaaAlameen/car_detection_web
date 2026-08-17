/**
 * Builds a relative storage path for the backend.
 * Never uses absolute filesystem / browser local paths.
 *
 * Convention (adjustable in one place):
 *   originals/{filename_with_extension}
 */
export function buildOriginalPath(fileName: string): string {
  const basename =
    fileName.replace(/\\/g, "/").split("/").filter(Boolean).pop() ??
    fileName.trim();

  if (!basename) {
    throw new Error("Invalid video file name for original_path");
  }

  return `originals/${basename}`;
}
