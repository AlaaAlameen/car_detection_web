import { Link } from "react-router-dom";
import { Button } from "../../auth";
import { AnalysisRoutes } from "../routes/analysisRoutes";

interface VehicleDetailsHeaderProps {
  onBack: () => void;
}

export function VehicleDetailsHeader({ onBack }: VehicleDetailsHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <nav className="flex flex-wrap items-center gap-2 text-xs text-white/40">
        <Link to={AnalysisRoutes.results} className="transition hover:text-white/70">
          نتائج التحليل
        </Link>
        <span>/</span>
        <Link to={AnalysisRoutes.results} className="transition hover:text-white/70">
          السيارات المكتشفة
        </Link>
        <span>/</span>
        <span className="font-medium text-white/70">تفاصيل المركبة</span>
      </nav>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1 space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-white">تفاصيل المركبة</h1>
          <p className="text-sm text-white/50">
            عرض ومقارنة بيانات المركبة المكتشفة بالبيانات الفعلية في النظام
          </p>
        </div>

        <div className="flex shrink-0 items-center">
          <Button
            type="button"
            variant="secondary"
            onClick={onBack}
            className="inline-flex w-auto items-center justify-center gap-2 border-white/10 bg-white/5 px-5 py-2.5 text-white hover:bg-white/10 focus:ring-blue-500/30 focus:ring-offset-[#0B1220]"
          >
            <BackIcon />
            <span>رجوع</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

function BackIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 rtl:rotate-180"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}