import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
} from "react";
import {
  mockDashboardData,
  useDashboardStore,
} from "../../dashboard";
import {
  DEFAULT_VIDEO_THUMBNAIL,
  mockRecentVideos,
} from "../data/mockVideoData";
import type { SelectedVideoDisplay, VideoFile } from "../models/video.types";
import {
  VIDEO_FORMAT_LABELS,
  VIDEO_UPLOAD_CONFIG,
} from "../validators/videoUpload.constants";
import { validateVideoFile } from "../validators/videoUploadSchema";

function formatFileSize(bytes: number): string {
  if (bytes < 1024 ** 2) {
    return `${Math.round(bytes / 1024)} KB`;
  }
  return `${Math.round(bytes / 1024 ** 2)} MB`;
}

function formatDuration(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return "--:--";
  }
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function getFileExtension(name: string): string {
  return name.split(".").pop()?.toUpperCase() ?? "—";
}

async function readVideoDuration(file: File): Promise<string> {
  return new Promise((resolve) => {
    const video = document.createElement("video");
    video.preload = "metadata";

    const objectUrl = URL.createObjectURL(file);

    video.onloadedmetadata = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(formatDuration(video.duration));
    };

    video.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      resolve("04:32");
    };

    video.src = objectUrl;
  });
}

export function useVideoUploadViewModel() {
  const isSidebarOpen = useDashboardStore((s) => s.isSidebarOpen);
  const toggleSidebar = useDashboardStore((s) => s.toggleSidebar);
  const setSidebarOpen = useDashboardStore((s) => s.setSidebarOpen);
  const setActiveMenuId = useDashboardStore((s) => s.setActiveMenuId);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] =
    useState<SelectedVideoDisplay | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [recentVideos, setRecentVideos] =
    useState<VideoFile[]>(mockRecentVideos);

  useEffect(() => {
    setActiveMenuId("video");
  }, [setActiveMenuId]);

  const processFile = useCallback(async (file: File) => {
    const validation = validateVideoFile(file);

    if (!validation.success) {
      setValidationError(validation.error ?? "ملف غير صالح");
      setSelectedVideo(null);
      return;
    }

    setValidationError(null);

    const duration = await readVideoDuration(file);

    setSelectedVideo({
      name: file.name,
      format: getFileExtension(file.name),
      formattedSize: formatFileSize(file.size),
      duration,
      thumbnailUrl: DEFAULT_VIDEO_THUMBNAIL,
    });
  }, []);

  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        void processFile(file);
      }
      event.target.value = "";
    },
    [processFile],
  );

  const openFilePicker = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleDragEnter = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setIsDragging(false);

      const file = event.dataTransfer.files?.[0];
      if (file) {
        void processFile(file);
      }
    },
    [processFile],
  );

  const clearSelectedVideo = useCallback(() => {
    setSelectedVideo(null);
    setValidationError(null);
  }, []);

  const startProcessing = useCallback(() => {
    if (!selectedVideo || isProcessing) return;

    setIsProcessing(true);

    window.setTimeout(() => {
      const newEntry: VideoFile = {
        id: `rv-${Date.now()}`,
        name: selectedVideo.name,
        size: 0,
        formattedSize: selectedVideo.formattedSize,
        duration: selectedVideo.duration,
        format: selectedVideo.format,
        thumbnailUrl: selectedVideo.thumbnailUrl,
        uploadedAt: new Date()
          .toLocaleString("ar-EG", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          })
          .replace(",", ""),
        status: "processing",
      };

      setRecentVideos((prev) => [newEntry, ...prev]);
      setSelectedVideo(null);
      setIsProcessing(false);
    }, 1200);
  }, [selectedVideo, isProcessing]);

  const handleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      void document.documentElement.requestFullscreen();
    } else {
      void document.exitFullscreen();
    }
  }, []);

  const uploadConfig = useMemo(
    () => ({
      supportedFormats: VIDEO_FORMAT_LABELS,
      maxSizeLabel: VIDEO_UPLOAD_CONFIG.maxSizeLabel,
      accept: VIDEO_UPLOAD_CONFIG.supportedFormats
        .map((f) => `.${f}`)
        .join(","),
    }),
    [],
  );

  return {
    user: mockDashboardData.user,
    menuItems: mockDashboardData.menuItems,
    activeMenuId: "video",
    isSidebarOpen,
    toggleSidebar,
    setSidebarOpen,
    setActiveMenuId,
    handleFullscreen,
    fileInputRef,
    uploadConfig,
    isDragging,
    validationError,
    selectedVideo,
    isProcessing,
    recentVideos,
    canStartProcessing: Boolean(selectedVideo) && !isProcessing,
    openFilePicker,
    handleFileChange,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    clearSelectedVideo,
    startProcessing,
    handlePreviewVideo: (_id: string) => {},
    handlePlayVideo: (_id: string) => {},
    handleMoreVideo: (_id: string) => {},
  };
}
