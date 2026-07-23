"use client";

import {FaWallet, FaUniversity, FaMobileAlt, FaCreditCard} from "react-icons/fa";

function MyAccounts() {
  const accounts = [
    {
      title: "Wallet",
      icon: <FaWallet />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Bank",
      icon: <FaUniversity />,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "MFS",
      icon: <FaMobileAlt />,
      color: "bg-pink-50 text-pink-600",
    },
    {
      title: "Card",
      icon: <FaCreditCard />,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <section className="max-w-[430px] mx-auto px-4 mt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800">
          My Accounts
        </h2>
      </div>

      {/* Accounts */}
      <div className="p-5">
        <div className="grid grid-cols-4 gap-4">
          {accounts.map((account) => (
            <button
              key={account.title}
              className="flex flex-col items-center group"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${account.color} group-hover:scale-110 transition`}
              >
                {account.icon}
              </div>

              <span className="mt-2 text-xs font-medium text-gray-700">
                {account.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyAccounts;