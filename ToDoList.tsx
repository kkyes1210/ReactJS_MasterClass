import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });

  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
    //setError("extraError", { message: "Server offline." });
  };
  console.log(errors);

  const Span = styled.span`
    color: red;
  `;

  interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    password1: string;
    extraError?: string; //필수항목 아님
  }

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is require",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed.",
            },
          })}
          placeholder="email"
        />
        <Span>{errors?.email?.message}</Span>

        <input
          {...register("firstName", {
            required: "Write here",
            validate: {
              nokang: (value) =>
                value.includes("kang") ? "no kang allowed" : true,
              nohyun: (value) =>
                value.includes("hyun") ? "no hyun allowed" : true,
            },
          })}
          placeholder="first Name"
        />
        <Span>{errors?.firstName?.message}</Span>
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
        <Span>{errors?.lastName?.message}</Span>
        <input
          {...register("password", {
            required: "Write here",
            minLength: 5,
          })}
          placeholder="password"
        ></input>
        <Span>{errors?.password?.message}</Span>
        <input
          {...register("password1", {
            required: "Write here",
            minLength: 5,
          })}
          placeholder="password1"
        ></input>
        <Span>{errors?.password1?.message}</Span>
        <button>Add</button>
      </form>
      <Span>{errors?.extraError?.message}</Span>
    </div>
  );
}
//errors 뒤에 물음표 붙이는 이유: 물음표를 붙이고 그 항목이 undefined이면 그 뒤를 실행하지 않음. == errors가 undefined이면 extraError를 찾지 않는다

export default ToDoList;
