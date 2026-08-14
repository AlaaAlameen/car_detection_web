import { create } from "zustand";
import type { DashboardState } from "../models/dashboard.types";

interface DashboardStore extends DashboardState {
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  setActiveMenuId: (id: string) => void;
}

const initialState: DashboardState = {
  isSidebarOpen: false,
  activeMenuId: "dashboard",
};

export const useDashboardStore = create<DashboardStore>((set) => ({
  ...initialState,

  setSidebarOpen: (open) => set({ isSidebarOpen: open }),

  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

  setActiveMenuId: (id) => set({ activeMenuId: id }),
}));
