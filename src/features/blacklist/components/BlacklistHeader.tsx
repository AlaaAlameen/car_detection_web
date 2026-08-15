import { Link } from "react-router-dom";
import { DashboardRoutes } from "../../dashboard";

interface BlacklistHeaderProps {
  title?: string;
  subtitle?: string;
}

export function BlacklistHeader({
  title = "القائمة السوداء",
  subtitle = "إدارة المركبات المدرجة في القائمة السوداء",
}: BlacklistHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <nav className="flex items-center gap-2 text-xs text-white/40">
        <Link
          to={DashboardRoutes.home}
          className="transition hover:text-white/70"
        >
          لوحة التحكم
        </Link>
        <span>/</span>
        <span className="text-white/70">القائمة السوداء</span>
      </nav>
      <div>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="mt-1 text-sm text-white/45">{subtitle}</p>
      </div>
    </div>
  );
}
