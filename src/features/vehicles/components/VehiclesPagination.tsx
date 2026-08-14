import type { ReactNode } from "react";

interface VehiclesPaginationProps {
  currentPage: number;
  totalPages: number;
  pageNumbers: number[];
  totalCount: number;
  onPageChange: (page: number) => void;
}

export function VehiclesPagination({
  currentPage,
  totalPages,
  pageNumbers,
  totalCount,
  onPageChange,
}: VehiclesPaginationProps) {
  return (
    <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
      <p className="text-xs text-white/40">
        إجمالي النتائج:{" "}
        <span className="font-semibold text-white/70">{totalCount}</span>
      </p>

      <div className="flex items-center gap-1.5">
        <PageButton
          label="السابق"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          السابق
        </PageButton>

        {pageNumbers.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`flex h-9 min-w-9 items-center justify-center rounded-lg px-2.5 text-sm font-medium transition ${
              page === currentPage
                ? "bg-gradient-to-l from-blue-600 to-violet-600 text-white shadow-[0_0_16px_rgba(99,102,241,0.4)]"
                : "border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            {page}
          </button>
        ))}

        <PageButton
          label="التالي"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          التالي
        </PageButton>
      </div>
    </div>
  );
}

function PageButton({
  children,
  label,
  disabled,
  onClick,
}: {
  children: ReactNode;
  label: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/65 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
    >
      {children}
    </button>
  );
}
