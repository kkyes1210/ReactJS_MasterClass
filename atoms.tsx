import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "DONE" | "DOING" | "TO_DO";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

//selector를 이용하면 state를 가져다가 다른 state를 만들 수 있다.
//==> selector는 atom의 output을 변형시키는 도구
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    //filter function은 배열에서 조건에 맞지 않는 원소들을 제거한 배열을 return
    return [
      toDos.filter((toDo) => toDo.category === "TO_DO"),
      toDos.filter((toDo) => toDo.category === "DOING"),
      toDos.filter((toDo) => toDo.category === "DONE"),
    ];
  },
  //get function : 인자로 객체를 받음 {get}
});
