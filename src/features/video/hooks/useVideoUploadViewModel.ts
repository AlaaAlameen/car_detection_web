import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
} from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  mockDashboardData,
  useDashboardStore,
} from "../../dashboard";
import { buildAnalysisResultsPath } from "../../analysis/routes/analysisRoutes";
import type { CreateVideoRequest } from "../api/videos.types";
import { videosQueryKeys } from "../constants/videos.constants";
import { DEFAULT_VIDEO_THUMBNAIL } from "../data/mockVideoData";
import type { SelectedVideoDisplay } from "../models/video.types";
import { videoService } from "../services/VideoService";
import { buildOriginalPath } from "../utils/buildOriginalPath";
import { formatDuration } from "../utils/formatDuration";
import { readVideoDurationSeconds } from "../utils/readVideoDuration";
import {
  VIDEO_FORMAT_LABELS,
  VIDEO_UPLOAD_CONFIG,
} from "../validators/videoUpload.constants";
import { validateVideoFile } from "../validators/videoUploadSchema";

export type UploadFeedback = {
  type: "success" | "error";
  message: string;
};

function formatFileSize(bytes: number): string {
  if (bytes < 1024 ** 2) {
    return `${Math.round(bytes / 1024)} KB`;
  }
  return `${Math.round(bytes / 1024 ** 2)} MB`;
}

function getFileExtension(name: string): string {
  return name.split(".").pop()?.toUpperCase() ?? "—";
}

export function useVideoUploadViewModel() {
  const navigate = useNavigate();
  const isSidebarOpen = useDashboardStore((s) => s.isSidebarOpen);
  const toggleSidebar = useDashboardStore((s) => s.toggleSidebar);
  const setSidebarOpen = useDashboardStore((s) => s.setSidebarOpen);
  const setActiveMenuId = useDashboardStore((s) => s.setActiveMenuId);

  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<UploadFeedback | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [durationSeconds, setDurationSeconds] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] =
    useState<SelectedVideoDisplay | null>(null);

  useEffect(() => {
    setActiveMenuId("video");
  }, [setActiveMenuId]);

  const recentVideosQuery = useQuery({
    queryKey: videosQueryKeys.recent(),
    queryFn: () => videoService.getRecentVideos(),
  });

  const recentVideos = useMemo(
    () => recentVideosQuery.data ?? [],
    [recentVideosQuery.data],
  );

  const resetFileInput = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedFile(null);
    setDurationSeconds(null);
    setSelectedVideo(null);
    resetFileInput();
  }, [resetFileInput]);

  const createVideoMutation = useMutation({
    mutationFn: (payload: CreateVideoRequest) =>
      videoService.createVideo(payload),
    onSuccess: async () => {
      setFeedback({
        type: "success",
        message: "تم بدء معالجة الفيديو بنجاح",
      });
      clearSelection();
      setValidationError(null);
      await queryClient.invalidateQueries({ queryKey: videosQueryKeys.all });
    },
    onError: () => {
      setFeedback({
        type: "error",
        message: "فشل بدء معالجة الفيديو، يرجى المحاولة مرة أخرى.",
      });
    },
  });

  const processFile = useCallback(async (file: File) => {
    const validation = validateVideoFile(file);

    if (!validation.success) {
      setValidationError(validation.error ?? "ملف غير صالح");
      setFeedback(null);
      clearSelection();
      return;
    }

    setValidationError(null);
    setFeedback(null);

    try {
      const duration = await readVideoDurationSeconds(file);

      setSelectedFile(file);
      setDurationSeconds(duration);
      setSelectedVideo({
        name: file.name,
        format: getFileExtension(file.name),
        formattedSize: formatFileSize(file.size),
        duration: formatDuration(duration),
        thumbnailUrl: DEFAULT_VIDEO_THUMBNAIL,
      });
    } catch {
      clearSelection();
      setValidationError(
        "تعذر قراءة مدة الفيديو. يرجى اختيار ملف فيديو صالح.",
      );
    }
  }, [clearSelection]);

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
    clearSelection();
    setValidationError(null);
    setFeedback(null);
    createVideoMutation.reset();
  }, [clearSelection, createVideoMutation]);

  const startProcessing = useCallback(() => {
    if (
      !selectedFile ||
      durationSeconds === null ||
      createVideoMutation.isPending
    ) {
      return;
    }

    setFeedback(null);

    const payload: CreateVideoRequest = {
      original_path: buildOriginalPath(selectedFile.name),
      name: selectedFile.name,
      duration: durationSeconds,
      size: selectedFile.size,
    };

    createVideoMutation.mutate(payload);
  }, [selectedFile, durationSeconds, createVideoMutation]);

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

  const isProcessing = createVideoMutation.isPending;
  const canStartProcessing =
    Boolean(selectedFile) &&
    durationSeconds !== null &&
    Boolean(selectedVideo) &&
    !isProcessing;

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
    feedback,
    selectedVideo,
    isProcessing,
    recentVideos,
    isRecentVideosLoading: recentVideosQuery.isLoading,
    isRecentVideosError: recentVideosQuery.isError,
    refetchRecentVideos: recentVideosQuery.refetch,
    canStartProcessing,
    openFilePicker,
    handleFileChange,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    clearSelectedVideo,
    startProcessing,
    handleRowClick: (id: string) => {
    navigate(buildAnalysisResultsPath(id)); 
    },
  };
}
