import { User } from "firebase/auth";
import { atom } from "recoil";

export const userAtom = atom<User | null>({
  key: "userAtom",
  default: null,
});
