import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

import { FaUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const ButtonAccount = () => {
  const { user, hdlLogout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const isOpenDropdown = user && isOpen;
  const hdlHover = () => {
    setIsOpen(true);
  };
  const hdlLeave = () => {
    setIsOpen(false);
  };

  const hdlToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <div
        role="button"
        onMouseEnter={hdlHover}
        onMouseLeave={hdlLeave}
        className="hidden md:block min-w-10"
      >
        <button className=" w-5">
          <NavLink
            to={user ? "/profile" : "/login"}
            className=" h-full aspect-square text-white p-1 ml-auto md:ml-0 max-w-1.5"
          >
            {user ? (
              <span className="">{user?.first_name}</span>
            ) : (
              <FaUser className="w-[95%] h-[95%]" />
            )}
          </NavLink>
        </button>
      </div>

      {user ? (
        <div type="button" className="md:hidden" onClick={hdlToggle}>
          <div className="relative">
            <FaUser className="w-[95%] h-[95%]" />
            {isOpenDropdown && (
              <div className="absolute top-7 right-0 bg-white p-2 rounded-md shadow-md min-w-10 flex flex-col items-start">
                <button type="button" className="text-nowrap text-primary">
                  <NavLink to="/profile">Account</NavLink>
                </button>

                <button
                  type="button"
                  onClick={hdlLogout}
                  className="text-red-500 text-nowrap"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <button type="button" className="md:hidden">
          <NavLink to="/login">
            <FaUser className="w-[95%] h-[95%]" />
          </NavLink>
        </button>
      )}
    </div>
  );
};

export default ButtonAccount;
