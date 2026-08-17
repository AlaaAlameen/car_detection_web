interface VehiclesEmptyStateProps {
  message: string;
}

export function VehiclesEmptyState({ message }: VehiclesEmptyStateProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="px-4 py-12 text-center text-sm text-white/40">
        {message}
      </div>
    </div>
  );
}
