import React from "react";
import { Link } from "react-router-dom";

const AdminLog = () => {
    return (
        <section>
            <hr className="border-[#B5B5B5] w-full" />
            <div className="min-h-screen bg-gray-50 flex items-center justify-start px-6 md:px-20">
                <div className="max-w-lg w-full bg-white border border-gray-200 rounded-3xl p-10 shadow-sm">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">
                            About Admin
                        </h2>
                        <div className="h-1 w-32 bg-black mt-2"></div>
                    </div>

                    <div className="space-y-6 mb-10">
                        <div className="flex gap-3">
                            <span className="font-bold text-lg text-black">1.</span>
                            <p className="text-gray-600 leading-relaxed">
                                If you are an admin, you have special privileges. You can create your own
                                products, manage them, and sell them to earn money.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="font-bold text-lg text-black">2.</span>
                            <p className="text-gray-600 leading-relaxed">
                                In addition, you have more access than other users — you can view
                                more products and add them to your cart without limitations.
                            </p>
                        </div>

                        <div className="mt-8 p-4 bg-gray-50 rounded-2xl border  border-gray-300 flex justify-between items-center">
                            <span className="text-gray-800 font-semibold">Admin Status Price:</span>
                            <span className="text-2xl font-black text-black">$10</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link to="/admin" className="w-full sm:w-auto">
                            <button className="w-full px-11 sm:px-10 py-3 
                                bg-black text-white rounded-lg 
                                text-sm sm:text-base font-bold
                                transition-all duration-300 
                                hover:bg-[#EDEDED] hover:text-black hover:shadow-xl active:scale-95">
                                Get Admin
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdminLog;