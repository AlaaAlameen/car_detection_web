import type { VehicleDetails } from "../models/vehicleDetails.types";

interface VehicleInfoCardProps {
  vehicle: VehicleDetails;
}

export function VehicleInfoCard({ vehicle }: VehicleInfoCardProps) {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
      <img
        src={vehicle.imageUrl}
        alt={vehicle.plateNumber}
        className="h-48 w-full rounded-xl object-cover ring-1 ring-white/10 lg:h-44 lg:w-72 lg:shrink-0"
      />

      <div className="min-w-0 flex-1">
        <p className="text-sm text-white/45">رقم المركبة (original)</p>
        <p className="mt-1 text-2xl font-bold tracking-wide text-white">
          {vehicle.plateNumber}
        </p>
      </div>
    </div>
  );
}
