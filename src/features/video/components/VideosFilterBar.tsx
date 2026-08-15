import { Button, Input } from "../../auth";
import { videoStatusOptions } from "../data/mockVideoData";

interface VideosFilterBarProps {
  search: string;
  status: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onUploadClick: () => void;
}

export function VideosFilterBar({
  search,
  status,
  onSearchChange,
  onStatusChange,
  onUploadClick,
}: VideosFilterBarProps) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative min-w-0 flex-1 sm:max-w-md">
          <Input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="ابحث باسم الفيديو..."
            className="w-full border-white/10 bg-white/5 py-3 text-white placeholder:text-white/35 focus:border-blue-500 focus:ring-blue-500/20"
          />
        </div>

        <div className="relative min-w-[160px]">
          <select
            aria-label="الحالة"
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 pe-9 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          >
            {videoStatusOptions.map((option) => (
              <option
                key={option}
                value={option}
                className="bg-[#0f172a] text-white"
              >
                {option === "الكل" ? "الحالة" : option}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute inset-y-0 end-3 flex items-center text-white/40">
            ▾
          </span>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <Button
          type="button"
          onClick={onUploadClick}
          className="w-auto shrink-0 whitespace-nowrap px-5 shadow-[0_0_24px_rgba(99,102,241,0.35)]"
        >
          + رفع فيديو جديد
        </Button>
      </div>
    </div>
  );
}