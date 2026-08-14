import type {
  BarItem,
  MatchProgress,
  PieSlice,
} from "../../models/dashboard.types";
import { BarChart, CardContainer, PieChart, ProgressCircle } from "../ui";

interface AnalyticsSectionProps {
  colorDistribution: PieSlice[];
  vehicleTypes: BarItem[];
  matchProgress: MatchProgress;
}

export function AnalyticsSection({
  colorDistribution,
  vehicleTypes,
  matchProgress,
}: AnalyticsSectionProps) {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <CardContainer title="توزيع ألوان المركبات">
        <PieChart data={colorDistribution} />
      </CardContainer>

      <CardContainer title="دقة التعرف">
        <div className="flex min-h-[200px] items-center justify-center py-2">
          <ProgressCircle
            percent={matchProgress.percent}
            label={matchProgress.label}
          />
        </div>
      </CardContainer>

      <CardContainer title="أنواع المركبات">
        <BarChart data={vehicleTypes} height={220} />
      </CardContainer>
    </section>
  );
}
