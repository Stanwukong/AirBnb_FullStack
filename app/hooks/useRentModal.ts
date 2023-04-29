import { create } from 'zustand';

interface RentModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useRentModal = create<RentModalStore>((set) => ({
	isOpen: true,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default useRentModal;