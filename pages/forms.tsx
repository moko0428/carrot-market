import { useState } from "react";
import { useForm } from "react-hook-form";

//Less code ✅
// Better validation
// Better Errors (set, clear, display)
// Have control over inputs
// Dont deal with events ✅
// Easier Inputs ✅

export default function Forms() {
  const { register, watch } = useForm();

  return (
    <form>
      <input
        {...register("username")}
        required
        type="text"
        placeholder="Username"
      />
      <input {...register("email")} required type="email" placeholder="Email" />
      <input
        {...register("password")}
        required
        type="password"
        placeholder="password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
