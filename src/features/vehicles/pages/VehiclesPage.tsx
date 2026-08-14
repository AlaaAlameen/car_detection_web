import {
  DashboardLayout,
  CardContainer,
} from "../../dashboard";
import { useVehiclesViewModel } from "../hooks/useVehiclesViewModel";
import {
  VehiclesFilterBar,
  VehiclesHeader,
  VehiclesPagination,
  VehiclesStats,
  VehiclesTable,
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
    setSearch,
    setTypeFilter,
    setColorFilter,
    vehicles,
    totalCount,
    selectedVehicles,
    toggleVehicleSelection,
    allPageSelected,
    toggleSelectAllOnPage,
    currentPage,
    totalPages,
    pageNumbers,
    goToPage,
    handleAddVehicle,
    handleEditVehicle,
    handleDeleteVehicle,
  } = useVehiclesViewModel();

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
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 sm:gap-5">
        <VehiclesHeader />

        <VehiclesStats stats={formattedStats} />

        <CardContainer className="flex flex-col gap-4 p-4 sm:p-5">
          <VehiclesFilterBar
            filters={filters}
            onSearchChange={setSearch}
            onTypeChange={setTypeFilter}
            onColorChange={setColorFilter}
            onAddClick={handleAddVehicle}
          />

          <VehiclesTable
            vehicles={vehicles}
            selectedVehicles={selectedVehicles}
            allPageSelected={allPageSelected}
            onToggleAll={toggleSelectAllOnPage}
            onToggleOne={toggleVehicleSelection}
            onEdit={handleEditVehicle}
            onDelete={handleDeleteVehicle}
          />

          <VehiclesPagination
            currentPage={currentPage}
            totalPages={totalPages}
            pageNumbers={pageNumbers}
            totalCount={totalCount}
            onPageChange={goToPage}
          />
        </CardContainer>
      </div>
    </DashboardLayout>
  );
}
