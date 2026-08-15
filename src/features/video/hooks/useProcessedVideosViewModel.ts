import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockDashboardData, useDashboardStore } from "../../dashboard";
import {
  mockAllVideos,
  statusLabelToKey,
  VIDEOS_PAGE_SIZE,
} from "../data/mockVideoData";
import { VideoRoutes } from "../routes/videoRoutes";
import type { VideoFile } from "../models/video.types";

function formatNumber(value: number): string {
  return new Intl.NumberFormat("ar-EG").format(value);
}

export function useProcessedVideosViewModel() {
  const navigate = useNavigate();
  const isSidebarOpen = useDashboardStore((s) => s.isSidebarOpen);
  const toggleSidebar = useDashboardStore((s) => s.toggleSidebar);
  const setSidebarOpen = useDashboardStore((s) => s.setSidebarOpen);
  const setActiveMenuId = useDashboardStore((s) => s.setActiveMenuId);

  const [videos] = useState<VideoFile[]>(mockAllVideos);
  const [search, setSearchState] = useState("");
  const [status, setStatusState] = useState("الكل");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setActiveMenuId("processedVideos");
  }, [setActiveMenuId]);

  const filteredVideos = useMemo(() => {
    const query = search.trim().toLowerCase();

    return videos.filter((video) => {
      const matchesSearch =
        query.length === 0 || video.name.toLowerCase().includes(query);

      const matchesStatus =
        status === "الكل" || video.status === statusLabelToKey[status];

      return matchesSearch && matchesStatus;
    });
  }, [videos, search, status]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredVideos.length / VIDEOS_PAGE_SIZE),
  );
  const safePage = Math.min(currentPage, totalPages);

  const paginatedVideos = useMemo(() => {
    const start = (safePage - 1) * VIDEOS_PAGE_SIZE;
    return filteredVideos.slice(start, start + VIDEOS_PAGE_SIZE);
  }, [filteredVideos, safePage]);

  const pageNumbers = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages],
  );

  const stats = useMemo(() => {
    const total = videos.length;
    const completed = videos.filter((v) => v.status === "completed").length;
    const processing = videos.filter((v) => v.status === "processing").length;
    const failed = videos.filter((v) => v.status === "failed").length;

    return [
      {
        id: "total",
        title: "إجمالي الفيديوهات",
        displayValue: formatNumber(total),
        subtitle: "منذ بداية التشغيل",
        displayChange: "",
        isPositive: true,
        gradient: "from-blue-600/40 to-indigo-700/30",
        icon: "processedVideos" as const,
      },
      {
        id: "completed",
        title: "مكتملة",
        displayValue: formatNumber(completed),
        subtitle: "تمت معالجتها بنجاح",
        displayChange: "",
        isPositive: true,
        gradient: "from-emerald-600/40 to-teal-700/30",
        icon: "processedVideos" as const,
      },
      {
        id: "processing",
        title: "قيد المعالجة",
        displayValue: formatNumber(processing),
        subtitle: "جارٍ تحليلها الآن",
        displayChange: "",
        isPositive: true,
        gradient: "from-amber-600/40 to-yellow-700/30",
        icon: "video" as const,
      },
      {
        id: "failed",
        title: "فشلت",
        displayValue: formatNumber(failed),
        subtitle: "تحتاج إعادة رفع",
        displayChange: "",
        isPositive: false,
        gradient: "from-rose-600/40 to-orange-700/30",
        icon: "alerts" as const,
      },
    ];
  }, [videos]);

  const setSearch = (value: string) => {
    setSearchState(value);
    setCurrentPage(1);
  };

  const setStatus = (value: string) => {
    setStatusState(value);
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

  const handleUploadClick = () => {
    navigate(VideoRoutes.upload);
  };

  return {
    user: mockDashboardData.user,
    menuItems: mockDashboardData.menuItems,
    activeMenuId: "processedVideos",
    isSidebarOpen,
    toggleSidebar,
    setSidebarOpen,
    setActiveMenuId,
    handleFullscreen,
    stats,
    search,
    status,
    setSearch,
    setStatus,
    videos: paginatedVideos,
    totalCount: filteredVideos.length,
    currentPage: safePage,
    totalPages,
    pageNumbers,
    goToPage,
    handleUploadClick,
    handlePreviewVideo: (_id: string) => {},
    handlePlayVideo: (_id: string) => {},
    handleMoreVideo: (_id: string) => {},
  };
}