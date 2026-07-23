"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaMobileAlt, FaUniversity, FaCreditCard, FaUser } from "react-icons/fa";

function BottomNavigation() {
  const pathname = usePathname();

  const menus = [
    {
      name: "Home",
      href: "/",
      icon: <FaHome />,
    },
    {
      name: "MFS",
      href: "/mfs",
      icon: <FaMobileAlt />,
    },
    {
      name: "Bank",
      href: "/bank",
      icon: <FaUniversity />,
    },
    {
      name: "Card",
      href: "/card",
      icon: <FaCreditCard />,
    },
    {
      name: "Profile",
      href: "/profile",
      icon: <FaUser />,
    },
  ];

  return (
  <div className="fixed bottom-0 inset-x-0 z-50 flex justify-center">

    <div className="w-103 max-w-[430px] bg-white border border-gray-200 mb-3 rounded-b-3xl shadow-xl">

      <div className="grid grid-cols-5 h-16">

        {menus.map((menu) => {
          const active = pathname === menu.href;

          return (
            <Link
              key={menu.name}
              href={menu.href}
              className={`flex flex-col items-center justify-center transition-all duration-200 ${
                active
                  ? "text-[#25d184]"
                  : "text-gray-500 hover:text-[#25d184]"
              }`}
            >
              <div className="text-xl">
                {menu.icon}
              </div>

              <span className="text-xs mt-1 font-medium">
                {menu.name}
              </span>
            </Link>
          );
        })}

      </div>

    </div>

  </div>
);}

export default BottomNavigation;