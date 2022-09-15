import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  id: number;
  category: "DONE" | "DOING" | "TO_DO";
}

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  //const [value,modFn] = useRecoilState(toDoState);
  //const value = useRecoilValue(toDoState);
  //const modFn = useSetRecoilState(toDoState);

  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    //setToDos((oldToDos) => [...oldToDos]); //oldToDos의 요소들이 들어있는 배열을 반환
    //setToDos(oldToDos =>[oldToDos]) //배열안에 배열을 담아 리턴 ==>X
    setValue("toDo", "");
  };
  console.log(toDos);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Plase write a to do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
