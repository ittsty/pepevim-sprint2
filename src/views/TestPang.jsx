import { env } from "../env";
import React from "react";
import { logout } from "../services/auth";

const API_URL = env.API_URL;

const Testpang = () => {
  const hldLogout = async () => {
    await logout();
  };

  return (
    <div>
      <button
        className="border-b-2 hover:cursor-pointer shadow-2xs bg-amber-200"
        onClick={hldLogout}
      >
        logout
      </button>
    </div>
  );
};

export default Testpang;
