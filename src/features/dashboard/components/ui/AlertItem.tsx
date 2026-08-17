interface AlertItemProps {
  plateNumber: string;
  carType: string;
  status: string;
  imageUrl: string;
  time: string;
}

export function AlertItem({
  plateNumber,
  carType,
  status,
  imageUrl,
  time,
}: AlertItemProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3 transition hover:bg-white/[0.06]">
      <img
        src={imageUrl}
        alt={carType}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=200&h=140&fit=crop";
        }}
        className="h-14 w-20 shrink-0 rounded-lg object-cover ring-1 ring-white/10"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate font-semibold text-white">{plateNumber}</p>
          <span className="shrink-0 rounded-md bg-rose-500/15 px-2 py-0.5 text-[11px] font-semibold text-rose-400 ring-1 ring-rose-500/30">
            {status}
          </span>
        </div>
        <p className="mt-0.5 truncate text-sm text-white/55">{carType}</p>
        <p className="mt-1 text-[11px] text-white/35">{time}</p>
      </div>
    </div>
  );
}
