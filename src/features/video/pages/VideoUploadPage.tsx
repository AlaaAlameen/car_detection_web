import { DashboardLayout, CardContainer } from "../../dashboard";
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
          <RecentVideosTable
            videos={vm.recentVideos}
            onPreview={vm.handlePreviewVideo}
            onPlay={vm.handlePlayVideo}
            onMore={vm.handleMoreVideo}
          />
        </CardContainer>
      </div>
    </DashboardLayout>
  );
}
