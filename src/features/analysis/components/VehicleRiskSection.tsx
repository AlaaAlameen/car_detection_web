import { SeverityBadge } from "./SeverityBadge";
import type { VehicleDetails } from "../models/vehicleDetails.types";

interface VehicleRiskSectionProps {
  vehicle: VehicleDetails;
}

export function VehicleRiskSection({ vehicle }: VehicleRiskSectionProps) {
  return (
    <div className="rounded-xl border border-rose-500/20 bg-gradient-to-l from-rose-600/10 to-orange-600/5 p-4 sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm text-white/50">درجة الخطورة:</span>
          <SeverityBadge severity={vehicle.severity} />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-white/50">Score:</span>
          <span className="text-xl font-bold text-white">
            {vehicle.score}
            <span className="text-sm font-normal text-white/40"> / 100</span>
          </span>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div>
          <p className="text-xs text-white/40">نوع التنبيه</p>
          <p className="mt-1 text-sm font-medium text-white/85">
            {vehicle.alertType}
          </p>
        </div>
        <div>
          <p className="text-xs text-white/40">رسالة توضيحية</p>
          <p className="mt-1 text-sm leading-relaxed text-white/65">
            {vehicle.alertMessage}
          </p>
        </div>
      </div>
    </div>
  );
}
