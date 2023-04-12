import { atom } from "recoil";

type UserInfo = {
  uid: string;
  email: string | null;
  userName: string;
  icon: string;
};

export const UserInfoAtom = atom<UserInfo | null>({
  key: "UserInfoAtom",
  default: null,
  // dangerouslyAllowMutability: true,
});

export const UserIdAtom = atom<string | null>({
  key: "UserIdAtom",
  default: null,
});
