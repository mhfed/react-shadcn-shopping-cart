import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { IProduct } from '@/common/type';
import { toast } from '@/components/ui/use-toast';

interface CartStore {
  items: IProduct[];
  addItem: (data: IProduct) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: IProduct) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast({ title: 'Item already in cart.' });
        }

        set({ items: [...get().items, data] });
        toast({ title: 'Item added to cart.' });
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast({ title: 'IItem removed from cart.' });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
