import { SeverityBadge } from "./SeverityBadge";
import type { VehicleDetails } from "../models/vehicleDetails.types";

interface VehicleInfoCardProps {
  vehicle: VehicleDetails;
}

export function VehicleInfoCard({ vehicle }: VehicleInfoCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch">
        {/* الصورة */}
        <img
          src={vehicle.imageUrl}
          alt={vehicle.plateNumber}
          className="h-48 w-full rounded-xl object-cover ring-1 ring-white/10 lg:h-auto lg:w-64 lg:shrink-0"
        />

        {/* كل المعلومات بجانب الصورة */}
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-sm text-white/45">رقم المركبة (original)</p>
              <p className="mt-1 text-2xl font-bold tracking-wide text-white">
                {vehicle.plateNumber}
              </p>
            </div>

            <div className="flex items-center gap-2 sm:shrink-0">
              <span className="text-sm text-white/50">Score:</span>
              <span className="text-xl font-bold text-white">
                {vehicle.score}
                <span className="text-sm font-normal text-white/40"> / 100</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t border-white/10 pt-3">
            <span className="text-sm text-white/50">درجة الخطورة:</span>
            <SeverityBadge severity={vehicle.severity} />
          </div>

          <div className="grid gap-3 border-t border-white/10 pt-3 sm:grid-cols-2">
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
      </div>
    </div>
  );
}