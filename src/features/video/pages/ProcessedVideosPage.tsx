import { DashboardLayout, CardContainer } from "../../dashboard";
import { VehiclesPagination } from "../../vehicles";
import { useProcessedVideosViewModel } from "../hooks/useProcessedVideosViewModel";
import {
  VideosFilterBar,
  VideosHeader,
  VideosStats,
  VideosTable,
} from "../components";

export function ProcessedVideosPage() {
  const vm = useProcessedVideosViewModel();

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
        <VideosHeader />

        <VideosStats stats={vm.stats} />

        <CardContainer className="flex flex-col gap-4 p-4 sm:p-5">
          <VideosFilterBar
            search={vm.search}
            status={vm.status}
            onSearchChange={vm.setSearch}
            onStatusChange={vm.setStatus}
            onUploadClick={vm.handleUploadClick}
          />

          <VideosTable
            videos={vm.videos}
            onPreview={vm.handlePreviewVideo}
            onPlay={vm.handlePlayVideo}
            onMore={vm.handleMoreVideo}
          />

          <VehiclesPagination
            currentPage={vm.currentPage}
            totalPages={vm.totalPages}
            pageNumbers={vm.pageNumbers}
            totalCount={vm.totalCount}
            onPageChange={vm.goToPage}
          />
        </CardContainer>
      </div>
    </DashboardLayout>
  );
}