import {
  DashboardLayout,
  CardContainer,
} from "../../dashboard";
import { useVehiclesViewModel } from "../hooks/useVehiclesViewModel";
import {
  AddToBlacklistModal,
  DeleteVehicleModal,
  VehicleFormModal,
  VehiclesEmptyState,
  VehiclesErrorState,
  VehiclesFilterBar,
  VehiclesHeader,
  VehiclesPagination,
  VehiclesStats,
  VehiclesTable,
  VehiclesTableSkeleton,
} from "../components";

export function VehiclesPage() {
  const {
    user,
    menuItems,
    activeMenuId,
    isSidebarOpen,
    toggleSidebar,
    setSidebarOpen,
    setActiveMenuId,
    handleFullscreen,
    formattedStats,
    filters,
    typeOptions,
    colorOptions,
    setSearch,
    setTypeFilter,
    setColorFilter,
    vehicles,
    totalCount,
    totalVehiclesCount,
    hasActiveFilters,
    selectedVehicles,
    toggleVehicleSelection,
    allPageSelected,
    toggleSelectAllOnPage,
    currentPage,
    totalPages,
    pageNumbers,
    goToPage,
    isLoading,
    isError,
    refetch,
    handleAddVehicle,
    isAddModalOpen,
    isSavingVehicle,
    handleCloseAddModal,
    handleCreateVehicle,
    handleEditVehicle,
    editingVehicle,
    isSavingEdit,
    handleCloseEditModal,
    handleUpdateVehicle,
    handleDeleteVehicle,
    deletingVehicle,
    isDeletingVehicle,
    handleCloseDeleteModal,
    handleConfirmDeleteVehicle,
    handleAddToBlacklist,
    blacklistingVehicle,
    isAddingToBlacklist,
    handleCloseBlacklistModal,
    handleConfirmAddToBlacklist,
  } = useVehiclesViewModel();

  const emptyMessage = hasActiveFilters
    ? "لا توجد مركبات مطابقة للبحث"
    : "لا توجد مركبات في قاعدة البيانات";

  return (
    <DashboardLayout
      user={user}
      menuItems={menuItems}
      activeMenuId={activeMenuId}
      isSidebarOpen={isSidebarOpen}
      onToggleSidebar={toggleSidebar}
      onCloseSidebar={() => setSidebarOpen(false)}
      onSelectMenu={setActiveMenuId}
      onFullscreen={handleFullscreen}
    >
      {isAddModalOpen && (
        <VehicleFormModal
          mode="create"
          isSaving={isSavingVehicle}
          onSave={handleCreateVehicle}
          onClose={handleCloseAddModal}
        />
      )}

      {editingVehicle && (
        <VehicleFormModal
          mode="edit"
          vehicle={editingVehicle}
          isSaving={isSavingEdit}
          onSave={handleUpdateVehicle}
          onClose={handleCloseEditModal}
        />
      )}

      {deletingVehicle && (
        <DeleteVehicleModal
          vehicle={deletingVehicle}
          isDeleting={isDeletingVehicle}
          onConfirm={handleConfirmDeleteVehicle}
          onClose={handleCloseDeleteModal}
        />
      )}

      {blacklistingVehicle && (
        <AddToBlacklistModal
          vehicle={blacklistingVehicle}
          isSaving={isAddingToBlacklist}
          onSave={handleConfirmAddToBlacklist}
          onClose={handleCloseBlacklistModal}
        />
      )}

      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 sm:gap-5">
        <VehiclesHeader />

        <VehiclesStats stats={formattedStats} />

        <CardContainer className="flex flex-col gap-4 p-4 sm:p-5">
          <VehiclesFilterBar
            filters={filters}
            typeOptions={typeOptions}
            colorOptions={colorOptions}
            onSearchChange={setSearch}
            onTypeChange={setTypeFilter}
            onColorChange={setColorFilter}
            onAddClick={handleAddVehicle}
          />

          {isLoading ? (
            <VehiclesTableSkeleton />
          ) : isError ? (
            <VehiclesErrorState onRetry={() => void refetch()} />
          ) : totalVehiclesCount === 0 || totalCount === 0 ? (
            <VehiclesEmptyState message={emptyMessage} />
          ) : (
            <>
              <VehiclesTable
                vehicles={vehicles}
                selectedVehicles={selectedVehicles}
                allPageSelected={allPageSelected}
                onToggleAll={toggleSelectAllOnPage}
                onToggleOne={toggleVehicleSelection}
                onEdit={handleEditVehicle}
                onDelete={handleDeleteVehicle}
                onAddToBlacklist={handleAddToBlacklist}
              />

              <VehiclesPagination
                currentPage={currentPage}
                totalPages={totalPages}
                pageNumbers={pageNumbers}
                totalCount={totalCount}
                onPageChange={goToPage}
              />
            </>
          )}
        </CardContainer>
      </div>
    </DashboardLayout>
  );
}