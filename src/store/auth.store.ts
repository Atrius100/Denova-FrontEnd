import { create } from "zustand";

import {
  clearAuthSession,
  saveAuthProfile,
  saveAuthToken,
} from "@/lib/auth/session";

export type AuthUser = {
  id?: string;
  name: string;
  universityId?: string;
  token: string;
};

type AuthStore = {
  user: AuthUser | null;
  setUser: (user: AuthUser) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,

  setUser: (user) => {
    saveAuthToken(user.token);
    saveAuthProfile({
      studentId: user.id,
      universityId: user.universityId,
    });
    set({ user });
  },

  logout: () => {
    clearAuthSession();
    set({ user: null });
  },
}));
