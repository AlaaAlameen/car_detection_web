import type { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  rightElement?: ReactNode;
}

export function Input({
  label,
  error,
  rightElement,
  id,
  className = "",
  ...props
}: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-white/70"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={inputId}
          className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${
            error ? "border-rose-500/60" : "border-white/10"
          } ${rightElement ? "pl-11" : ""} ${className}`}
          {...props}
        />
        {rightElement && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            {rightElement}
          </div>
        )}
      </div>
      {error && <p className="text-xs text-rose-400">{error}</p>}
    </div>
  );
}