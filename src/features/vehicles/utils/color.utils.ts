const COLOR_HEX_MAP: Record<string, string> = {
  أبيض: "#E2E8F0",
  أسود: "#1E293B",
  فضي: "#94A3B8",
  أزرق: "#3B82F6",
  أحمر: "#F43F5E",
  رمادي: "#64748B",
  أخضر: "#10B981",
  أصفر: "#F59E0B",
  بني: "#92400E",
  ذهبي: "#D97706",
};

export function resolveVehicleColorHex(color: string): string {
  return COLOR_HEX_MAP[color] ?? "#64748B";
}
export const VEHICLE_COLOR_OPTIONS = Object.keys(COLOR_HEX_MAP);