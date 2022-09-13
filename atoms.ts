import { atom } from "recoil";

//component는 부모의 부모로부터 value를 받아올 필요가 없음.
//대신에 atom을 형성하고, 그 value가 필요하다면 component가 직접 atom에 연결되는 것이다.
//==> global state를 어플리케이션의 분리된 공간에서 관리하는 것이 훨씬 나은 방법
//==> 중요한 점은, 오직 value가 필요한 component에서만 그 value를 가진다는 것이다.

export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});
