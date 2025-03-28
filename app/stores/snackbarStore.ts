import { create } from "zustand";

type SnackbarType = "success" | "error" | "alert" | "info";

type SnackbarStore = {
    visible: boolean;
    message: string;
    type: SnackbarType;
    showSnackbar: (message: string, type: SnackbarType) => void;
    hideSnackbar: () => void;
};
export const useSnackbarStore = create<SnackbarStore>((set) => ({
    visible: false,
    message: '',
    type: 'info',
    showSnackbar: (message: string, type: SnackbarType) => {
        console.log('Mostrar Snackbar:', message, type); // Log para verificar se está chamando a função corretamente
        set({ message, type, visible: true });
    },
    hideSnackbar: () => set({ visible: false, message: '', type: 'info' }),
}));
