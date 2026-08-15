import type { ReactNode } from "react";

interface VehiclesPaginationProps {
  currentPage: number;
  totalPages: number;
  pageNumbers: number[];
  totalCount: number;
  onPageChange: (page: number) => void;
  pageSize?: number;
  pageSizeOptions?: readonly number[];
  onPageSizeChange?: (size: number) => void;
  rangeStart?: number;
  rangeEnd?: number;
}

export function VehiclesPagination({
  currentPage,
  totalPages,
  pageNumbers,
  totalCount,
  onPageChange,
  pageSize,
  pageSizeOptions,
  onPageSizeChange,
  rangeStart,
  rangeEnd,
}: VehiclesPaginationProps) {
  const showRange =
    typeof rangeStart === "number" &&
    typeof rangeEnd === "number" &&
    totalCount > 0;

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-xs text-white/40">
          {showRange ? (
            <>
              عرض{" "}
              <span className="font-semibold text-white/70">{rangeStart}</span>
              {" - "}
              <span className="font-semibold text-white/70">{rangeEnd}</span>
              {" من "}
              <span className="font-semibold text-white/70">{totalCount}</span>
            </>
          ) : (
            <>
              إجمالي النتائج:{" "}
              <span className="font-semibold text-white/70">{totalCount}</span>
            </>
          )}
        </p>

        {pageSize !== undefined &&
          pageSizeOptions &&
          onPageSizeChange && (
            <div className="relative">
              <select
                aria-label="عدد العناصر في الصفحة"
                value={pageSize}
                onChange={(e) => onPageSizeChange(Number(e.target.value))}
                className="appearance-none rounded-lg border border-white/10 bg-white/5 py-1.5 pe-7 ps-2.5 text-xs text-white/70 outline-none transition focus:border-blue-500"
              >
                {pageSizeOptions.map((size) => (
                  <option
                    key={size}
                    value={size}
                    className="bg-[#0f172a] text-white"
                  >
                    {size} عرض
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 end-2 flex items-center text-white/40 text-[10px]">
                ▾
              </span>
            </div>
          )}
      </div>

      <div className="flex items-center gap-1.5">
        <PageButton
          label="السابق"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          السابق
        </PageButton>

        {pageNumbers.map((page, index) =>
          page < 0 ? (
            <span
              key={`ellipsis-${index}`}
              className="px-1 text-sm text-white/40"
            >
              ...
            </span>
          ) : (
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
          ),
        )}

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
