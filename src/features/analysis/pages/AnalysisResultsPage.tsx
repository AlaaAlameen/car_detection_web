import { DashboardLayout, CardContainer } from "../../dashboard";
import { VehiclesPagination } from "../../vehicles";
import { useAnalysisResultsViewModel } from "../hooks/useAnalysisResultsViewModel";
import { ANALYSIS_PAGE_SIZE } from "../data/mockAnalysisData";
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
      {vm.isPlayerOpen && (
        <VideoPlayerModal
          video={vm.video}
          onClose={vm.handleCloseVideoPlayer}
        />
      )}

      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 sm:gap-5">
        <AnalysisResultsHeader />

        <CardContainer>
          <VideoSummaryCard
            video={vm.video}
            onViewProcessed={vm.handleViewProcessedVideo}
          />
        </CardContainer>

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
        </CardContainer>
      </div>
    </DashboardLayout>
  );
}
