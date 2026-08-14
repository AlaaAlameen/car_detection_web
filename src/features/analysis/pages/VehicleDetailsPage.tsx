import { DashboardLayout, CardContainer } from "../../dashboard";
import { useVehicleDetailsViewModel } from "../hooks/useVehicleDetailsViewModel";
import {
  VehicleComparisonTable,
  VehicleDetailsHeader,
  VehicleDetailsSummaryCards,
  VehicleInfoCard,
  VehicleRiskSection,
} from "../components";

export function VehicleDetailsPage() {
  const vm = useVehicleDetailsViewModel();

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
        <VehicleDetailsHeader onBack={vm.handleBack} />

        <CardContainer>
          <VehicleInfoCard vehicle={vm.vehicle} />
        </CardContainer>

        <CardContainer>
          <VehicleRiskSection vehicle={vm.vehicle} />
        </CardContainer>

        <CardContainer title="مقارنة البيانات">
          <VehicleComparisonTable rows={vm.comparisonRows} />
        </CardContainer>

        <VehicleDetailsSummaryCards cards={vm.summaryCards} />
      </div>
    </DashboardLayout>
  );
}
