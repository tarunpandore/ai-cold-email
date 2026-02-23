import { create } from "zustand";
import api from "@/lib/api";

interface SettingsState {
    // Profile
    fullName: string;
    jobTitle: string;
    timezone: string;
    tone: string;
    ctaStyle: string;

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
    fetchProfile: () => Promise<void>;
}

const defaultState = {
    fullName: "Alexander Sterling",
    jobTitle: "Director of Growth",
    timezone: "UTC-5",
    tone: "professional",
    ctaStyle: "calendar",
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
        try {
            const currentState = get();
            const { initialState, isDirty, isSaving, ...actualData } = currentState;

            await api.patch("/settings", actualData);

            set({ initialState: currentState, isDirty: false, isSaving: false });
        } catch (error) {
            console.error("Failed to save settings:", error);
            set({ isSaving: false });
        }
    },

    discardChanges: () => {
        const initialState = get().initialState;
        if (initialState) {
            set({ ...initialState, isDirty: false });
        }
    },

    fetchProfile: async () => {
        try {
            const response = await api.get("/settings");
            const data = response.data;

            const newState = {
                fullName: data.fullName || defaultState.fullName,
                jobTitle: data.jobTitle || defaultState.jobTitle,
                tone: data.tone || defaultState.tone,
                ctaStyle: data.ctaStyle || defaultState.ctaStyle,
                timezone: data.timezone || defaultState.timezone,
                twoFA: data.twoFA ?? defaultState.twoFA,
                emailTone: data.emailTone || defaultState.emailTone,
                primaryCtaType: data.primaryCtaType || defaultState.primaryCtaType,
                language: data.language || defaultState.language,
                alerts: data.alerts || defaultState.alerts,
            };

            set({
                ...newState,
                initialState: newState,
                isDirty: false,
                isSaving: false
            });
        } catch (error) {
            console.error("Failed to fetch settings:", error);
            // Fallback to default state on failure
            if (!get().initialState) {
                const currentState = get();
                set({ initialState: currentState });
            }
        }
    }
}));
