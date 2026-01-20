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
    <div>
      <button
        onMouseEnter={hdlHover}
        onMouseLeave={hdlLeave}
        className="hidden md:block min-w-10"
      >
        <div className="relative">
          <button>
            <NavLink
              to={user ? "/profile" : "/login"}
              className=" h-full aspect-square text-white p-1 ml-auto md:ml-0"
            >
              {user ? (
                <span>{user?.first_name}</span>
              ) : (
                <FaUser className="w-[95%] h-[95%]" />
              )}
            </NavLink>
          </button>
          {isOpenDropdown && (
            <div className="absolute top-6 right-0 bg-white p-2 rounded-md shadow-md min-w-10">
              <button onClick={hdlLogout} className="text-red-600 text-nowrap">
                log out
              </button>
            </div>
          )}
        </div>
      </button>

      {user ? (
        <button type="button" className="md:hidden" onClick={hdlToggle}>
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
        </button>
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
