import { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

//Less code ✅
// Better validation ✅
// Better Errors (set, clear, display)
// Have control over inputs
// Dont deal with events ✅
// Easier Inputs ✅

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

export default function Forms() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const onValid = (data: LoginForm) => {
    console.log("hi");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "Username is required",
          minLength: {
            message: "5글자 이상",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", { required: "Email is required" })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder="password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
