interface VehiclesTableProps {
  message?: string;
}

export function VehiclesTableSkeleton({
  message = "جاري تحميل المركبات...",
}: VehiclesTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="space-y-3 p-4">
        <p className="text-sm text-white/45">{message}</p>
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-12 animate-pulse rounded-lg bg-white/[0.06]"
          />
        ))}
      </div>
    </div>
  );
}
