import { DashboardLayout, CardContainer } from "../../dashboard";
import {
  VehiclesEmptyState,
  VehiclesErrorState,
  VehiclesPagination,
  VehiclesTableSkeleton,
} from "../../vehicles";
import { useBlacklistViewModel } from "../hooks/useBlacklistViewModel";
import { blacklistPageSizeOptions } from "../models/blacklist.types";
import {
  BlacklistFiltersBar,
  BlacklistHeader,
  BlacklistStats,
  BlacklistTable,
  DeleteConfirmModal,
  EditBlacklistModal,
} from "../components";

export function BlacklistPage() {
  const vm = useBlacklistViewModel();

  const emptyMessage = vm.hasActiveFilters
    ? "لا توجد نتائج مطابقة للبحث أو الفلاتر"
    : "لا توجد مركبات في القائمة السوداء";

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
      {vm.editingEntry && (
        <EditBlacklistModal
          vehicle={vm.editingEntry}
          isSaving={vm.isSavingEdit}
          onSave={vm.handleSaveEdit}
          onClose={vm.handleCloseEditModal}
        />
      )}

      {vm.deletingEntry && (
        <DeleteConfirmModal
          vehicle={vm.deletingEntry}
          isDeleting={vm.isDeleting}
          onConfirm={vm.handleConfirmDelete}
          onClose={vm.handleCloseDeleteModal}
        />
      )}

      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 sm:gap-5">
        <BlacklistHeader />

        <BlacklistStats stats={vm.formattedStats} />

        <CardContainer className="flex flex-col gap-4 p-4 sm:p-5">
          <BlacklistFiltersBar
            filters={vm.filters}
            severityOptions={vm.severityOptions}
            typeOptions={vm.typeOptions}
            colorOptions={vm.colorOptions}
            onSearchChange={vm.setSearch}
            onSeverityChange={vm.setSeverityFilter}
            onTypeChange={vm.setTypeFilter}
            onColorChange={vm.setColorFilter}
            onReset={vm.resetFilters}
            onExport={vm.handleExport}
            onAddClick={vm.handleAdd}
          />

          {vm.isLoading ? (
            <VehiclesTableSkeleton message="جاري تحميل القائمة السوداء..." />
          ) : vm.isError ? (
            <VehiclesErrorState
              message="تعذر تحميل بيانات القائمة السوداء"
              onRetry={() => void vm.refetch()}
            />
          ) : vm.totalEntriesCount === 0 || vm.totalCount === 0 ? (
            <VehiclesEmptyState message={emptyMessage} />
          ) : (
            <>
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
            </>
          )}
        </CardContainer>
      </div>
    </DashboardLayout>
  );
}