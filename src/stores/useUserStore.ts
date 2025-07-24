import { create } from "zustand";

export interface UserInfo {
  userID: string;
  name: string;
  profilePic: string;
}

interface UserStore {
  userInfo: UserInfo;
}

export const useUserStore = create<UserStore>((set) => ({
  userInfo: {
    userID: "",
    name: "",
    profilePic: "",
  },
}));
