/**
 * Convert API duration seconds (e.g. "267.77") to mm:ss (e.g. "04:27").
 */
export function formatDuration(durationSeconds: string | number): string {
  const raw =
    typeof durationSeconds === "number"
      ? durationSeconds
      : Number.parseFloat(durationSeconds);

  if (!Number.isFinite(raw) || raw < 0) {
    return "--:--";
  }

  const totalSeconds = Math.round(raw);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}
