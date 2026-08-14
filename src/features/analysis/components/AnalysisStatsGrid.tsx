import { StatCard, MenuGlyph } from "../../dashboard";

interface FormattedAnalysisStat {
  id: string;
  title: string;
  displayValue: string;
  subtitle: string;
  displayChange: string;
  isPositive: boolean;
  gradient: string;
  icon: "vehicles" | "alerts" | "wanted" | "scans" | "units";
}

interface AnalysisStatsGridProps {
  stats: FormattedAnalysisStat[];
}

export function AnalysisStatsGrid({ stats }: AnalysisStatsGridProps) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          displayValue={stat.displayValue}
          subtitle={stat.subtitle}
          displayChange={stat.displayChange}
          isPositive={stat.isPositive}
          gradient={stat.gradient}
          icon={<MenuGlyph name={stat.icon} className="h-5 w-5" />}
        />
      ))}
    </section>
  );
}
