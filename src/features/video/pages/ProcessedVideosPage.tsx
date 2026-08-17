import { DashboardLayout, CardContainer } from "../../dashboard";
import {
  VehiclesEmptyState,
  VehiclesErrorState,
  VehiclesPagination,
  VehiclesTableSkeleton,
} from "../../vehicles";
import { useProcessedVideosViewModel } from "../hooks/useProcessedVideosViewModel";
import {
  VideosFilterBar,
  VideosHeader,
  VideosStats,
  VideosTable,
} from "../components";

export function ProcessedVideosPage() {
  const vm = useProcessedVideosViewModel();

  const emptyMessage = vm.hasActiveFilters
    ? "لا توجد فيديوهات مطابقة للبحث"
    : "لا توجد فيديوهات معالجة";

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

          {vm.isLoading ? (
            <VehiclesTableSkeleton message="جاري تحميل الفيديوهات..." />
          ) : vm.isError ? (
            <VehiclesErrorState
              message="تعذر تحميل بيانات الفيديوهات"
              onRetry={() => void vm.refetch()}
            />
          ) : vm.totalVideosCount === 0 || vm.totalCount === 0 ? (
            <VehiclesEmptyState message={emptyMessage} />
          ) : (
            <>
              <VideosTable
                videos={vm.videos}
                onRowClick={vm.handleRowClick}
              />

              <VehiclesPagination
                currentPage={vm.currentPage}
                totalPages={vm.totalPages}
                pageNumbers={vm.pageNumbers}
                totalCount={vm.totalCount}
                onPageChange={vm.goToPage}
              />
            </>
          )}
        </CardContainer>
      </div>
    </DashboardLayout>
  );
}
