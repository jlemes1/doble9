import { type StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { type TCartItem } from '../components/shared/CartItem';

export type CartState = {
  items: TCartItem[];
  totalItemsInCart: number;
  totalAmount: number;

  addItem: (item: TCartItem) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
};

const storeApi: StateCreator<CartState> = (set) => ({
  items: [],

  totalItemsInCart: 0,
  totalAmount: 0,

  addItem: (item) => {
    set((state) => {
      const existingItemIndex = state.items.findIndex(
        (i) => i.variantId === item.variantId,
      );
      let updatedItems;

      if (existingItemIndex >= 0) {
        // Si el item ya existe en el carrito, se actualiza la cantidad
        updatedItems = state.items.map((i, index) =>
          index === existingItemIndex
            ? {
                ...i,
                quantity: i.quantity + item.quantity,
              }
            : i,
        );
      } else {
        // Si el item no existe en el carrito, se agrega
        updatedItems = [...state.items, item];
      }

      const newTotalItems = updatedItems.reduce(
        (acc, i) => acc + i.quantity,
        0,
      );

      const newTotalAmount = updatedItems.reduce(
        (acc, i) => acc + i.price * i.quantity,
        0,
      );

      return {
        items: updatedItems,
        totalAmount: newTotalAmount,
        totalItemsInCart: newTotalItems,
      };
    });
  },

  removeItem: (variantId) => {
    set((state) => {
      const updatedItems = state.items.filter((i) => i.variantId !== variantId);

      const newTotalItems = updatedItems.reduce(
        (acc, i) => acc + i.quantity,
        0,
      );

      const newTotalAmount = updatedItems.reduce(
        (acc, i) => acc + i.price * i.quantity,
        0,
      );

      return {
        items: updatedItems,
        totalAmount: newTotalAmount,
        totalItemsInCart: newTotalItems,
      };
    });
  },

  updateQuantity: (variantId, quantity) => {
    set((state) => {
      const updatedItems = state.items.map((i) =>
        i.variantId === variantId ? { ...i, quantity } : i,
      );

      const newTotalItems = updatedItems.reduce(
        (acc, i) => acc + i.quantity,
        0,
      );

      const newTotalAmount = updatedItems.reduce(
        (acc, i) => acc + i.price * i.quantity,
        0,
      );

      return {
        items: updatedItems,
        totalAmount: newTotalAmount,
        totalItemsInCart: newTotalItems,
      };
    });
  },

  clearCart: () => {
    set({ items: [], totalItemsInCart: 0, totalAmount: 0 });
  },
});

export const useCartStore = create<CartState>()(devtools(storeApi));
