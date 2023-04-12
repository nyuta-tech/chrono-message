import { atom } from "recoil";

type User = {
  uid: string;
  email: string | null;
};

export const userAtom = atom<User | null>({
  key: "userAtom",
  default: null,
  // dangerouslyAllowMutability: true,
});
