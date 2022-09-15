import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: any) => {
    console.log(data);
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
          {...register("firstName", { required: "Write here", minLength: 10 })}
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
    </div>
  );
}

export default ToDoList;
