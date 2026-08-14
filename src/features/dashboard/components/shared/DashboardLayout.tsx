import type { ReactNode } from "react";
import type { SidebarMenuItem, TopbarUser } from "../../models/dashboard.types";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

interface DashboardLayoutProps {
  children: ReactNode;
  user: TopbarUser;
  menuItems: SidebarMenuItem[];
  activeMenuId: string;
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  onCloseSidebar: () => void;
  onSelectMenu: (id: string) => void;
  onFullscreen?: () => void;
}

export function DashboardLayout({
  children,
  user,
  menuItems,
  activeMenuId,
  isSidebarOpen,
  onToggleSidebar,
  onCloseSidebar,
  onSelectMenu,
  onFullscreen,
}: DashboardLayoutProps) {
  return (
    <div
      dir="rtl"
      lang="ar"
      className="flex min-h-svh bg-[#0B1220] font-[Cairo,Tahoma,sans-serif] text-white"
    >
      <Sidebar
        menuItems={menuItems}
        activeMenuId={activeMenuId}
        isOpen={isSidebarOpen}
        onClose={onCloseSidebar}
        onSelect={onSelectMenu}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar
          user={user}
          onMenuClick={onToggleSidebar}
          onFullscreen={onFullscreen}
        />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
