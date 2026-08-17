import { Button } from "../../auth";

interface VehiclesErrorStateProps {
  message?: string;
  onRetry: () => void;
}

export function VehiclesErrorState({
  message = "تعذر تحميل بيانات المركبات",
  onRetry,
}: VehiclesErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-rose-500/20 bg-rose-500/5 px-4 py-12 text-center">
      <p className="text-sm font-medium text-rose-300">{message}</p>
      <Button
        type="button"
        onClick={onRetry}
        className="w-auto px-5 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
      >
        إعادة المحاولة
      </Button>
    </div>
  );
}
