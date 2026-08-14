import { DashboardLayout } from "../components/shared";
import {
  AlertsSection,
  AnalyticsSection,
  ScansChartSection,
  StatsSection,
} from "../components/feature";
import { useDashboardViewModel } from "../hooks/useDashboardViewModel";

export function DashboardPage() {
  const {
    formattedStats,
    weeklyScans,
    colorDistribution,
    vehicleTypes,
    matchProgress,
    alerts,
    user,
    menuItems,
    activeMenuId,
    isSidebarOpen,
    toggleSidebar,
    setSidebarOpen,
    setActiveMenuId,
    handleFullscreen,
  } = useDashboardViewModel();

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
        <StatsSection stats={formattedStats} />

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-5">
          <div className="xl:col-span-3">
            <ScansChartSection data={weeklyScans} />
          </div>
          <div className="xl:col-span-2">
            <AlertsSection alerts={alerts} />
          </div>
        </div>

        <AnalyticsSection
          colorDistribution={colorDistribution}
          vehicleTypes={vehicleTypes}
          matchProgress={matchProgress}
        />
      </div>
    </DashboardLayout>
  );
}
