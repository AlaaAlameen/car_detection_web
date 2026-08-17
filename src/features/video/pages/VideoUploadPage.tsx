import { DashboardLayout, CardContainer } from "../../dashboard";
import {
  VehiclesEmptyState,
  VehiclesErrorState,
  VehiclesTableSkeleton,
} from "../../vehicles";
import { useVideoUploadViewModel } from "../hooks/useVideoUploadViewModel";
import {
  RecentVideosTable,
  SelectedVideoCard,
  VideoUploadHeader,
  VideoUploadZone,
} from "../components";

export function VideoUploadPage() {
  const vm = useVideoUploadViewModel();

  return (
    <DashboardLayout
      user={vm.user}
      menuItems={vm.menuItems}
      activeMenuId={vm.activeMenuId}
      isSidebarOpen={vm.isSidebarOpen}
      onToggleSidebar={vm.toggleSidebar}
      onCloseSidebar={() => vm.setSidebarOpen(false)}
      onSelectMenu={vm.setActiveMenuId}
      onFullscreen={vm.handleFullscreen}
    >
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 sm:gap-5">
        <VideoUploadHeader />

        <CardContainer>
          <VideoUploadZone
            isDragging={vm.isDragging}
            supportedFormats={vm.uploadConfig.supportedFormats}
            maxSizeLabel={vm.uploadConfig.maxSizeLabel}
            accept={vm.uploadConfig.accept}
            validationError={vm.validationError}
            fileInputRef={vm.fileInputRef}
            onDragEnter={vm.handleDragEnter}
            onDragLeave={vm.handleDragLeave}
            onDragOver={vm.handleDragOver}
            onDrop={vm.handleDrop}
            onBrowseClick={vm.openFilePicker}
            onFileChange={vm.handleFileChange}
          />

          {vm.feedback && (
            <p
              className={`mt-3 text-sm ${
                vm.feedback.type === "success"
                  ? "text-emerald-400"
                  : "text-rose-400"
              }`}
              role="status"
            >
              {vm.feedback.message}
            </p>
          )}

          {vm.selectedVideo && (
            <SelectedVideoCard
              video={vm.selectedVideo}
              onRemove={vm.clearSelectedVideo}
              onStartProcessing={vm.startProcessing}
              isProcessing={vm.isProcessing}
              canStartProcessing={vm.canStartProcessing}
            />
          )}
        </CardContainer>

        <CardContainer title="الفيديوهات المرفوعة مؤخراً">
          {vm.isRecentVideosLoading ? (
            <VehiclesTableSkeleton message="جاري تحميل الفيديوهات..." />
          ) : vm.isRecentVideosError ? (
            <VehiclesErrorState
              message="تعذر تحميل الفيديوهات المرفوعة مؤخراً"
              onRetry={() => void vm.refetchRecentVideos()}
            />
          ) : vm.recentVideos.length === 0 ? (
            <VehiclesEmptyState message="لا توجد فيديوهات مرفوعة بعد" />
          ) : (
            <RecentVideosTable
            videos={vm.recentVideos}
            onRowClick={vm.handleRowClick}
          />
          )}
        </CardContainer>
      </div>
    </DashboardLayout>
  );
}