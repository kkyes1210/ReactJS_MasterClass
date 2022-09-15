import { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();
  //handleSubmit이 validation을 담당하고 우리가 작성한 코드가 진행될 수 있게 해줄 것
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors); //에러가 있다는 사실 + 어떤 종류의 에러인지

  //handleSubmit은 두개의 인자를 받는데 하나는 데이터가 유효할 때 호출되는 함수(필수)
  //또 다른 하나는 데이터가 유효하지 않을 때 호출되는 함수(필수X)
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("toDo")} placeholder="Write a to do" />
        <input {...register("email", { required: true })} placeholder="email" />
        <input
          {...register("firstName", { required: true, minLength: 10 })}
          placeholder="first Name"
        />
        <input
          {...register("lastName", {
            required: "lastName is required",
            minLength: {
              value: 5,
              message: "Your lastName is too short.",
            },
          })}
          placeholder="last Name"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
