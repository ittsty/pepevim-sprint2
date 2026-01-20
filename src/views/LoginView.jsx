import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dog from "../assets/img/dog.png";
import { login } from "../services/auth";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

function LoginView() {
  const { checkAuth } = useAuth();
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    form: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const hdlChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));

    // clear error when user types
    setErrors({ password: "", form: "" });
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();

    if (value.password.length < 8 || value.password.length > 64) {
      setErrors({
        password: "Password must be 8-64 characters",
      });
      return;
    }

    //TO DO call Api
    const result = await login(value);

    if (!result.success) {
      setErrors({
        form: "อีเมลหรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง",
      });
      return;
    }
    const user = await checkAuth();

    if (user.role === "admin") {
      console.log("is admin");
      navigate("/dashboard");
      return;
    }
    navigate("/");
  };

  return (
    <div className="flex min-h-screen">
      {/* LEFT IMAGE */}
      <img
        src={Dog}
        alt="login"
        className="hidden md:block w-1/2 h-screen object-cover bg-[#A7CBCB]"
      />

      {/* RIGHT CONTENT */}
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl">VELVÉ</h1>
        <h2 className="text-2xl">Welcome back</h2>

        {/* LOGIN FORM */}
        <form
          noValidate
          autoComplete="on"
          onSubmit={hdlSubmit}
          className="flex flex-col pt-6 w-2/3 gap-3"
        >
          {/* EMAIL */}
          <div className="border-b border-gray-300">
            <label className="text-[#C6C6C6] text-sm">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              autoComplete="username"
              maxLength={254}
              value={value.email}
              onChange={hdlChange}
              className="w-full py-2 outline-none bg-transparent"
              required
            />
          </div>

          {/* PASSWORD */}
          <label className="text-[#C6C6C6] text-sm mt-2">Password</label>

          <div className="relative border-b border-gray-300">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              autoComplete="current-password"
              minLength={8}
              maxLength={64}
              value={value.password}
              onChange={hdlChange}
              className="w-full py-2 pr-10 outline-none bg-transparent"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-0 top-2 p-2"
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>

          {/* PASSWORD ERROR */}
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}

          {/* FORM / SERVER ERROR */}
          {errors.form && (
            <p className="text-red-600 text-sm text-center mt-2">
              {errors.form}
            </p>
          )}

          <p className="text-sm flex justify-end underline text-primary mt-1">
            <Link to="/forgot-password">Forgot password?</Link>
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col gap-2 pt-4">
            <button
              type="submit"
              className="bg-[#CB5585] text-white rounded-full py-2 hover:opacity-70 duration-150
              hover:cursor-pointer"
            >
              Login
            </button>
{/* 
            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-[#E8E8E8] rounded-full py-2 hover:opacity-70 hover:cursor-pointer"
            >
              <FcGoogle size={20} />
              <span>Login with Google</span>
            </button> */}
          </div>
        </form>

        {/* SIGNUP LINK */}
        <p className="mt-6">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="underline text-primary">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginView;
