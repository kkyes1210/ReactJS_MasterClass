import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minutes",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },
  //set은 state를 set하는 것을 도와주는 속성
  set: ({ set }, newValue) => {
    //console.log(newValue);
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
  },
});
