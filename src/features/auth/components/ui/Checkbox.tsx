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
        className="h-4 w-4 rounded border-slate-300 text-indigo-600 accent-indigo-600 focus:ring-indigo-500"
        {...props}
      />
      {label ? <span className="text-sm text-slate-600">{label}</span> : null}
    </label>
  );
}
