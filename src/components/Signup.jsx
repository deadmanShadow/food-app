import React, { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";
import Modal from "./Modal";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, login } = useContext(AuthContext);
  // redirecting to home page or specific page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email, password)
      .then((result) => {
        // Signed up
        const user = result.user;
        alert("Account creation successfully done!");
        document.getElementById("my_modal_5").close();
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20 rounded-lg p-8">
      <div className="modal-action flex flex-col justify-center mt-0 w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h3 className="font-bold text-2xl mb-4">Create An Account</h3>

          {/* email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              {...register("email")}
            />
          </div>

          {/* password */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              {...register("password")}
            />
            <p className="text-sm mt-1">
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </p>
          </div>

          {/* login btn */}
          <div className="mb-6">
            <button type="submit" className="btn btn-primary w-full">
              Sign Up
            </button>
          </div>

          <p className="text-center my-2">
            Have an account?{" "}
            <button
              className="underline text-red ml-1"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Login
            </button>
          </p>

          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
        </form>

        {/* social sign in */}
        <div className="text-center space-x-3 mb-5">
          <button className="btn btn-circle bg-blue-600 text-white hover:bg-blue-700">
            <FaGoogle />
          </button>
          <button className="btn btn-circle bg-blue-800 text-white hover:bg-blue-900">
            <FaFacebookF />
          </button>
          <button className="btn btn-circle bg-gray-800 text-white hover:bg-gray-900">
            <FaGithub />
          </button>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Signup;
