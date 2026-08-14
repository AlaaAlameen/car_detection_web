import { useEffect, useMemo, useState } from "react";
import {
  mockDashboardData,
  useDashboardStore,
} from "../../dashboard";
import {
  mockVehicles,
  mockVehicleStats,
  VEHICLES_PAGE_SIZE,
} from "../data/mockVehiclesData";
import { useVehiclesStore } from "../store/vehiclesStore";
import type { VehiclesFilters } from "../models/vehicle.types";

function formatNumber(value: number): string {
  return new Intl.NumberFormat("ar-EG").format(value);
}

export function useVehiclesViewModel() {
  const isSidebarOpen = useDashboardStore((s) => s.isSidebarOpen);
  const toggleSidebar = useDashboardStore((s) => s.toggleSidebar);
  const setSidebarOpen = useDashboardStore((s) => s.setSidebarOpen);
  const setActiveMenuId = useDashboardStore((s) => s.setActiveMenuId);

  const selectedVehicles = useVehiclesStore((s) => s.selectedVehicles);
  const setVehicles = useVehiclesStore((s) => s.setVehicles);
  const toggleVehicleSelection = useVehiclesStore(
    (s) => s.toggleVehicleSelection,
  );
  const selectAllVehicles = useVehiclesStore((s) => s.selectAllVehicles);
  const clearSelection = useVehiclesStore((s) => s.clearSelection);

  const [filters, setFilters] = useState<VehiclesFilters>({
    search: "",
    type: "الكل",
    color: "الكل",
  });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setVehicles(mockVehicles);
    setActiveMenuId("vehicles");
  }, [setVehicles, setActiveMenuId]);

  const filteredVehicles = useMemo(() => {
    const query = filters.search.trim().toLowerCase();

    return mockVehicles.filter((vehicle) => {
      const matchesSearch =
        query.length === 0 ||
        vehicle.plateNumber.toLowerCase().includes(query) ||
        vehicle.ownerName.toLowerCase().includes(query);

      const matchesType =
        filters.type === "الكل" || vehicle.type === filters.type;

      const matchesColor =
        filters.color === "الكل" || vehicle.color === filters.color;

      return matchesSearch && matchesType && matchesColor;
    });
  }, [filters]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredVehicles.length / VEHICLES_PAGE_SIZE),
  );

  const safePage = Math.min(currentPage, totalPages);

  const paginatedVehicles = useMemo(() => {
    const start = (safePage - 1) * VEHICLES_PAGE_SIZE;
    return filteredVehicles.slice(start, start + VEHICLES_PAGE_SIZE);
  }, [filteredVehicles, safePage]);

  const pageNumbers = useMemo(() => {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }, [totalPages]);

  const formattedStats = useMemo(
    () =>
      mockVehicleStats.map((stat) => ({
        ...stat,
        displayValue: formatNumber(stat.value),
        isPositive: stat.changePercent >= 0,
        displayChange: `${stat.changePercent >= 0 ? "+" : ""}${stat.changePercent}%`,
      })),
    [],
  );

  const pageIds = paginatedVehicles.map((v) => v.id);
  const allPageSelected =
    pageIds.length > 0 && pageIds.every((id) => selectedVehicles.includes(id));

  const setSearch = (search: string) => {
    setFilters((prev) => ({ ...prev, search }));
    setCurrentPage(1);
    clearSelection();
  };

  const setTypeFilter = (type: string) => {
    setFilters((prev) => ({ ...prev, type }));
    setCurrentPage(1);
    clearSelection();
  };

  const setColorFilter = (color: string) => {
    setFilters((prev) => ({ ...prev, color }));
    setCurrentPage(1);
    clearSelection();
  };

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const toggleSelectAllOnPage = () => {
    if (allPageSelected) {
      selectAllVehicles(
        selectedVehicles.filter((id) => !pageIds.includes(id)),
      );
    } else {
      selectAllVehicles([
        ...new Set([...selectedVehicles, ...pageIds]),
      ]);
    }
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      void document.documentElement.requestFullscreen();
    } else {
      void document.exitFullscreen();
    }
  };

  const handleAddVehicle = () => {
    // Ready for future create flow / VehiclesService.createVehicle
  };

  const handleEditVehicle = (_id: string) => {
    // Ready for future edit flow
  };

  const handleDeleteVehicle = (_id: string) => {
    // Ready for future delete flow
  };

  return {
    user: mockDashboardData.user,
    menuItems: mockDashboardData.menuItems,
    activeMenuId: "vehicles",
    isSidebarOpen,
    toggleSidebar,
    setSidebarOpen,
    setActiveMenuId,
    handleFullscreen,
    formattedStats,
    filters,
    setSearch,
    setTypeFilter,
    setColorFilter,
    vehicles: paginatedVehicles,
    totalCount: filteredVehicles.length,
    selectedVehicles,
    toggleVehicleSelection,
    allPageSelected,
    toggleSelectAllOnPage,
    currentPage: safePage,
    totalPages,
    pageNumbers,
    goToPage,
    handleAddVehicle,
    handleEditVehicle,
    handleDeleteVehicle,
  };
}
