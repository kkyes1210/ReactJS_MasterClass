import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    //값 즉시 변경 or 현재 값을 argument로 주는 function 만들수 있음
    //1. target의 경로 찾기
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      //console.log(targetIndex);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name };
      console.log(oldToDo, newToDo);
      // ==> 우리가 해야할 것은 targetIndex에 있는 to do를 newToDo로 바꿔주는 것: 다음 강의
      return oldToDos;
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          DONE
        </button>
      )}
    </li>
  );
}

export default ToDo;
