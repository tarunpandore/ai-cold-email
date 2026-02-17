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
    setUser: (user: UserProfile) => void;
    updateCredits: (remaining: number) => void;
    logout: () => void;
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            user: {
                name: "Alex",
                email: "alex@example.com",
                plan: "Pro",
                creditsRemaining: 650,
                totalCredits: 1000,
            },
            setUser: (user) => set({ user }),
            updateCredits: (remaining) =>
                set((state) => ({
                    user: state.user ? { ...state.user, creditsRemaining: remaining } : null,
                })),
            logout: () => set({ user: null }),
        }),
        {
            name: "user-storage",
        }
    )
);
