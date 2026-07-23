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
        <section className=" ">

            {/* Greeting */}
            <div className="-mt-3 max-w-[300px] mx-auto text-center bg-gradient-to-r rounded-t-2xl from-[#092b4e] to-[#3984e6]">
                <h2 className="text-2xl py-2 font-bold text-white">
                    Good Morning
                </h2>

                <p className="text-gray-200 mt-1">
                    Welcome back,
                    <span className="font-semibold text-[#25d184]">
                        {" "}Aporna Rakshit
                    </span>
                </p>
                <p className="text-sm text-slate-200 py-2">
                    Accountant
                </p>
            </div>

            {/* <div className="bg-white shadow-md p-5"> */}

                {/* Top Section */}
                <div className="bg-white rounded-2xl shadow-md p-6">

                    {/* Header */}
                    <div className="flex justify-between items-start">

                        {/* Left */}
                        <div>
                            <h2 className="text-3xl font-bold text-indigo-900">
                                Wallet
                            </h2>

                            <div className="flex items-center gap-1 mt-1 text-sm">
                                <span className="text-gray-600">
                                    Welcome Today's
                                </span>

                                <span className="font-semibold text-green-500">
                                    Overview
                                </span>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="flex flex-col gap-3">

                            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition">
                                Debit
                            </button>

                            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition">
                                Credit
                            </button>

                        </div>

                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200 my-6"></div>

                    {/* Filter Tabs */}
                    <div className="flex gap-3 mb-6">

                        <button className="px-5 py-2 rounded-lg bg-gradient-to-l from-sky-600 to-indigo-900 text-white font-medium shadow">
                            Today's
                        </button>

                        <button className="px-5 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium">
                            Monthly
                        </button>

                        <button className="px-5 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium">
                            Yearly
                        </button>

                    </div>

                    {/* Balance Card */}
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white">

                        <p className="text-sm opacity-80">
                            Balance (Today's)
                        </p>

                        <h3 className="text-4xl font-bold mt-2">
                            ৳ 20,000
                        </h3>

                        <div className="grid grid-cols-2 gap-6 mt-6">

                            <div>
                                <p className="text-sm opacity-80">
                                    Today's Debit
                                </p>

                                <h4 className="text-xl font-semibold mt-1">
                                    ৳ 8,500
                                </h4>
                            </div>

                            <div>
                                <p className="text-sm opacity-80">
                                    Today's Credit
                                </p>

                                <h4 className="text-xl font-semibold mt-1">
                                    ৳ 28,500
                                </h4>
                            </div>

                        </div>

                    </div>

                </div>
        </section>
    );
}


export default Overview;