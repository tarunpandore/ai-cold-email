import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MOCK_USER, MOCK_STATS, MOCK_ACTIVITY, MOCK_CHART_DATA } from "@/lib/mock";
import { User, DashboardStat, Activity, DashboardCharts } from "@/types/types";

interface AppState {
    // Data
    user: User | null;
    stats: DashboardStat[];
    activity: Activity[];
    chartData: DashboardCharts;

    // UI State
    isSidebarOpen: boolean;

    // Actions
    setUser: (user: User) => void;
    updateCredits: (remaining: number) => void;
    setSidebarOpen: (isOpen: boolean) => void;
    toggleSidebar: () => void;
    logout: () => void;
}

export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            // Initial Data from mock repository
            user: MOCK_USER,
            stats: MOCK_STATS,
            activity: MOCK_ACTIVITY,
            chartData: MOCK_CHART_DATA,

            // UI State
            isSidebarOpen: true,

            // Actions
            setUser: (user) => set({ user }),
            updateCredits: (remaining) =>
                set((state) => ({
                    user: state.user ? { ...state.user, creditsRemaining: remaining } : null,
                })),
            setSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),
            toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
            logout: () => set({ user: null }),
        }),
        {
            name: "app-storage",
            version: 1,
            partialize: (state) => ({ user: state.user, isSidebarOpen: state.isSidebarOpen }),
        }
    )
);
