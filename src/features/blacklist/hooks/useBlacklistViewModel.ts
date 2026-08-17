import { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  mockDashboardData,
  useDashboardStore,
} from "../../dashboard";
import type { UpdateBlacklistRequest } from "../api/blacklist.types";
import {
  BLACKLIST_DEFAULT_PAGE_SIZE,
  blacklistQueryKeys,
  type BlacklistedVehicle,
  type BlacklistFilters,
} from "../models/blacklist.types";
import { blacklistService } from "../services/BlacklistService";

function formatNumber(value: number): string {
  return new Intl.NumberFormat("ar-EG").format(value);
}

function toPercent(count: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((count / total) * 1000) / 10;
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
  const [editingEntry, setEditingEntry] = useState<BlacklistedVehicle | null>(
    null,
  );
  const [deletingEntry, setDeletingEntry] =
    useState<BlacklistedVehicle | null>(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    setActiveMenuId("blacklist");
  }, [setActiveMenuId]);

  const blacklistQuery = useQuery({
    queryKey: blacklistQueryKeys.list(),
    queryFn: () => blacklistService.getBlacklist(),
  });

  const allEntries = useMemo(
    () => blacklistQuery.data ?? [],
    [blacklistQuery.data],
  );

  const updateMutation = useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: UpdateBlacklistRequest;
    }) => blacklistService.updateBlacklistEntry(id, payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: blacklistQueryKeys.all,
      });
      setEditingEntry(null);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => blacklistService.deleteBlacklistEntry(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: blacklistQueryKeys.all,
      });
      setDeletingEntry(null);
    },
  });

  const severityOptions = useMemo(() => {
    const unique = Array.from(
      new Set(allEntries.map((entry) => entry.severity)),
    ).sort((a, b) => a.localeCompare(b, "ar"));
    return ["الكل", ...unique];
  }, [allEntries]);

  const typeOptions = useMemo(() => {
    const unique = Array.from(
      new Set(allEntries.map((entry) => entry.type).filter(Boolean)),
    ).sort((a, b) => a.localeCompare(b, "ar"));
    return ["الكل", ...unique];
  }, [allEntries]);

  const colorOptions = useMemo(() => {
    const unique = Array.from(
      new Set(allEntries.map((entry) => entry.color).filter(Boolean)),
    ).sort((a, b) => a.localeCompare(b, "ar"));
    return ["الكل", ...unique];
  }, [allEntries]);

  const filteredEntries = useMemo(() => {
    const query = filters.search.trim().toLowerCase();

    return allEntries.filter((entry) => {
      const matchesSearch =
        query.length === 0 ||
        entry.plateNumber.toLowerCase().includes(query) ||
        entry.ownerName.toLowerCase().includes(query) ||
        entry.type.toLowerCase().includes(query) ||
        entry.color.toLowerCase().includes(query) ||
        entry.reason.toLowerCase().includes(query);

      const matchesSeverity =
        filters.severity === "الكل" || entry.severity === filters.severity;

      const matchesType =
        filters.type === "الكل" || entry.type === filters.type;

      const matchesColor =
        filters.color === "الكل" || entry.color === filters.color;

      return matchesSearch && matchesSeverity && matchesType && matchesColor;
    });
  }, [allEntries, filters]);

  const totalCount = filteredEntries.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedEntries = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return filteredEntries.slice(start, start + pageSize);
  }, [filteredEntries, safePage, pageSize]);

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

  const formattedStats = useMemo(() => {
    const total = allEntries.length;
    const low = allEntries.filter((e) => e.priority === "low").length;
    const medium = allEntries.filter((e) => e.priority === "medium").length;
    const high = allEntries.filter((e) => e.priority === "high").length;

    const lowPercent = toPercent(low, total);
    const mediumPercent = toPercent(medium, total);
    const highPercent = toPercent(high, total);

    return [
      {
        id: "low",
        title: "منخفضة الخطورة",
        value: low,
        subtitle: `${lowPercent}% من الإجمالي`,
        changePercent: lowPercent,
        icon: "units" as const,
        gradient: "from-emerald-600/40 to-teal-700/30",
        isPositive: true,
        displayValue: formatNumber(low),
        displayChange: `${lowPercent}%`,
      },
      {
        id: "medium",
        title: "متوسطة الخطورة",
        value: medium,
        subtitle: `${mediumPercent}% من الإجمالي`,
        changePercent: mediumPercent,
        icon: "scans" as const,
        gradient: "from-amber-600/40 to-yellow-700/30",
        isPositive: false,
        displayValue: formatNumber(medium),
        displayChange: `${mediumPercent}%`,
      },
      {
        id: "high",
        title: "عالية الخطورة",
        value: high,
        subtitle: `${highPercent}% من الإجمالي`,
        changePercent: highPercent,
        icon: "wanted" as const,
        gradient: "from-rose-600/40 to-orange-700/30",
        isPositive: false,
        displayValue: formatNumber(high),
        displayChange: `${highPercent}%`,
      },
      {
        id: "total",
        title: "إجمالي المركبات بالقائمة السوداء",
        value: total,
        subtitle: "جميع المركبات المدرجة",
        changePercent: 100,
        icon: "blacklist" as const,
        gradient: "from-blue-600/40 to-indigo-700/30",
        isPositive: true,
        displayValue: formatNumber(total),
        displayChange: total === 0 ? "0%" : "100%",
      },
    ];
  }, [allEntries]);

  const hasActiveFilters =
    filters.search.trim().length > 0 ||
    filters.severity !== "الكل" ||
    filters.type !== "الكل" ||
    filters.color !== "الكل";

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
    severityOptions,
    typeOptions,
    colorOptions,
    setSearch,
    setSeverityFilter,
    setTypeFilter,
    setColorFilter,
    resetFilters,
    vehicles: paginatedEntries,
    totalCount,
    totalEntriesCount: allEntries.length,
    hasActiveFilters,
    currentPage: safePage,
    totalPages,
    pageNumbers,
    pageSize,
    changePageSize,
    rangeStart,
    rangeEnd,
    goToPage,
    isLoading: blacklistQuery.isLoading,
    isError: blacklistQuery.isError,
    refetch: blacklistQuery.refetch,
    handleAdd: () => {},
    handleExport: () => {},
    handleEdit: (id: string) => {
      const entry = allEntries.find((e) => e.id === id) ?? null;
      setEditingEntry(entry);
    },
    handleDelete: (id: string) => {
      const entry = allEntries.find((e) => e.id === id) ?? null;
      setDeletingEntry(entry);
    },
    handleMore: (_id: string) => {},
    editingEntry,
    isSavingEdit: updateMutation.isPending,
    handleCloseEditModal: () => {
      setEditingEntry(null);
      updateMutation.reset();
    },
    handleSaveEdit: (payload: UpdateBlacklistRequest) => {
      if (!editingEntry) return;
      updateMutation.mutate({ id: editingEntry.id, payload });
    },
    deletingEntry,
    isDeleting: deleteMutation.isPending,
    handleCloseDeleteModal: () => {
      setDeletingEntry(null);
      deleteMutation.reset();
    },
    handleConfirmDelete: () => {
      if (!deletingEntry) return;
      deleteMutation.mutate(deletingEntry.id);
    },
  };
}