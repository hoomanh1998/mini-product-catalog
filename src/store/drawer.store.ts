"use client";

import { create } from "zustand";

type DrawerStoreStates = {
  drawer_open: boolean;
  close_drawer: () => void;
  open_drawer: () => void;
};

export const use_drawer_store = create<DrawerStoreStates>((set) => ({
  drawer_open: false,
  close_drawer: () => set(() => ({ drawer_open: false })),
  open_drawer: () => set(() => ({ drawer_open: true })),
}));
