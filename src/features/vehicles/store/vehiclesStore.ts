import { create } from "zustand";
import type { Vehicle, VehiclesState } from "../models/vehicle.types";

interface VehiclesStore extends VehiclesState {
  setVehicles: (vehicles: Vehicle[]) => void;
  setSelectedVehicles: (ids: string[]) => void;
  toggleVehicleSelection: (id: string) => void;
  selectAllVehicles: (ids: string[]) => void;
  clearSelection: () => void;
}

const initialState: VehiclesState = {
  vehicles: [],
  selectedVehicles: [],
};

export const useVehiclesStore = create<VehiclesStore>((set, get) => ({
  ...initialState,

  setVehicles: (vehicles) => set({ vehicles }),

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
