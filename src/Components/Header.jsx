"use client";
import { FaBars, FaUser} from "react-icons/fa"
import { IoNotificationsOutline } from "react-icons/io5";
function Header() {
  return (
    <header className="mx-auto  h-24 w-full max-w-[430px] bg-white rounded-t-3xl shadow-lg px-5 flex items-center justify-between">
      {/* Left Side */}
      <div className="flex items-center gap-3">
        <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition">
          <FaBars className="text-blue-950 text-xl" />
        </button>

        <img
          src="/Comit-logo.webp"
          alt="COMITS"
          className="h-10 rounded-2xl w-auto object-contain"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">

        <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
          <IoNotificationsOutline className="text-blue-950 text-2xl" />
        </button>

        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
          <FaUser className="text-blue-950 text-lg" />
        </button>
      </div>
    </header>

  );
}
export default Header;