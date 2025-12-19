import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
export default function Navbar() {
  return (
    <nav className="w-full h-18 bg-primary flex justify-start items-center text-center py-5 px-12 gap-4 text-(--text-primary) fixed shadow-lg border-b border-gray-600">
      <div className="logoContainer h-full">
        <img src="logo-m.png" alt="logo" className="h-full"/>
      </div>
      <ul className="gap-6 mx-auto hidden md:flex">
        <li>HOME</li>
        <li>COLLECTION</li>
        <li>ABOUT US</li>
        <li>CONTACT</li>
      </ul>
      <button className=" h-full aspect-square text-white p-1"><FaUser className="w-[95%] h-[95%]"/></button>
      <button className=" h-full aspect-square text-white p-1"><FaCartShopping className="w-full h-full" /></button>
    </nav>
  );
}
