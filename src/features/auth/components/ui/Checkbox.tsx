import type { InputHTMLAttributes } from "react";

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export function Checkbox({ label, id, className = "", ...props }: CheckboxProps) {
  const checkboxId = id ?? props.name;

  return (
    <label
      htmlFor={checkboxId}
      className={`inline-flex cursor-pointer items-center gap-2 select-none ${className}`}
    >
      <input
        id={checkboxId}
        type="checkbox"
        className="h-4 w-4 rounded border-white/20 bg-white/5 text-blue-600 accent-blue-600 focus:ring-blue-500 focus:ring-offset-[#0B1220]"
        {...props}
      />
      {label ? <span className="text-sm text-white/60">{label}</span> : null}
    </label>
  );
}