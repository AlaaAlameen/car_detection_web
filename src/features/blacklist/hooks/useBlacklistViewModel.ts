import { useEffect, useMemo, useState } from "react";
import {
  mockDashboardData,
  useDashboardStore,
} from "../../dashboard";
import {
  BLACKLIST_DEFAULT_PAGE_SIZE,
  mockBlacklistStats,
  mockBlacklistedVehicles,
} from "../data/mockBlacklistData";
import type { BlacklistFilters } from "../models/blacklist.types";

function formatNumber(value: number): string {
  return new Intl.NumberFormat("ar-EG").format(value);
}

const initialFilters: BlacklistFilters = {
  search: "",
  severity: "الكل",
  type: "الكل",
  color: "الكل",
};

export function useBlacklistViewModel() {
  const isSidebarOpen = useDashboardStore((s) => s.isSidebarOpen);
  const toggleSidebar = useDashboardStore((s) => s.toggleSidebar);
  const setSidebarOpen = useDashboardStore((s) => s.setSidebarOpen);
  const setActiveMenuId = useDashboardStore((s) => s.setActiveMenuId);

  const [filters, setFilters] = useState<BlacklistFilters>(initialFilters);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(BLACKLIST_DEFAULT_PAGE_SIZE);

  useEffect(() => {
    setActiveMenuId("blacklist");
  }, [setActiveMenuId]);

  const filteredVehicles = useMemo(() => {
    const query = filters.search.trim().toLowerCase();

    return mockBlacklistedVehicles.filter((vehicle) => {
      const matchesSearch =
        query.length === 0 ||
        vehicle.plateNumber.toLowerCase().includes(query) ||
        vehicle.ownerName.toLowerCase().includes(query);

      const matchesSeverity =
        filters.severity === "الكل" || vehicle.severity === filters.severity;

      const matchesType =
        filters.type === "الكل" || vehicle.type === filters.type;

      const matchesColor =
        filters.color === "الكل" || vehicle.color === filters.color;

      return matchesSearch && matchesSeverity && matchesType && matchesColor;
    });
  }, [filters]);

  const totalCount = filteredVehicles.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedVehicles = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return filteredVehicles.slice(start, start + pageSize);
  }, [filteredVehicles, safePage, pageSize]);

  const rangeStart = totalCount === 0 ? 0 : (safePage - 1) * pageSize + 1;
  const rangeEnd = Math.min(safePage * pageSize, totalCount);

  const pageNumbers = useMemo(() => {
    const maxVisible = 5;
    if (totalPages <= maxVisible + 2) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: number[] = [1];
    let start = Math.max(2, safePage - 1);
    let end = Math.min(totalPages - 1, safePage + 1);

    if (safePage <= 3) {
      start = 2;
      end = 4;
    }
    if (safePage >= totalPages - 2) {
      start = totalPages - 3;
      end = totalPages - 1;
    }

    if (start > 2) pages.push(-1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages - 1) pages.push(-2);
    pages.push(totalPages);
    return pages;
  }, [totalPages, safePage]);

  const formattedStats = useMemo(
    () =>
      mockBlacklistStats.map((stat) => ({
        ...stat,
        displayValue: formatNumber(stat.value),
        displayChange:
          stat.id === "total" ? "100%" : `${stat.changePercent}%`,
      })),
    [],
  );

  const setSearch = (search: string) => {
    setFilters((prev) => ({ ...prev, search }));
    setCurrentPage(1);
  };

  const setSeverityFilter = (severity: string) => {
    setFilters((prev) => ({ ...prev, severity }));
    setCurrentPage(1);
  };

  const setTypeFilter = (type: string) => {
    setFilters((prev) => ({ ...prev, type }));
    setCurrentPage(1);
  };

  const setColorFilter = (color: string) => {
    setFilters((prev) => ({ ...prev, color }));
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setFilters(initialFilters);
    setCurrentPage(1);
  };

  const changePageSize = (size: number) => {
    setPageSize(size);
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

  return {
    user: mockDashboardData.user,
    menuItems: mockDashboardData.menuItems,
    activeMenuId: "blacklist",
    isSidebarOpen,
    toggleSidebar,
    setSidebarOpen,
    setActiveMenuId,
    handleFullscreen,
    formattedStats,
    filters,
    setSearch,
    setSeverityFilter,
    setTypeFilter,
    setColorFilter,
    resetFilters,
    vehicles: paginatedVehicles,
    totalCount,
    currentPage: safePage,
    totalPages,
    pageNumbers,
    pageSize,
    changePageSize,
    rangeStart,
    rangeEnd,
    goToPage,
    handleAdd: () => {},
    handleExport: () => {},
    handleEdit: (_id: string) => {},
    handleDelete: (_id: string) => {},
    handleMore: (_id: string) => {},
  };
}
