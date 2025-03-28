import { create } from "zustand";


type ModalType = 'success' | 'error' | 'alert' | 'info';

type ModalStore = {
    visible: boolean;
    message: string;
    type: ModalType;
    showModal: (message: string, type: ModalType) => void;
    hideModal: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
    visible: false,
    message: '',
    type: 'info',
    showModal: (message: string, type: ModalType) => set({ message, type, visible: true }),
    hideModal: () => set({ visible: false, message: '', type: 'info' }),
}));
