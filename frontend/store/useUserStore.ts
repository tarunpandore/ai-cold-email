import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserProfile {
    name: string;
    email: string;
    avatar?: string;
    plan: "Free" | "Pro" | "Enterprise";
    creditsRemaining: number;
    totalCredits: number;
}

interface UserState {
    user: UserProfile | null;
    accessToken: string | null;
    setUser: (user: UserProfile) => void;
    setAccessToken: (token: string | null) => void;
    updateCredits: (remaining: number) => void;
    logout: () => void;
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            user: null,
            accessToken: null,
            setUser: (user) => set({ user }),
            setAccessToken: (accessToken) => {
                set({ accessToken });
                if (accessToken) {
                    localStorage.setItem("accessToken", accessToken);
                    if (typeof document !== "undefined") {
                        document.cookie = "isAuth=1; path=/; max-age=" + (7 * 24 * 60 * 60);
                    }
                } else {
                    localStorage.removeItem("accessToken");
                    if (typeof document !== "undefined") {
                        document.cookie = "isAuth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                    }
                }
            },
            updateCredits: (remaining) =>
                set((state) => ({
                    user: state.user ? { ...state.user, creditsRemaining: remaining } : null,
                })),
            logout: () => {
                set({ user: null, accessToken: null });
                localStorage.removeItem("accessToken");
                if (typeof document !== "undefined") {
                    document.cookie = "isAuth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                }
            },
        }),
        {
            name: "user-storage",
        }
    )
);
