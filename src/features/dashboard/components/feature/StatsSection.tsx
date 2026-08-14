import type { ReactNode } from "react";
import { StatCard } from "../ui/StatCard";
import { MenuGlyph } from "../shared/icons";

interface FormattedStat {
  id: string;
  title: string;
  displayValue: string;
  subtitle: string;
  displayChange: string;
  isPositive: boolean;
  gradient: string;
  icon: "units" | "scans" | "alerts" | "wanted";
}

interface StatsSectionProps {
  stats: FormattedStat[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          displayValue={stat.displayValue}
          subtitle={stat.subtitle}
          displayChange={stat.displayChange}
          isPositive={stat.isPositive}
          gradient={stat.gradient}
          icon={<StatIcon name={stat.icon} />}
        />
      ))}
    </section>
  );
}

function StatIcon({ name }: { name: FormattedStat["icon"] }): ReactNode {
  return <MenuGlyph name={name} className="h-5 w-5" />;
}
