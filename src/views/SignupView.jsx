import React from "react";
import { FcGoogle } from "react-icons/fc";

export const SingupView = () => {
  return (
    <div className="border border-amber-700 w-full min-h-screen grid grid-cols-3">
      <div>
        <img
          src="https://i.pinimg.com/1200x/4e/4c/a5/4e4ca5ad9ce2786e4862cab8150b4c03.jpg"
          alt=""
          className="h-screen object-cover"
        />
      </div>
      <div className="flex flex-col   items-center justify-center w-full">
        <h1 className="text-4xl pb-4">Sign up</h1>

        <form className="  flex flex-col  ">
          <label className="flex flex-row text-[#C6C6C6] text-sm mt-4">
            First name
          </label>
          <input
            type="text"
            placeholder="Enter First name"
            name="fname"
            required
            className=" w-full py-2 pr-10 outline border-none bg-transparent"
          ></input>

          <label className="flex flex-row text-[#C6C6C6] text-sm mt-4">
            Last name
          </label>
          <input
            type="text"
            placeholder="Enter Last name"
            name="lname"
            required
            className=" w-full py-2 pr-10 outline border-none bg-transparent"
          ></input>

          <label className="text-[#C6C6C6] text-sm mt-4">Email</label>
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            required
            className=" w-full py-2 pr-10 outline border-none bg-transparent"
          ></input>

          <label className="text-[#C6C6C6] text-sm mt-4">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            name="pws"
            required
            className=" w-full py-2 pr-10 outline border-none bg-transparent"
          ></input>

          <label className="text-[#C6C6C6] text-sm mt-4">Repeat Password</label>
          <input
            type="password"
            placeholder="Repeat password"
            name="psw-repeat"
            required
            className=" w-full py-2 pr-10 outline border-none bg-transparent"
          ></input>
          <button
            type="submit"
            className="bg-[#CB5585] text-white rounded-full py-2 hover:opacity-70 hover:cursor-pointer duration-150 mt-4"
          >
            Create account
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 bg-[#E8E8E8] text-black rounded-full py-2 hover:opacity-70 hover:cursor-pointer mt-4 "
          >
            <FcGoogle size={20} />
            <span>Sign up with Google</span>
          </button>
        </form>
      </div>

      <div>
        <img
          src="https://i.pinimg.com/1200x/4e/4c/a5/4e4ca5ad9ce2786e4862cab8150b4c03.jpg"
          alt=""
          className="h-screen object-cover"
        />
      </div>
    </div>
  );
};
