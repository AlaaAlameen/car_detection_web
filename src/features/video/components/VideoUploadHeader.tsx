import { Link } from "react-router-dom";
import { VideoRoutes } from "../routes/videoRoutes";

interface VideoUploadHeaderProps {
  title?: string;
  subtitle?: string;
}

export function VideoUploadHeader({
  title = "رفع فيديو جديد",
  subtitle = "قم برفع فيديو لبدء عملية التحليل والكشف باستخدام الذكاء الاصطناعي",
}: VideoUploadHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <nav className="flex items-center gap-2 text-xs text-white/40">
        <Link
          to={VideoRoutes.list}
          className="transition hover:text-white/70"
        >
          تحليل الفيديو
        </Link>
        <span>/</span>
        <span className="text-white/70">رفع فيديو</span>
      </nav>
      <div>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="mt-1 text-sm text-white/45">{subtitle}</p>
      </div>
    </div>
  );
}
