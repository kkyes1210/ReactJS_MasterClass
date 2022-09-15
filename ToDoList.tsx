import { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, watch } = useForm();
  //console.log(register("toDo"));
  //watch는 form의 입력값들의 변화를 관찰 할 수 있게 해주는 함수
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("toDo")} placeholder="Write a to do" />
        <input {...register("email")} placeholder="email" />
        <input {...register("firstName")} placeholder="first Name" />
        <input {...register("lastName")} placeholder="last Name" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
