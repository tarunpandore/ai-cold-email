import { create } from "zustand";

interface SettingsState {
    // Profile
    name: string;
    jobTitle: string;
    timezone: string;
    tone: string;
    ctaType: string;

    // Security
    twoFA: boolean;

    // Preferences
    emailTone: string;
    primaryCtaType: string;
    language: string;
    alerts: {
        processing: boolean;
        login: boolean;
        usage: boolean;
    };

    // Meta state
    initialState: Partial<SettingsState> | null;
    isDirty: boolean;
    isSaving: boolean;
}

interface SettingsActions {
    updateField: (field: keyof SettingsState, value: any) => void;
    updateAlerts: (field: keyof SettingsState["alerts"], value: boolean) => void;
    setInitialState: (state: Partial<SettingsState>) => void;
    saveChanges: () => Promise<void>;
    discardChanges: () => void;
}

const defaultState = {
    name: "Alexander Sterling",
    jobTitle: "Director of Growth",
    timezone: "UTC-5",
    tone: "professional",
    ctaType: "calendar",
    twoFA: true,
    emailTone: "Professional",
    primaryCtaType: "Book a Meeting",
    language: "en",
    alerts: {
        processing: true,
        login: true,
        usage: true
    },
    initialState: null,
    isDirty: false,
    isSaving: false
};

export const useSettingsStore = create<SettingsState & SettingsActions>((set, get) => ({
    ...defaultState,

    updateField: (field, value) => {
        set((state) => {
            const newState = { ...state, [field]: value };
            const isDirty = JSON.stringify(newState) !== JSON.stringify(state.initialState);
            return { [field]: value, isDirty };
        });
    },

    updateAlerts: (field, value) => {
        set((state) => {
            const newAlerts = { ...state.alerts, [field]: value };
            const newState = { ...state, alerts: newAlerts };
            const isDirty = JSON.stringify(newState) !== JSON.stringify(state.initialState);
            return { alerts: newAlerts, isDirty };
        });
    },

    setInitialState: (state) => {
        const fullState = { ...get(), ...state, initialState: null, isDirty: false, isSaving: false };
        set({ ...state, initialState: fullState, isDirty: false });
    },

    saveChanges: async () => {
        set({ isSaving: true });
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const currentState = get();
        const { initialState, isDirty, isSaving, ...actualData } = currentState;
        set({ initialState: currentState, isDirty: false, isSaving: false });
    },

    discardChanges: () => {
        const initialState = get().initialState;
        if (initialState) {
            set({ ...initialState, isDirty: false });
        }
    }
}));
