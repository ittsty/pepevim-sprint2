import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Testpang = () => {
  const { hdlLogout } = useAuth();
  return (
    <div>
      <button
        className="border-b-2 hover:cursor-pointer shadow-2xs bg-amber-200"
        onClick={hdlLogout}
      >
        logout
      </button>
    </div>
  );
};

export default Testpang;
