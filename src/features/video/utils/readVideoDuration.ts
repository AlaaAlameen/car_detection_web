/**
 * Extract video duration in seconds via HTMLVideoElement metadata.
 */
export function readVideoDurationSeconds(file: File): Promise<number> {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.preload = "metadata";

    const objectUrl = URL.createObjectURL(file);

    const cleanup = () => {
      URL.revokeObjectURL(objectUrl);
      video.removeAttribute("src");
      video.load();
    };

    video.onloadedmetadata = () => {
      const duration = video.duration;
      cleanup();

      if (!Number.isFinite(duration) || duration <= 0) {
        reject(new Error("Could not read video duration"));
        return;
      }

      resolve(duration);
    };

    video.onerror = () => {
      cleanup();
      reject(new Error("Could not read video duration"));
    };

    video.src = objectUrl;
  });
}
