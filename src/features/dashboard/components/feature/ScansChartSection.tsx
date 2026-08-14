import type { ChartPoint } from "../../models/dashboard.types";
import { CardContainer, LineChart } from "../ui";

interface ScansChartSectionProps {
  data: ChartPoint[];
}

export function ScansChartSection({ data }: ScansChartSectionProps) {
  return (
    <CardContainer title="عدد الفحوصات خلال آخر 7 أيام">
      <LineChart data={data} />
    </CardContainer>
  );
}
