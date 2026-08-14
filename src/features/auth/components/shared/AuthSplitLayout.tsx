import type { ReactNode } from "react";
import { AuthBrandPanel } from "./AuthBrandPanel";

interface AuthSplitLayoutProps {
  children: ReactNode;
  activeDot?: number;
}

export function AuthSplitLayout({
  children,
  activeDot = 0,
}: AuthSplitLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      <AuthBrandPanel activeDot={activeDot} />
      <div className="flex w-full flex-1 items-center justify-center bg-slate-50 px-4 py-10 md:w-1/2 md:px-8 lg:px-12">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
