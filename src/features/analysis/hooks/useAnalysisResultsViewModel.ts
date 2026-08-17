import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
  mockDashboardData,
  useDashboardStore,
} from "../../dashboard";
import { videosQueryKeys } from "../../video/constants/videos.constants";
import { videoService } from "../../video/services/VideoService";
import {
  ANALYSIS_PAGE_SIZE,
  analysisQueryKeys,
} from "../constants/analysis.constants";
import type { AnalysisFilters } from "../models/analysis.types";
import {
  buildAnalysisResultsPath,
  buildVehicleDetailsPath,
} from "../routes/analysisRoutes";
import { analysisService } from "../services/AnalysisService";
import { buildAnalysisStats } from "../utils/buildAnalysisStats";
import {
  findLatestCompletedVideo,
  mapVideoFileToAnalysisSummary,
} from "../utils/mapVideoToAnalysisSummary";

function formatNumber(value: number): string {
  return new Intl.NumberFormat("ar-EG").format(value);
}

function parseVideoId(raw: string | undefined): number | null {
  if (!raw) return null;
  const id = Number(raw);
  if (!Number.isFinite(id) || id <= 0) return null;
  return id;
}

export function useAnalysisResultsViewModel() {
  const navigate = useNavigate();
  const { videoId: videoIdParam } = useParams<{ videoId?: string }>();
  const parsedVideoId = parseVideoId(videoIdParam);

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

  const videosQuery = useQuery({
    queryKey: videosQueryKeys.list(),
    queryFn: () => videoService.getVideos(),
  });

  useEffect(() => {
    if (parsedVideoId != null) return;
    if (videosQuery.isLoading || videosQuery.isError) return;
    if (!videosQuery.data) return;

    const latest = findLatestCompletedVideo(videosQuery.data);
    if (latest) {
      navigate(buildAnalysisResultsPath(latest.id), { replace: true });
    }
  }, [
    parsedVideoId,
    videosQuery.data,
    videosQuery.isLoading,
    videosQuery.isError,
    navigate,
  ]);

  const detectionsQuery = useQuery({
    queryKey: analysisQueryKeys.detections(parsedVideoId ?? 0),
    queryFn: () => analysisService.getVideoDetections(parsedVideoId as number),
    enabled: parsedVideoId != null,
  });

  const processedVideoQuery = useQuery({
    queryKey: videosQueryKeys.processed(parsedVideoId ?? 0),
    queryFn: () => videoService.getProcessedVideoUrl(parsedVideoId as number),
    enabled: isPlayerOpen && parsedVideoId != null,
  });

  const selectedVideoFile = useMemo(() => {
    if (parsedVideoId == null || !videosQuery.data) return null;
    return (
      videosQuery.data.find((video) => video.id === String(parsedVideoId)) ??
      null
    );
  }, [parsedVideoId, videosQuery.data]);

  const video = useMemo(() => {
    if (selectedVideoFile) {
      return mapVideoFileToAnalysisSummary(selectedVideoFile);
    }
    return null;
  }, [selectedVideoFile]);

  const alerts = useMemo(
    () => detectionsQuery.data ?? [],
    [detectionsQuery.data],
  );

  const filteredAlerts = useMemo(() => {
    const query = filters.search.trim().toLowerCase();

    return alerts.filter((alert) => {
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
  }, [alerts, filters]);

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

  const formattedStats = useMemo(() => {
    const stats = buildAnalysisStats(alerts);
    return stats.map((stat) => ({
      ...stat,
      displayValue: formatNumber(stat.value),
      displayChange: `${stat.percent}%`,
    }));
  }, [alerts]);

  const hasActiveFilters =
    filters.search.trim().length > 0 ||
    filters.alertType !== "الكل" ||
    filters.severity !== "الكل";

  const isResolvingVideoId =
    parsedVideoId == null &&
    (videosQuery.isLoading ||
      (Boolean(videosQuery.data) &&
        Boolean(findLatestCompletedVideo(videosQuery.data ?? []))));

  const isLoading =
    isResolvingVideoId ||
    (parsedVideoId != null &&
      (videosQuery.isLoading || detectionsQuery.isLoading));

  const isError =
    (parsedVideoId != null &&
      (videosQuery.isError || detectionsQuery.isError)) ||
    (parsedVideoId == null && videosQuery.isError);

  const hasNoCompletedVideo =
    parsedVideoId == null &&
    !videosQuery.isLoading &&
    !videosQuery.isError &&
    videosQuery.isSuccess &&
    !findLatestCompletedVideo(videosQuery.data ?? []);

  const isEmptyDetections =
    parsedVideoId != null &&
    !detectionsQuery.isLoading &&
    !detectionsQuery.isError &&
    alerts.length === 0;

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
    const alert = alerts.find((a) => a.id === id);
    if (!alert || !alert.violationType) return;
    navigate(buildVehicleDetailsPath(id));
  };

  const handleViewAlert = (id: string) => {
    const alert = alerts.find((a) => a.id === id);
    if (!alert || !alert.violationType) return;
    navigate(buildVehicleDetailsPath(id));
  };

  const handlePlayAlert = (_id: string) => {};
  const handleMoreAlert = (_id: string) => {};

  const refetch = () => {
    void videosQuery.refetch();
    if (parsedVideoId != null) {
      void detectionsQuery.refetch();
    }
  };

  return {
    user: mockDashboardData.user,
    menuItems: mockDashboardData.menuItems,
    activeMenuId,
    isSidebarOpen,
    toggleSidebar,
    setSidebarOpen,
    setActiveMenuId,
    handleFullscreen,
    video,
    formattedStats,
    filters,
    setSearch,
    setAlertTypeFilter,
    setSeverityFilter,
    alerts: paginatedAlerts,
    totalCount: filteredAlerts.length,
    totalAlertsCount: alerts.length,
    hasActiveFilters,
    currentPage: safePage,
    totalPages,
    pageNumbers,
    goToPage,
    isLoading,
    isError,
    isEmptyDetections,
    hasNoCompletedVideo,
    refetch,
    handleViewProcessedVideo,
    handleCloseVideoPlayer,
    isPlayerOpen,
    processedVideoUrl: processedVideoQuery.data ?? null,
    isProcessedVideoLoading: processedVideoQuery.isLoading,
    isProcessedVideoError: processedVideoQuery.isError,
    retryProcessedVideo: () => void processedVideoQuery.refetch(),
    handleRowClick,
    handleViewAlert,
    handlePlayAlert,
    handleMoreAlert,
  };
}