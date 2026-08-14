import { Link, useNavigate } from "react-router-dom";
import type { SidebarMenuItem } from "../../models/dashboard.types";
import { LogoIcon, LogoutIcon, MenuGlyph } from "./icons";
import { useAuthStore, AuthRoutes } from "../../../auth";

interface SidebarProps {
  menuItems: SidebarMenuItem[];
  activeMenuId: string;
  isOpen: boolean;
  onClose: () => void;
  onSelect: (id: string) => void;
}

export function Sidebar({
  menuItems,
  activeMenuId,
  isOpen,
  onClose,
  onSelect,
}: SidebarProps) {
  const navigate = useNavigate();
  const resetAuth = useAuthStore((s) => s.reset);

  const handleLogout = () => {
    resetAuth();
    onClose();
    navigate(AuthRoutes.login, { replace: true });
  };

  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="إغلاق القائمة"
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 end-0 z-50 flex w-72 flex-col border-s border-white/10 bg-gradient-to-b from-[#121a2e] via-[#0f172a] to-[#0B1220] shadow-[-8px_0_40px_rgba(0,0,0,0.35)] transition-transform duration-300 lg:static lg:z-auto lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-6">
          <LogoIcon className="h-10 w-10 shrink-0" />
          <div>
            <p className="text-sm font-bold leading-snug text-white">
              نظام المراقبة المرورية
            </p>
            <p className="mt-0.5 text-[11px] text-white/40">AI Car Monitoring</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {menuItems.map((item) => {
            const isActive = item.id === activeMenuId;
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => {
                  onSelect(item.id);
                  onClose();
                }}
                className={`flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-gradient-to-l from-blue-600/80 to-violet-600/70 text-white shadow-[0_0_24px_rgba(99,102,241,0.35)]"
                    : "text-white/60 hover:bg-white/5 hover:text-white/90"
                }`}
              >
                <MenuGlyph name={item.icon} className="h-5 w-5 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 p-4">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-rose-500/10 px-3.5 py-3 text-sm font-medium text-rose-300 transition hover:bg-rose-500/20 hover:text-rose-200"
          >
            <LogoutIcon className="h-5 w-5 shrink-0" />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </aside>
    </>
  );
}