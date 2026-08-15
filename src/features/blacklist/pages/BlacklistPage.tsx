import { DashboardLayout, CardContainer } from "../../dashboard";
import { VehiclesPagination } from "../../vehicles";
import { useBlacklistViewModel } from "../hooks/useBlacklistViewModel";
import { blacklistPageSizeOptions } from "../data/mockBlacklistData";
import {
  BlacklistFiltersBar,
  BlacklistHeader,
  BlacklistStats,
  BlacklistTable,
} from "../components";

export function BlacklistPage() {
  const vm = useBlacklistViewModel();

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
        <BlacklistHeader />

        <BlacklistStats stats={vm.formattedStats} />

        <CardContainer className="flex flex-col gap-4 p-4 sm:p-5">
          <BlacklistFiltersBar
            filters={vm.filters}
            onSearchChange={vm.setSearch}
            onSeverityChange={vm.setSeverityFilter}
            onTypeChange={vm.setTypeFilter}
            onColorChange={vm.setColorFilter}
            onReset={vm.resetFilters}
            onExport={vm.handleExport}
            onAddClick={vm.handleAdd}
          />

          <BlacklistTable
            vehicles={vm.vehicles}
            onEdit={vm.handleEdit}
            onDelete={vm.handleDelete}
            onMore={vm.handleMore}
          />

          <VehiclesPagination
            currentPage={vm.currentPage}
            totalPages={vm.totalPages}
            pageNumbers={vm.pageNumbers}
            totalCount={vm.totalCount}
            onPageChange={vm.goToPage}
            pageSize={vm.pageSize}
            pageSizeOptions={blacklistPageSizeOptions}
            onPageSizeChange={vm.changePageSize}
            rangeStart={vm.rangeStart}
            rangeEnd={vm.rangeEnd}
          />
        </CardContainer>
      </div>
    </DashboardLayout>
  );
}
