import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import Sigup1 from "../assets/img/sigup1.png";
import Sigup2 from "../assets/img/sigup2.png";
import { useNavigate } from "react-router";
import { register, login } from "../services/auth";

export const SignupView = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState();
  const [value, setValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    password: "",
    form: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const hdlChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
    setErrors({ first_name: "", last_name: "", password: "", form: "" });
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();

    if (value.first_name.length < 2 || value.first_name.length > 50) {
      setErrors({ first_name: "First name must be 2-50 characters" });
      return;
    }

    if (value.last_name.length < 2 || value.last_name.length > 50) {
      setErrors({ last_name: "Last name must be 2-50 characters" });
      return;
    }

    if (value.password.length < 8 || value.password.length > 64) {
      setErrors({ password: "Password must be 8-64 characters" });
      return;
    }

    if (value.password !== value.confirm_password) {
      setErrors({ password: "Password does not match" });
      return;
    }

    console.log("🚀 ~ hdlSubmit ~ formData:", formData);
    // 2️⃣ call service
    const result = await register(formData);

    // 3️⃣ handle result
    if (!result.success) {
      setErrors({ form: result.message });
      return;
    }

    await login({
      email: formData.email,
      password: formData.password,
    });

    navigate("/");
  };

  return (
    <div className="w-full min-h-[calc(100vh-72px)] md:grid md:grid-cols-3 flex items-center">
      {/* LEFT IMAGE */}
      <div className="hidden md:block h-screen w-full overflow-hidden">
        <img src={Sigup1} alt="" className="w-full h-full object-cover" />
      </div>

      {/* FORM */}
      <div className=" flex flex-col items-center justify-center w-full ">
        <h1 className="text-4xl pb-4">Sign up</h1>

        <form
          noValidate
          autoComplete="off"
          onSubmit={hdlSubmit}
          className="flex flex-col w-full max-w-sm"
        >
          {/* FIRST NAME */}
          <div className="border-b border-gray-300">
            <label className="text-[#C6C6C6] text-sm block mt-4">
              First name
            </label>
            <input
              name="first_name"
              value={value.first_name}
              onChange={hdlChange}
              className="w-full py-2 outline-none bg-transparent"
            />
          </div>
          {errors.first_name && (
            <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>
          )}

          {/* LAST NAME */}
          <div className="border-b border-gray-300">
            <label className="text-[#C6C6C6] text-sm block mt-4">
              Last name
            </label>
            <input
              name="last_name"
              value={value.last_name}
              onChange={hdlChange}
              className="w-full py-2 outline-none bg-transparent"
            />
          </div>
          {errors.last_name && (
            <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>
          )}

          {/* EMAIL */}
          <div className="border-b border-gray-300">
            <label className="text-[#C6C6C6] text-sm block mt-4">Email</label>
            <input
              type="email"
              name="email"
              value={value.email}
              onChange={hdlChange}
              autoComplete="email"
              className="w-full py-2 outline-none bg-transparent"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative border-b border-gray-300 mt-4">
            <label className="text-[#C6C6C6] text-sm block">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={value.password}
              onChange={hdlChange}
              autoComplete="new-password"
              className="w-full py-2 pr-10 outline-none bg-transparent"
            />
            <button
              type="button"
              onClick={() => setShowPassword((p) => !p)}
              className="absolute right-0 top-6 p-2
              hover:cursor-pointer"
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="relative border-b border-gray-300 mt-4">
            <label className="text-[#C6C6C6] text-sm block">
              Confirm password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirm_password"
              value={value.confirm_password}
              onChange={hdlChange}
              autoComplete="new-password"
              className="w-full py-2 pr-10 outline-none bg-transparent"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((p) => !p)}
              className="absolute right-0 top-6 p-2
              hover:cursor-pointer"
            >
              {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}

          {errors.form && (
            <p className="text-red-600 text-sm text-center mt-2">
              {errors.form}
            </p>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            className="bg-[#CB5585] text-white rounded-full py-2 mt-6 hover:opacity-70
            hover:cursor-pointer"
          >
            Create account
          </button>

          {/* GOOGLE */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 bg-[#E8E8E8] rounded-full py-2 mt-4 hover:opacity-70
            hover:cursor-pointer"
          >
            <FcGoogle size={20} />
            <span>Sign up with Google</span>
          </button>
        </form>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hidden md:block h-screen w-full overflow-hidden">
        <img src={Sigup2} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
