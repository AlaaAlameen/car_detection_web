import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { mockDashboardData, useDashboardStore } from "../../dashboard";
import { AnalysisRoutes } from "../routes/analysisRoutes";
import type {
  FormattedComparisonRow,
  VehicleDetailsSummaryCard,
} from "../models/vehicleDetails.types";
import { analysisQueryKeys } from "../constants/analysis.constants";
import { analysisService } from "../services/AnalysisService";

function parseId(raw: string | undefined): number | null {
  if (!raw) return null;
  const id = Number(raw);
  if (!Number.isFinite(id) || id <= 0) return null;
  return id;
}

export function useVehicleDetailsViewModel() {
  const { id = "" } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const isSidebarOpen = useDashboardStore((s) => s.isSidebarOpen);
  const toggleSidebar = useDashboardStore((s) => s.toggleSidebar);
  const setSidebarOpen = useDashboardStore((s) => s.setSidebarOpen);
  const setActiveMenuId = useDashboardStore((s) => s.setActiveMenuId);

  useEffect(() => {
    setActiveMenuId("analysis");
  }, [setActiveMenuId]);

  const parsedId = parseId(id);

  useEffect(() => {
    if (parsedId == null) {
      // invalid id — navigate back to results
      navigate(AnalysisRoutes.results, { replace: true });
    }
  }, [parsedId, navigate]);

  const detailsQuery = useQuery({
    queryKey: analysisQueryKeys.details(id),
    queryFn: () => analysisService.getVehicleDetails(parsedId as number),
    enabled: parsedId != null,
  });

  const vehicle = detailsQuery.data ?? null;

  const comparisonRows: FormattedComparisonRow[] = useMemo(() => {
    if (!vehicle) return [];

    return vehicle.comparisonRows.map((row) => ({
      ...row,
      confidenceLabel: `${row.confidence}%`,
      mismatchLabel: row.mismatch ? "TRUE" : "FALSE",
    }));
  }, [vehicle]);

  const summaryCards: VehicleDetailsSummaryCard[] = useMemo(() => {
    if (!vehicle) return [];

    return [
      { id: "message", title: "رسالة التنبيه", value: vehicle.alertMessage },
      { id: "type", title: "نوع التنبيه", value: String(vehicle.alertType) },
      { id: "severity", title: "درجة الخطورة", value: vehicle.severity },
      { id: "score", title: "Score", value: `${vehicle.score} / 100` },
    ];
  }, [vehicle]);

  const handleBack = () => {
    navigate(AnalysisRoutes.results);
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
    activeMenuId: "analysis",
    isSidebarOpen,
    toggleSidebar,
    setSidebarOpen,
    setActiveMenuId,
    handleFullscreen,
    vehicleId: id,
    vehicle,
    comparisonRows,
    summaryCards,
    handleBack,
    isLoading: detailsQuery.isLoading,
    isError: detailsQuery.isError,
    error: detailsQuery.error,
    refetch: detailsQuery.refetch,
  };
}
