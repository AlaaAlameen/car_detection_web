import type { VehicleCountry } from "../models/vehicle.types";

const COUNTRY_MAP: Record<string, Omit<VehicleCountry, "code">> = {
  KSA: { name: "السعودية", flag: "🇸🇦" },
  UAE: { name: "الإمارات", flag: "🇦🇪" },
  QAT: { name: "قطر", flag: "🇶🇦" },
  KWT: { name: "الكويت", flag: "🇰🇼" },
  BHR: { name: "البحرين", flag: "🇧🇭" },
  OMN: { name: "عُمان", flag: "🇴🇲" },
  JOR: { name: "الأردن", flag: "🇯🇴" },
  EGY: { name: "مصر", flag: "🇪🇬" },
};

export function resolveVehicleCountry(countryCode: string): VehicleCountry {
  const code = countryCode.toUpperCase();
  const known = COUNTRY_MAP[code];

  if (known) {
    return { code, ...known };
  }

  return {
    code,
    name: code,
    flag: "🏳️",
  };
}
export const VEHICLE_COUNTRY_OPTIONS = Object.entries(COUNTRY_MAP).map(
  ([code, info]) => ({ code, ...info }),
);