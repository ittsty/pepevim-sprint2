import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import Sigup1 from "../assets/img/sigup1.png";
import Sigup2 from "../assets/img/sigup2.png";

export const SingupView = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [value, setValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleShowPassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  const hdlChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const hdlSubmit = (e) => {
    e.preventDefault(); // ✅ ต้องมาก่อนเสมอ

    if (value.password !== value.confirm_password) {
      alert("Password not match");
      return;
    }

    console.log("📦 payload to backend:", value);

    // 🔜 axios.post("/api/register", value)
  };

  return (
    <div className="w-full min-h-screen grid grid-cols-3">
      {/* LEFT IMAGE */}
      <div className="h-screen w-full overflow-hidden">
        <img src={Sigup1} alt="signup-left" className="w-full h-full object-cover" />
      </div>

      {/* FORM */}
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl pb-4">Sign up</h1>

        <form className="flex flex-col w-full max-w-sm" onSubmit={hdlSubmit}>
          {/* First name */}
          <div className="border-b border-gray-300">
            <label className="text-[#C6C6C6] text-sm mt-4 block">
              First name
            </label>
            <input
              type="text"
              name="first_name"
              placeholder="Enter First name"
              required
              value={value.first_name}
              onChange={hdlChange}
              className="w-full py-2 outline-none bg-transparent"
            />
          </div>

          {/* Last name */}
          <div className="border-b border-gray-300">
            <label className="text-[#C6C6C6] text-sm mt-4 block">
              Last name
            </label>
            <input
              type="text"
              name="last_name"
              placeholder="Enter Last name"
              required
              value={value.last_name}
              onChange={hdlChange}
              className="w-full py-2 outline-none bg-transparent"
            />
          </div>

          {/* Email */}
          <div className="border-b border-gray-300">
            <label className="text-[#C6C6C6] text-sm mt-4 block">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              required
              value={value.email}
              onChange={hdlChange}
              className="w-full py-2 outline-none bg-transparent"
            />
          </div>

          {/* Password */}
          <div className="relative border-b border-gray-300">
            <label className="text-[#C6C6C6] text-sm mt-4 block">
              Password
            </label>
            <input
              type={isShowPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              required
              value={value.password}
              onChange={hdlChange}
              className="w-full py-2 pr-10 outline-none bg-transparent"
            />
            <button
              type="button"
              onClick={handleShowPassword}
              className="absolute right-0 top-8 p-2"
            >
              {isShowPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>

          {/* Confirm password */}
          <div className="relative border-b border-gray-300">
            <label className="text-[#C6C6C6] text-sm mt-4 block">
              Confirm password
            </label>
            <input
              type={isShowPassword ? "text" : "password"}
              name="confirm_password"
              placeholder="Repeat password"
              required
              value={value.confirm_password}
              onChange={hdlChange}
              className="w-full py-2 pr-10 outline-none bg-transparent"
            />
            <button
              type="button"
              onClick={handleShowPassword}
              className="absolute right-0 top-8 p-2"
            >
              {isShowPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-[#CB5585] text-white rounded-full py-2 mt-6 hover:opacity-70 duration-150"
          >
            Create account
          </button>

          {/* Google */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 bg-[#E8E8E8] text-black rounded-full py-2 mt-4 hover:opacity-70"
          >
            <FcGoogle size={20} />
            <span>Sign up with Google</span>
          </button>
        </form>
      </div>

      {/* RIGHT IMAGE */}
      <div className="h-screen w-full overflow-hidden">
        <img src={Sigup2} alt="signup-right" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
