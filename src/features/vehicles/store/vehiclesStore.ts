import { create } from "zustand";
import type { VehiclesSelectionState } from "../models/vehicle.types";

interface VehiclesStore extends VehiclesSelectionState {
  setSelectedVehicles: (ids: string[]) => void;
  toggleVehicleSelection: (id: string) => void;
  selectAllVehicles: (ids: string[]) => void;
  clearSelection: () => void;
}

const initialState: VehiclesSelectionState = {
  selectedVehicles: [],
};

export const useVehiclesStore = create<VehiclesStore>((set, get) => ({
  ...initialState,

  setSelectedVehicles: (ids) => set({ selectedVehicles: ids }),

  toggleVehicleSelection: (id) => {
    const { selectedVehicles } = get();
    const exists = selectedVehicles.includes(id);
    set({
      selectedVehicles: exists
        ? selectedVehicles.filter((item) => item !== id)
        : [...selectedVehicles, id],
    });
  },

  selectAllVehicles: (ids) => set({ selectedVehicles: ids }),

  clearSelection: () => set({ selectedVehicles: [] }),
}));
