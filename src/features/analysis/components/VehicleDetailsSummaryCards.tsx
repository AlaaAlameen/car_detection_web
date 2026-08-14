import { CardContainer } from "../../dashboard";
import type { VehicleDetailsSummaryCard } from "../models/vehicleDetails.types";

interface VehicleDetailsSummaryCardsProps {
  cards: VehicleDetailsSummaryCard[];
}

export function VehicleDetailsSummaryCards({
  cards,
}: VehicleDetailsSummaryCardsProps) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <CardContainer key={card.id} className="p-4">
          <p className="text-xs font-medium text-white/40">{card.title}</p>
          <p className="mt-2 text-sm font-semibold leading-relaxed text-white/85">
            {card.value}
          </p>
        </CardContainer>
      ))}
    </section>
  );
}
