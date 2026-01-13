import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import Dog from "../assets/img/dog.png";
import { Link, useNavigate } from "react-router-dom";
import { SingupView } from "./SignupView";

function LoginView() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const hdlChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const hdlSubmit = (e) => {
    e.preventDefault();

    console.log(value);
    console.log("hello 🐱kitty");
  };

  return (
    <div className="flex  min-h-screen ">
      <img
        src={Dog}
        alt=""
        className="hidden md:block w-1/2 h-screen object-cover bg-[#A7CBCB]"
      />
      <div className="flex flex-col   items-center justify-center w-full">
        <h1 className="text-4xl ">VELVÉ</h1>
        <h2 className="text-2xl">Welcome back</h2>

        {/* login form */}
        <form className="flex flex-col pt-6 w-2/3 gap-2 " onSubmit={hdlSubmit}>
          <div className=" border-b border-gray-300 ">
            <label className="text-[#C6C6C6] text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              required
              className=" w-full py-2 pr-10 outline-none border-none bg-transparent"
              onChange={(e) => hdlChange(e)}
            />
          </div>

          <label className="text-[#C6C6C6] text-sm">Password</label>

          <div className="relative w-full border-b border-gray-300 flex items-center">
            <input
              id="password"
              type={isShowPassword ? "text" : "password"}
              placeholder="Enter Password"
              name="password"
              required
              className="w-full py-2 pr-10 outline-none border-none bg-transparent"
              onChange={(e) => hdlChange(e)}
            />

            <button
              type="button"
              onClick={handleShowPassword}
              className="absolute right-0 flex items-center justify-center p-2"
            >
              {isShowPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>

          <p className="text-sm flex justify-end underline text-primary mt-1">
            <a href="#">Forgot password?</a>
          </p>

          {/* button */}
          <div className="flex flex-col gap-2 pt-4">
            <button
              type="submit"
              className="bg-[#CB5585] text-white rounded-full py-2 hover:opacity-70 hover:cursor-pointer duration-150"
            >
              Login
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-[#E8E8E8] text-black rounded-full py-2 hover:opacity-70 hover:cursor-pointer "
            >
              <FcGoogle size={20} />
              <span>Login with Google</span>
            </button>
          </div>
        </form>
        <div className="mt-30">
          <p>
            Don't have an account ?{" "}
            <Link to="/signup" className="underline text-primary">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginView;
