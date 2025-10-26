import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import WithGoogleLogin from "../Social/WithGoogleLogin";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl text-white">
      <div className="card-body text-white">
        <h1 className="text-5xl font-bold">Please Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset text-white">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email")}
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Required password</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Character length minimum 6 or longer
              </p>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p>
            Don't have any account?
            <Link className="btn btn-link" to="/register">
              Register
            </Link>
          </p>
        </form>
        <WithGoogleLogin></WithGoogleLogin>
      </div>
    </div>
  );
};

export default Login;
