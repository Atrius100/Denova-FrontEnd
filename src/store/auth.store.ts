import { create } from "zustand";

import {
  clearAuthSession,
  saveAuthSession,
  type SubscriptionStatus,
} from "@/lib/auth/session";

export type AuthUser = {
  id: string;
  name: string;
  universityId: string;
  subscription: SubscriptionStatus;
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
    saveAuthSession({
      token: user.token,
      studentId: user.id,
      universityId: user.universityId,
      subscription: user.subscription,
    });
    set({ user });
  },

  logout: () => {
    clearAuthSession();
    set({ user: null });
  },
}));