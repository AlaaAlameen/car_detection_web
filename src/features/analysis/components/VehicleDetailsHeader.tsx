import { Link } from "react-router-dom";
import { Button } from "../../auth";
import { AnalysisRoutes } from "../routes/analysisRoutes";

interface VehicleDetailsHeaderProps {
  onBack: () => void;
}

export function VehicleDetailsHeader({ onBack }: VehicleDetailsHeaderProps) {
  return (
    <div className="flex flex-col gap-3">
      <nav className="flex flex-wrap items-center gap-2 text-xs text-white/40">
        <Link
          to={AnalysisRoutes.results}
          className="transition hover:text-white/70"
        >
          نتائج التحليل
        </Link>
        <span>/</span>
        <Link
          to={AnalysisRoutes.results}
          className="transition hover:text-white/70"
        >
          السيارات المكتشفة
        </Link>
        <span>/</span>
        <span className="text-white/70">تفاصيل المركبة</span>
      </nav>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">تفاصيل المركبة</h1>
          <p className="mt-1 text-sm text-white/45">
            عرض ومقارنة بيانات المركبة المكتشفة بالبيانات الفعلية في النظام
          </p>
        </div>

        <Button
          type="button"
          variant="secondary"
          onClick={onBack}
          className="w-auto shrink-0 border-white/10 bg-white/5 px-5 text-white hover:bg-white/10 focus:ring-blue-500/30 focus:ring-offset-[#0B1220]"
        >
          <BackIcon />
          رجوع
        </Button>
      </div>
    </div>
  );
}

function BackIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}
