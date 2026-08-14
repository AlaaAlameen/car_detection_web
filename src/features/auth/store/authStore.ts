import { create } from "zustand";
import type { AuthState, User } from "../models/auth.types";

interface AuthStore extends AuthState {
  setUser: (user: User | null) => void;
  setAuthenticated: (value: boolean) => void;
  reset: () => void;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

export const useAuthStore = create<AuthStore>((set) => ({
  ...initialState,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: user !== null,
    }),

  setAuthenticated: (value) => set({ isAuthenticated: value }),

  reset: () => set(initialState),
}));
