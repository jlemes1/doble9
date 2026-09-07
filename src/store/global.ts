import { create, type StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

type SheetContent = 'cart' | 'search' | null;

export type GlobalState = {
  isSheetOpen: boolean;
  sheetContent: SheetContent;
  activeNavBarMobile: boolean;

  openSheet: (content: SheetContent) => void;
  closeSheet: () => void;
  setActiveNavbarMobile: (active: boolean) => void;
};

const storeApi: StateCreator<GlobalState> = (set) => ({
  isSheetOpen: false,
  sheetContent: null,
  activeNavBarMobile: false,

  openSheet: (content) => {
    set({ isSheetOpen: true, sheetContent: content });
  },

  closeSheet: () => {
    set({ isSheetOpen: false, sheetContent: null });
  },

  setActiveNavbarMobile: (active) => {
    set({ activeNavBarMobile: active });
  },
});

export const useGlobalStore = create<GlobalState>()(devtools(storeApi));
