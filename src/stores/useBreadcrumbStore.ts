import { create } from "zustand";

export interface BreadcrumbState {
  path: string;
  name: string;
}

interface BreadcrumbStore {
  state: BreadcrumbState;
  hydrateBreadcrumb: (state: BreadcrumbState) => void;
  reset: () => void;
}

export const useBreadcrumbStore = create<BreadcrumbStore>((set) => ({
  state: { name: "", path: "" },

  hydrateBreadcrumb: ({ name, path }) =>
    set((state) => ({
      state: {
        ...state.state,
        name: name,
        path: path,
      },
    })),

  reset: () =>
    set(() => ({
      state: {
        name: "",
        path: "",
      },
    })),
}));
