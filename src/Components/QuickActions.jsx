"use client";

import { FaMoneyBillWave, FaFileInvoiceDollar, FaChartLine, FaUniversity, FaMobileAlt, FaCreditCard, FaBook, FaWallet } from "react-icons/fa";

function QuickActions() {
  const actions = [
    {
      title: "Bank",
      icon: <FaUniversity />,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Voucher",
      icon: <FaFileInvoiceDollar />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Receive",
      icon: <FaMoneyBillWave />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Reports",
      icon: <FaChartLine />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "MFS",
      icon: <FaMobileAlt />,
      color: "bg-pink-100 text-pink-600",
    },
    {
      title: "Card",
      icon: <FaCreditCard />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Ledger",
      icon: <FaBook />,
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      title: "Expense",
      icon: <FaWallet />,
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <section className="max-w-[430px] mx-auto mt-5 px-4">

      {/* Title */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          Quick Actions
        </h2>

        <button className="text-indigo-700 text-sm font-semibold hover:text-indigo-400 transition">
          View All
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-4">

        {actions.map((action, index) => (
          <div
            key={index}
            className="transition p-4 flex flex-col items-center"
          >
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${action.color}`}
            >
              {action.icon}
            </div>

            <p className="mt-3 text-xs font-medium text-center text-gray-700">
              {action.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
export default QuickActions;