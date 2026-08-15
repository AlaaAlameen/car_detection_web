import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  mockDashboardData,
  useDashboardStore,
} from "../../dashboard";
import {
  ANALYSIS_PAGE_SIZE,
  mockAnalysisAlerts,
  mockAnalysisStats,
  mockAnalysisVideo,
} from "../data/mockAnalysisData";
import type { AnalysisFilters } from "../models/analysis.types";
import { buildVehicleDetailsPath } from "../routes/analysisRoutes";

function formatNumber(value: number): string {
  return new Intl.NumberFormat("ar-EG").format(value);
}

export function useAnalysisResultsViewModel() {
  const navigate = useNavigate();
  const activeMenuId = useDashboardStore((s) => s.activeMenuId);
  const isSidebarOpen = useDashboardStore((s) => s.isSidebarOpen);
  const toggleSidebar = useDashboardStore((s) => s.toggleSidebar);
  const setSidebarOpen = useDashboardStore((s) => s.setSidebarOpen);
  const setActiveMenuId = useDashboardStore((s) => s.setActiveMenuId);

  const [filters, setFilters] = useState<AnalysisFilters>({
    search: "",
    alertType: "الكل",
    severity: "الكل",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  useEffect(() => {
    setActiveMenuId("analysis");
  }, [setActiveMenuId]);

  const filteredAlerts = useMemo(() => {
    const query = filters.search.trim().toLowerCase();

    return mockAnalysisAlerts.filter((alert) => {
      const matchesSearch =
        query.length === 0 ||
        alert.plateNumber.toLowerCase().includes(query) ||
        alert.message.toLowerCase().includes(query);

      const matchesType =
        filters.alertType === "الكل" || alert.alertType === filters.alertType;

      const matchesSeverity =
        filters.severity === "الكل" || alert.severity === filters.severity;

      return matchesSearch && matchesType && matchesSeverity;
    });
  }, [filters]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredAlerts.length / ANALYSIS_PAGE_SIZE),
  );
  const safePage = Math.min(currentPage, totalPages);

  const paginatedAlerts = useMemo(() => {
    const start = (safePage - 1) * ANALYSIS_PAGE_SIZE;
    return filteredAlerts.slice(start, start + ANALYSIS_PAGE_SIZE);
  }, [filteredAlerts, safePage]);

  const pageNumbers = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages],
  );

  const formattedStats = useMemo(
    () =>
      mockAnalysisStats.map((stat) => ({
        ...stat,
        displayValue: formatNumber(stat.value),
        displayChange: `${stat.percent}%`,
      })),
    [],
  );

  const setSearch = (search: string) => {
    setFilters((prev) => ({ ...prev, search }));
    setCurrentPage(1);
  };

  const setAlertTypeFilter = (alertType: string) => {
    setFilters((prev) => ({ ...prev, alertType }));
    setCurrentPage(1);
  };

  const setSeverityFilter = (severity: string) => {
    setFilters((prev) => ({ ...prev, severity }));
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      void document.documentElement.requestFullscreen();
    } else {
      void document.exitFullscreen();
    }
  };

  const handleViewProcessedVideo = () => {
    setIsPlayerOpen(true);
  };

  const handleCloseVideoPlayer = () => {
    setIsPlayerOpen(false);
  };

  const handleRowClick = (id: string) => {
    navigate(buildVehicleDetailsPath(id));
  };

  const handleViewAlert = (id: string) => {
    navigate(buildVehicleDetailsPath(id));
  };

  const handlePlayAlert = (_id: string) => {};
  const handleMoreAlert = (_id: string) => {};

  return {
    user: mockDashboardData.user,
    menuItems: mockDashboardData.menuItems,
    activeMenuId,
    isSidebarOpen,
    toggleSidebar,
    setSidebarOpen,
    setActiveMenuId,
    handleFullscreen,
    video: mockAnalysisVideo,
    formattedStats,
    filters,
    setSearch,
    setAlertTypeFilter,
    setSeverityFilter,
    alerts: paginatedAlerts,
    totalCount: filteredAlerts.length,
    currentPage: safePage,
    totalPages,
    pageNumbers,
    goToPage,
    handleViewProcessedVideo,
    handleCloseVideoPlayer,
    isPlayerOpen,
    handleRowClick,
    handleViewAlert,
    handlePlayAlert,
    handleMoreAlert,
  };
}