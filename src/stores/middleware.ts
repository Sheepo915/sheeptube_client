import { configurePersist } from "zustand-persist";

const { persist, purge } = configurePersist({
  storage: localStorage,
  rootKey: "root",
});

export { persist, purge };
