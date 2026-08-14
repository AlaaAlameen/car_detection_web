import { Link } from "react-router-dom";
import { VideoRoutes } from "../../video";

interface AnalysisResultsHeaderProps {
  title?: string;
  subtitle?: string;
}

export function AnalysisResultsHeader({
  title = "نتائج تحليل الفيديو",
  subtitle = "عرض ملخص نتائج التحليل والفحص باستخدام الذكاء الاصطناعي",
}: AnalysisResultsHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <nav className="flex items-center gap-2 text-xs text-white/40">
        <Link
          to={VideoRoutes.upload}
          className="transition hover:text-white/70"
        >
          تحليل الفيديو
        </Link>
        <span>/</span>
        <span className="text-white/70">نتائج التحليل</span>
      </nav>
      <div>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="mt-1 text-sm text-white/45">{subtitle}</p>
      </div>
    </div>
  );
}
