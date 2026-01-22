import { NavLink } from "react-router-dom";
import ButtonAccount from "../components/ButtonAccount";
import { CartIcon } from "./CartIcon";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const { user } = useAuth();
  const isUser = user;
  const [open, setOpen] = useState(false);
  const navLinkClass = ({ isActive }) =>
    "block px-6 py-3 text-white" + (isActive ? " navlinkActive" : "");
  return (
    <>
      <nav className="w-full h-18 bg-primary flex justify-start items-center text-center py-5 px-12 gap-4 text-(--text-primary)  shadow-lg">
        <div className="logoContainer h-full">
          <img src="/logo-m.png" alt="logo" className="h-full" />
        </div>
        <ul className=" ml-auto hidden md:flex">
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

          {/* dashboard */}
          {isUser && (
            <li>
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  "p-6" + (isActive ? " navlinkActive" : "")
                }
              >
                BEST SELLER
              </NavLink>
            </li>
          )}

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
        <div className="ml-auto flex items-center gap-3">
          <ButtonAccount />
          <NavLink
            to="/cart"
            end
            className={({ isActive }) =>
              "h-full aspect-square text-white p-1" +
              (isActive ? " navlinkActive" : "")
            }
          >
            <CartIcon />
          </NavLink>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden bg-primary border-t">
          <li>
            <NavLink
              to="/"
              end
              className={navLinkClass}
              onClick={() => setOpen(false)}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/collection"
              end
              className={navLinkClass}
              onClick={() => setOpen(false)}
            >
              COLLECTION
            </NavLink>
          </li>

          {isUser && (
            <li>
              <NavLink
                to="/dashboard"
                end
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                BEST SELLER
              </NavLink>
            </li>
          )}

          <li>
            <NavLink
              to="/about"
              end
              className={navLinkClass}
              onClick={() => setOpen(false)}
            >
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              end
              className={navLinkClass}
              onClick={() => setOpen(false)}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
}
