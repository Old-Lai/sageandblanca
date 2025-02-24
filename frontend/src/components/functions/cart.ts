import { OrderItem } from "@/lib/interfaces";
import { create } from "zustand";

export const useCartStore = create<{
  items: OrderItem[];
  addToCart: (item: OrderItem) => void;
  update: () => void;
}>((set) => ({
  items: [],
  addToCart: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  update: () =>
    set(() => {
      let storedItems = cart.retrieve();
      return { items: storedItems?.length ? storedItems : [] };
    }),
}));

export const cart = {
  retrieve: () => {
    const Items = window.localStorage.getItem("cart");
    let itemsArr: OrderItem[] = [];
    if (Items) {
      itemsArr = Items.split(";").map((item) => JSON.parse(item));
    } else {
      itemsArr = [];
    }
    return itemsArr;
  },
  store: (itemsArr: OrderItem[]) => {
    const cartStr = itemsArr.map((item) => JSON.stringify(item)).join(";");
    window.localStorage.setItem("cart", cartStr);
  },
};
