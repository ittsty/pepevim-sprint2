import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { FaUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const ButtonAccount = () => {
  const { user, hdlLogout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const isOpenDropdown = user && isOpen;

  const hdlHover = () => setIsOpen(true);
  const hdlLeave = () => setIsOpen(false);
  const hdlToggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* ===== Desktop ===== */}
      <div
        role="button"
        onMouseEnter={hdlHover}
        onMouseLeave={hdlLeave}
        className="hidden md:flex items-center justify-center min-w-10"
      >
        <NavLink
          to={user ? "/profile" : "/login"}
          className="h-6 max-w-20 flex items-center justify-center text-white"
        >
          {user ? (
            <span
              className="max-w-20 truncate text-[1rem] font-medium"
              title={user?.first_name}
            >
              {user?.first_name}
            </span>
          ) : (
            <FaUser className="w-5 h-5" />
          )}
        </NavLink>
      </div>

      {/* ===== Mobile ===== */}
      {user ? (
        <div
          type="button"
          className="md:hidden h-full aspect-square flex items-center justify-center"
          onClick={hdlToggle}
        >
          <div className="relative h-6 w-6 flex items-center justify-center text-white">
            <FaUser className="w-full h-full" />

            {isOpenDropdown && (
              <div className="absolute top-8 right-0 bg-white p-3 rounded-xl shadow-lg min-w-30 flex flex-col gap-2">
                <NavLink
                  to="/profile"
                  className="text-primary text-sm whitespace-nowrap"
                >
                  Account
                </NavLink>

                <button
                  type="button"
                  onClick={hdlLogout}
                  className="text-red-500 text-sm text-left whitespace-nowrap"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="md:hidden h-full aspect-square flex items-center justify-center">
          <NavLink
            to="/login"
            className="h-6 w-6 flex items-center justify-center text-white"
          >
            <FaUser className="w-full h-full" />
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default ButtonAccount;
