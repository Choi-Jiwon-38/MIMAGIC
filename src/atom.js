import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: "userState",
  default: { id: "", isLoggined: false }, // 비로그인 사용자
  effects_UNSTABLE: [persistAtom],
});

export const resultState = atom({
  key: "resultState",
  default: { resultName: "", resultConcept: "" }, // 결과 초기값
  effects_UNSTABLE: [persistAtom],
});
