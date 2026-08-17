import { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { blacklistService, type CreateBlacklistRequest } from "../../blacklist";
import {
  mockDashboardData,
  useDashboardStore,
} from "../../dashboard";
import type {
  CreateVehicleRequest,
  UpdateVehicleRequest,
} from "../api/vehicles.types";
import {
  VEHICLES_PAGE_SIZE,
  vehiclesQueryKeys,
  type Vehicle,
  type VehiclesFilters,
} from "../models/vehicle.types";
import { vehiclesService } from "../services/VehiclesService";
import { useVehiclesStore } from "../store/vehiclesStore";

function formatNumber(value: number): string {
  return new Intl.NumberFormat("ar-EG").format(value);
}

export function useVehiclesViewModel() {
  const isSidebarOpen = useDashboardStore((s) => s.isSidebarOpen);
  const toggleSidebar = useDashboardStore((s) => s.toggleSidebar);
  const setSidebarOpen = useDashboardStore((s) => s.setSidebarOpen);
  const setActiveMenuId = useDashboardStore((s) => s.setActiveMenuId);

  const selectedVehicles = useVehiclesStore((s) => s.selectedVehicles);
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
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);
  const [deletingVehicle, setDeletingVehicle] = useState<Vehicle | null>(null);
  const [blacklistingVehicle, setBlacklistingVehicle] =
    useState<Vehicle | null>(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    setActiveMenuId("vehicles");
  }, [setActiveMenuId]);

  const vehiclesQuery = useQuery({
    queryKey: vehiclesQueryKeys.list(),
    queryFn: () => vehiclesService.getVehicles(),
  });

  const allVehicles = useMemo(
    () => vehiclesQuery.data ?? [],
    [vehiclesQuery.data],
  );

  const createVehicleMutation = useMutation({
    mutationFn: (payload: CreateVehicleRequest) =>
      vehiclesService.createVehicle(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: vehiclesQueryKeys.all,
      });
      setIsAddModalOpen(false);
    },
  });

  const updateVehicleMutation = useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: UpdateVehicleRequest;
    }) => vehiclesService.updateVehicle(id, payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: vehiclesQueryKeys.all,
      });
      setEditingVehicle(null);
    },
  });

  const deleteVehicleMutation = useMutation({
    mutationFn: (id: string) => vehiclesService.deleteVehicle(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: vehiclesQueryKeys.all,
      });
      setDeletingVehicle(null);
    },
  });

  const addToBlacklistMutation = useMutation({
    mutationFn: (payload: CreateBlacklistRequest) =>
      blacklistService.addToBlacklist(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: vehiclesQueryKeys.all,
      });
      setBlacklistingVehicle(null);
    },
  });

  const typeOptions = useMemo(() => {
    const unique = Array.from(
      new Set(allVehicles.map((vehicle) => vehicle.type).filter(Boolean)),
    ).sort((a, b) => a.localeCompare(b, "ar"));
    return ["الكل", ...unique];
  }, [allVehicles]);

  const colorOptions = useMemo(() => {
    const unique = Array.from(
      new Set(allVehicles.map((vehicle) => vehicle.color).filter(Boolean)),
    ).sort((a, b) => a.localeCompare(b, "ar"));
    return ["الكل", ...unique];
  }, [allVehicles]);

  const filteredVehicles = useMemo(() => {
    const query = filters.search.trim().toLowerCase();

    return allVehicles.filter((vehicle) => {
      const matchesSearch =
        query.length === 0 ||
        vehicle.plateNumber.toLowerCase().includes(query) ||
        vehicle.ownerName.toLowerCase().includes(query) ||
        vehicle.model.toLowerCase().includes(query) ||
        vehicle.country.code.toLowerCase().includes(query) ||
        vehicle.type.toLowerCase().includes(query) ||
        vehicle.color.toLowerCase().includes(query);

      const matchesType =
        filters.type === "الكل" || vehicle.type === filters.type;

      const matchesColor =
        filters.color === "الكل" || vehicle.color === filters.color;

      return matchesSearch && matchesType && matchesColor;
    });
  }, [allVehicles, filters]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredVehicles.length / VEHICLES_PAGE_SIZE),
  );
  const safePage = Math.min(currentPage, totalPages);

  const paginatedVehicles = useMemo(() => {
    const start = (safePage - 1) * VEHICLES_PAGE_SIZE;
    return filteredVehicles.slice(start, start + VEHICLES_PAGE_SIZE);
  }, [filteredVehicles, safePage]);

  const pageNumbers = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages],
  );

  const formattedStats = useMemo(() => {
    const total = allVehicles.length;
    const blacklisted = allVehicles.filter((v) => v.isBlacklisted).length;
    const blacklistPercent =
      total === 0 ? 0 : Math.round((blacklisted / total) * 1000) / 10;

    return [
      {
        id: "total",
        title: "إجمالي المركبات",
        value: total,
        subtitle: "في قاعدة البيانات",
        changePercent: 0,
        icon: "vehicles" as const,
        gradient: "from-blue-600/40 to-indigo-700/30",
        displayValue: formatNumber(total),
        isPositive: true,
        displayChange: `${formatNumber(total)}`,
      },
      {
        id: "blacklist",
        title: "المركبات في القائمة السوداء",
        value: blacklisted,
        subtitle: "تحتاج متابعة",
        changePercent: blacklistPercent,
        icon: "blacklist" as const,
        gradient: "from-rose-600/40 to-orange-700/30",
        displayValue: formatNumber(blacklisted),
        isPositive: false,
        displayChange: `${blacklistPercent}%`,
      },
    ];
  }, [allVehicles]);

  const pageIds = paginatedVehicles.map((v) => v.id);
  const allPageSelected =
    pageIds.length > 0 && pageIds.every((id) => selectedVehicles.includes(id));

  const hasActiveFilters =
    filters.search.trim().length > 0 ||
    filters.type !== "الكل" ||
    filters.color !== "الكل";

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
      selectAllVehicles([...new Set([...selectedVehicles, ...pageIds])]);
    }
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
    activeMenuId: "vehicles",
    isSidebarOpen,
    toggleSidebar,
    setSidebarOpen,
    setActiveMenuId,
    handleFullscreen,
    formattedStats,
    filters,
    typeOptions,
    colorOptions,
    setSearch,
    setTypeFilter,
    setColorFilter,
    vehicles: paginatedVehicles,
    totalCount: filteredVehicles.length,
    totalVehiclesCount: allVehicles.length,
    hasActiveFilters,
    selectedVehicles,
    toggleVehicleSelection,
    allPageSelected,
    toggleSelectAllOnPage,
    currentPage: safePage,
    totalPages,
    pageNumbers,
    goToPage,
    isLoading: vehiclesQuery.isLoading,
    isError: vehiclesQuery.isError,
    isFetching: vehiclesQuery.isFetching,
    refetch: vehiclesQuery.refetch,

    handleAddVehicle: () => setIsAddModalOpen(true),
    isAddModalOpen,
    isSavingVehicle: createVehicleMutation.isPending,
    handleCloseAddModal: () => {
      setIsAddModalOpen(false);
      createVehicleMutation.reset();
    },
    handleCreateVehicle: (payload: CreateVehicleRequest) => {
      createVehicleMutation.mutate(payload);
    },

    handleEditVehicle: (id: string) => {
      const vehicle = allVehicles.find((v) => v.id === id) ?? null;
      setEditingVehicle(vehicle);
    },
    editingVehicle,
    isSavingEdit: updateVehicleMutation.isPending,
    handleCloseEditModal: () => {
      setEditingVehicle(null);
      updateVehicleMutation.reset();
    },
    handleUpdateVehicle: (payload: UpdateVehicleRequest) => {
      if (!editingVehicle) return;
      updateVehicleMutation.mutate({ id: editingVehicle.id, payload });
    },

    handleDeleteVehicle: (id: string) => {
      const vehicle = allVehicles.find((v) => v.id === id) ?? null;
      setDeletingVehicle(vehicle);
    },
    deletingVehicle,
    isDeletingVehicle: deleteVehicleMutation.isPending,
    handleCloseDeleteModal: () => {
      setDeletingVehicle(null);
      deleteVehicleMutation.reset();
    },
    handleConfirmDeleteVehicle: () => {
      if (!deletingVehicle) return;
      deleteVehicleMutation.mutate(deletingVehicle.id);
    },

    handleAddToBlacklist: (id: string) => {
      const vehicle = allVehicles.find((v) => v.id === id) ?? null;
      setBlacklistingVehicle(vehicle);
    },
    blacklistingVehicle,
    isAddingToBlacklist: addToBlacklistMutation.isPending,
    handleCloseBlacklistModal: () => {
      setBlacklistingVehicle(null);
      addToBlacklistMutation.reset();
    },
    handleConfirmAddToBlacklist: (payload: {
      status: CreateBlacklistRequest["status"];
      priority: CreateBlacklistRequest["priority"];
      wanted: boolean;
    }) => {
      if (!blacklistingVehicle) return;
      addToBlacklistMutation.mutate({
        vehicle_id: Number(blacklistingVehicle.id),
        ...payload,
      });
    },
  };
}