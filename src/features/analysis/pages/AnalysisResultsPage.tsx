import { DashboardLayout, CardContainer } from "../../dashboard";
import {
  VehiclesEmptyState,
  VehiclesErrorState,
  VehiclesPagination,
  VehiclesTableSkeleton,
} from "../../vehicles";
import { useAnalysisResultsViewModel } from "../hooks/useAnalysisResultsViewModel";
import { ANALYSIS_PAGE_SIZE } from "../constants/analysis.constants";
import {
  AnalysisAlertsTable,
  AnalysisFilterBar,
  AnalysisResultsHeader,
  AnalysisStatsGrid,
  VideoPlayerModal,
  VideoSummaryCard,
} from "../components";

export function AnalysisResultsPage() {
  const vm = useAnalysisResultsViewModel();
  const pageStartIndex = (vm.currentPage - 1) * ANALYSIS_PAGE_SIZE + 1;

  const emptyAlertsMessage = vm.hasActiveFilters
    ? "لا توجد تنبيهات مطابقة للبحث"
    : "لا توجد تنبيهات أو مخالفات مكتشفة لهذا الفيديو";

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
      {vm.isPlayerOpen && vm.video && (
        <VideoPlayerModal
          video={vm.video}
          videoUrl={vm.processedVideoUrl}
          isLoading={vm.isProcessedVideoLoading}
          isError={vm.isProcessedVideoError}
          onRetry={vm.retryProcessedVideo}
          onClose={vm.handleCloseVideoPlayer}
        />
      )}
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 sm:gap-5">
        <AnalysisResultsHeader />

        {vm.isLoading ? (
          <VehiclesTableSkeleton message="جاري تحميل نتائج التحليل..." />
        ) : vm.isError ? (
          <VehiclesErrorState
            message="تعذر تحميل نتائج تحليل الفيديو"
            onRetry={() => void vm.refetch()}
          />
        ) : vm.hasNoCompletedVideo ? (
          <VehiclesEmptyState message="لا توجد فيديوهات مكتملة لعرض نتائجها" />
        ) : (
          <>
            {vm.video && (
              <CardContainer>
                <VideoSummaryCard
                  video={vm.video}
                  onViewProcessed={vm.handleViewProcessedVideo}
                />
              </CardContainer>
            )}

            <AnalysisStatsGrid stats={vm.formattedStats} />

            <CardContainer
              title="تنبيهات المركبات"
              className="flex flex-col gap-4"
            >
              <AnalysisFilterBar
                filters={vm.filters}
                onSearchChange={vm.setSearch}
                onAlertTypeChange={vm.setAlertTypeFilter}
                onSeverityChange={vm.setSeverityFilter}
              />

              {vm.isEmptyDetections || vm.totalCount === 0 ? (
                <VehiclesEmptyState message={emptyAlertsMessage} />
              ) : (
                <>
                  <AnalysisAlertsTable
                    alerts={vm.alerts}
                    pageStartIndex={pageStartIndex}
                    onRowClick={vm.handleRowClick}
                    onView={vm.handleViewAlert}
                    onPlay={vm.handlePlayAlert}
                    onMore={vm.handleMoreAlert}
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
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
