import type { AlertItemData } from "../../models/dashboard.types";
import { AlertItem, CardContainer } from "../ui";

interface AlertsSectionProps {
  alerts: AlertItemData[];
}

export function AlertsSection({ alerts }: AlertsSectionProps) {
  return (
    <CardContainer
      title="أحدث التنبيهات"
      action={
        <button
          type="button"
          className="text-xs font-medium text-blue-400 transition hover:text-blue-300"
        >
          عرض الكل
        </button>
      }
      className="h-full"
    >
      <div className="flex flex-col gap-2.5">
        {alerts.map((alert) => (
          <AlertItem
            key={alert.id}
            plateNumber={alert.plateNumber}
            carType={alert.carType}
            status={alert.status}
            imageUrl={alert.imageUrl}
            time={alert.time}
          />
        ))}
      </div>
    </CardContainer>
  );
}
