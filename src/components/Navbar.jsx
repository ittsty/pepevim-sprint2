import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (

    <nav className="w-full h-18 bg-primary flex justify-start items-center text-center py-5 px-12 gap-4 text-white shadow-lg">
      <div className="logoContainer h-full">
        <img src="/logo-m.png" alt="logo" className="h-full" />
      </div>

      <ul className="mx-auto hidden md:flex">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "p-6 transition-all " + (isActive ? "bg-white text-[#A71B79]" : "text-white")
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              "p-6 transition-all " + (isActive ? "bg-white text-[#A71B79]" : "text-white")
            }
          >
            COLLECTION
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              "p-6 transition-all " + (isActive ? "bg-white text-[#A71B79]" : "text-white")
            }
          >
            ABOUT US
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "p-6 transition-all " + (isActive ? "bg-white text-[#A71B79]" : "text-white")
            }
          >
            CONTACT
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-4 ml-auto md:ml-0">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            "h-10 w-10 flex items-center justify-center text-white rounded-full transition-all " +
            (isActive ? "bg-white text-[#A71B79]" : "")
          }
        >
          <FaUser size={20} />
        </NavLink>

        <NavLink
          to="/payment"
          className={({ isActive }) =>
            "h-10 w-10 flex items-center justify-center text-white rounded-full transition-all " +
            (isActive ? "bg-white text-[#A71B79]" : "")
          }
        >
          <FaCartShopping size={20} />
        </NavLink>
      </div>
    </nav>
  );
}