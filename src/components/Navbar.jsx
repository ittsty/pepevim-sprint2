import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="w-full h-18 bg-primary flex justify-start items-center text-center py-5 px-12 gap-4 text-(--text-primary)  shadow-lg">
      <div className="logoContainer h-full">
        <img src="logo-m.png" alt="logo" className="h-full" />
      </div>
      <ul className="gap-6 mx-auto hidden md:flex">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "p-6" + (isActive ? " navlinkActive" : "")
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            end
            className={({ isActive }) =>
              "p-6" + (isActive ? " navlinkActive" : "")
            }
          >
            COLLECTION
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            end
            className={({ isActive }) =>
              "p-6" + (isActive ? " navlinkActive" : "")
            }
          >
            ABOUT US
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            end
            className={({ isActive }) =>
              "p-6" + (isActive ? " navlinkActive" : "")
            }
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
      <NavLink
        to="/login"
        end
        className={({ isActive }) =>
          " h-full aspect-square text-white p-1" +
          (isActive ? " navlinkActive" : "")
        }
      >
        <FaUser className="w-[95%] h-[95%]" />
      </NavLink>
      <NavLink
        to="/payment"
        end
        className={({ isActive }) =>
          " h-full aspect-square text-white p-1" +
          (isActive ? " navlinkActive" : "")
        }
      >
        <FaCartShopping className="w-full h-full" />
      </NavLink>
    </nav>
  );
}
