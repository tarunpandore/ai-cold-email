import { create } from "zustand";

interface DashboardState {
    isSidebarOpen: boolean;
    activeBatchId: string | null;
    toggleSidebar: () => void;
    setSidebarOpen: (isOpen: boolean) => void;
    setActiveBatch: (id: string | null) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
    isSidebarOpen: true,
    activeBatchId: null,
    toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    setSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),
    setActiveBatch: (id) => set({ activeBatchId: id }),
}));
