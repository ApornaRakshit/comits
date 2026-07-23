"use client";

import { FaMoneyBillWave, FaFileInvoiceDollar, FaChartLine, FaUniversity, FaMobileAlt, FaCreditCard, FaBook, FaWallet } from "react-icons/fa";

function Overview() {
    const actions = [
        {
            title: "Receive",
            icon: <FaMoneyBillWave />,
            color: "bg-green-100 text-green-600",
        },
        {
            title: "Voucher",
            icon: <FaFileInvoiceDollar />,
            color: "bg-orange-100 text-orange-600",
        },
        {
            title: "Reports",
            icon: <FaChartLine />,
            color: "bg-blue-100 text-blue-600",
        },
        {
            title: "Bank",
            icon: <FaUniversity />,
            color: "bg-indigo-100 text-indigo-600",
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
        <section className=" -mt-3 mx-auto">

            {/* Greeting */}
            <div className="mb-5 max-w-[300px] mx-auto text-center bg-gradient-to-r rounded-t-2xl from-[#092b4e] to-[#3984e6]">
                <h2 className="text-2xl py-2 font-bold text-white">
                    Good Morning
                </h2>

                <p className="text-gray-200 mt-1">
                    Welcome back,
                    <span className="font-semibold text-[#25d184]">
                        {" "}Aporna Rakshit
                    </span>
                </p>
                <p className="text-sm text-slate-200">
                    Accountant
                </p>
            </div>
        </section>
    );
}

export default Overview;