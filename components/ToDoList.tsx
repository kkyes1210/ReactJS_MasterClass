import { useRecoilState, useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
          //== <ToDo text={text} category={toDo.category} id={toDo.id}>
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
