import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  mockDashboardData,
  useDashboardStore,
} from "../../dashboard";
import {
  defaultVehicleDetails,
  mockVehicleDetailsMap,
} from "../data/mockVehicleDetailsData";
import { AnalysisRoutes } from "../routes/analysisRoutes";
import type {
  FormattedComparisonRow,
  VehicleDetailsSummaryCard,
} from "../models/vehicleDetails.types";

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

  const vehicle = useMemo(
    () => mockVehicleDetailsMap[id] ?? defaultVehicleDetails,
    [id],
  );

  const comparisonRows: FormattedComparisonRow[] = useMemo(
    () =>
      vehicle.comparisonRows.map((row) => ({
        ...row,
        confidenceLabel: `${row.confidence}%`,
        mismatchLabel: row.mismatch ? "TRUE" : "FALSE",
      })),
    [vehicle.comparisonRows],
  );

  const summaryCards: VehicleDetailsSummaryCard[] = useMemo(
    () => [
      { id: "message", title: "رسالة التنبيه", value: vehicle.alertMessage },
      { id: "type", title: "نوع التنبيه", value: String(vehicle.alertType) },
      { id: "severity", title: "درجة الخطورة", value: vehicle.severity },
      { id: "score", title: "Score", value: `${vehicle.score} / 100` },
    ],
    [vehicle],
  );

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
  };
}
