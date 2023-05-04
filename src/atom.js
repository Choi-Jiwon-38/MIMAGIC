import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: "userState",
  default: { id: "", isLoggined: false }, // 비로그인 사용자
  effects_UNSTABLE: [persistAtom],
});
