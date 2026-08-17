import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  isLoading?: boolean;
  loadingLabel?: string;
}

export function Button({
  children,
  variant = "primary",
  isLoading = false,
  loadingLabel = "جارٍ التحقق...",
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B1220] disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary:
      "bg-gradient-to-l from-blue-600 to-violet-600 text-white shadow-[0_0_24px_rgba(99,102,241,0.35)] hover:from-blue-500 hover:to-violet-500 focus:ring-blue-500",
    secondary:
      "border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 focus:ring-white/20",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? loadingLabel : children}
    </button>
  );
}