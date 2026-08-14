import type { ReactNode } from "react";

interface CardContainerProps {
  children: ReactNode;
  className?: string;
  title?: string;
  action?: ReactNode;
}

export function CardContainer({
  children,
  className = "",
  title,
  action,
}: CardContainerProps) {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-white/5 p-5 shadow-[0_0_40px_rgba(59,130,246,0.06)] backdrop-blur-xl ${className}`}
    >
      {(title || action) && (
        <div className="mb-4 flex items-center justify-between gap-3">
          {title && (
            <h3 className="text-sm font-semibold text-white/90 md:text-base">
              {title}
            </h3>
          )}
          {action}
        </div>
      )}
      {children}
    </div>
  );
}
