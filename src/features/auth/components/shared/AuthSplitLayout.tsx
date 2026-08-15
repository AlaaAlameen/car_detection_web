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
    <div
      dir="rtl"
      lang="ar"
      className="flex min-h-screen w-full flex-col bg-[#0B1220] font-[Cairo,Tahoma,sans-serif] md:flex-row"
    >
      <AuthBrandPanel activeDot={activeDot} />
      <div className="flex w-full flex-1 items-center justify-center px-4 py-10 md:w-1/2 md:px-8 lg:px-12">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(59,130,246,0.08)] backdrop-blur-xl sm:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}