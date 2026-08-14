import type { ReactNode } from "react";
import type { TopbarUser } from "../../models/dashboard.types";
import { BellIcon, FullscreenIcon, MenuIcon, SettingsIcon } from "./icons";

interface TopbarProps {
  user: TopbarUser;
  onMenuClick: () => void;
  onFullscreen?: () => void;
}

export function Topbar({ user, onMenuClick, onFullscreen }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-white/10 bg-[#0B1220]/80 px-4 py-3 backdrop-blur-xl sm:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white lg:hidden"
          aria-label="فتح القائمة"
        >
          <MenuIcon />
        </button>
        <div>
          <h1 className="text-base font-bold text-white sm:text-lg">
            لوحة التحكم
          </h1>
          <p className="hidden text-xs text-white/40 sm:block">
            مراقبة المركبات والتنبيهات في الوقت الفعلي
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <IconButton label="الإشعارات">
          <BellIcon className="h-[18px] w-[18px]" />
          <span className="absolute top-1.5 end-1.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-[#0B1220]" />
        </IconButton>
        <IconButton label="الإعدادات">
          <SettingsIcon className="h-[18px] w-[18px]" />
        </IconButton>
        <IconButton label="ملء الشاشة" onClick={onFullscreen}>
          <FullscreenIcon className="h-[18px] w-[18px]" />
        </IconButton>

        <div className="ms-1 flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 py-1.5 ps-1.5 pe-3">
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="h-9 w-9 rounded-lg bg-white/10 ring-1 ring-white/15"
          />
          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-sm font-semibold text-white">
              {user.name}
            </p>
            <p className="truncate text-[11px] text-white/40">{user.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function IconButton({
  children,
  label,
  onClick,
}: {
  children: ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/65 transition hover:bg-white/10 hover:text-white"
    >
      {children}
    </button>
  );
}
