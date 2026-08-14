import { useMemo } from "react";
import { mockDashboardData } from "../data/mockDashboardData";
import { useDashboardStore } from "../store/dashboardStore";
import type { DashboardData } from "../models/dashboard.types";

function formatNumber(value: number): string {
  return new Intl.NumberFormat("ar-EG").format(value);
}

export function useDashboardViewModel() {
  const isSidebarOpen = useDashboardStore((s) => s.isSidebarOpen);
  const activeMenuId = useDashboardStore((s) => s.activeMenuId);
  const toggleSidebar = useDashboardStore((s) => s.toggleSidebar);
  const setSidebarOpen = useDashboardStore((s) => s.setSidebarOpen);
  const setActiveMenuId = useDashboardStore((s) => s.setActiveMenuId);

  const data: DashboardData = useMemo(
    () => ({
      ...mockDashboardData,
      activeMenuId,
    }),
    [activeMenuId],
  );

  const formattedStats = useMemo(
    () =>
      data.stats.map((stat) => ({
        ...stat,
        displayValue: formatNumber(stat.value),
        isPositive: stat.changePercent >= 0,
        displayChange: `${stat.changePercent >= 0 ? "+" : ""}${stat.changePercent}%`,
      })),
    [data.stats],
  );

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      void document.documentElement.requestFullscreen();
    } else {
      void document.exitFullscreen();
    }
  };

  return {
    data,
    formattedStats,
    isSidebarOpen,
    toggleSidebar,
    setSidebarOpen,
    setActiveMenuId,
    handleFullscreen,
    user: data.user,
    menuItems: data.menuItems,
    activeMenuId,
    weeklyScans: data.weeklyScans,
    colorDistribution: data.colorDistribution,
    vehicleTypes: data.vehicleTypes,
    matchProgress: data.matchProgress,
    alerts: data.alerts,
  };
}
