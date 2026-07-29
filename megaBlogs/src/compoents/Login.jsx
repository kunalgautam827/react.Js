import React, { useState } from "react";
import authService from "./../appwrite/auth";
import { login as authLogin } from "../store/AuthSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Logo } from "../compoents/index";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  
  const { register, handleSubmit } = useForm();
  
  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-25">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          don't have an account ?
          <Link
            to={"/signup"}
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sing up
          </Link>
        </p>

        {error && <p className="text-red-500 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email:"
              placeholder="Enter your Email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "email address must be a valid address",
                },

                // validate: (value) =>
                //   /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
                //     value,
                //   ) || "email address must be a valid address",
              })}
            />

            <Input
              label="Password:"
              type="password"
              placeholder="Enter your password"
              {...register("passwrod", {
                required: "password must be required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
                },
              })}
            />
            <BUtton type="submit" className="w-full">
              Sign In
            </BUtton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
