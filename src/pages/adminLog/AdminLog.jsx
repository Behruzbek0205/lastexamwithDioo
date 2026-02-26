import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLog = () => {
    const navigate = useNavigate();
    const [number, setNumber] = useState("");
    const [mm, setMm] = useState("");
    const [password, setPassword] = useState("");

    const Get = () => {
        toast.error("Birinchi navbatda pul to'lang do'stim!", {
            position: "top-right",
            autoClose: 2000,
        });
    };

    const handlePay = () => {
        if (!mm || !number || !password) {
            toast.warn("Iltimos, barcha maydonlarni to'ldiring!");
            return;
        }

        toast.success("Muvaffaqiyatli to'landi! Endi siz adminsiz ", {
            position: "top-right",
            autoClose: 500,
            onClose: () => navigate("/admin")
        });
    };

    return (
        <section className="flex flex-col lg:flex-row gap-10 p-6 md:p-20 bg-gray-50 min-h-screen">
            <ToastContainer />

            <div className="flex-1 flex flex-col justify-center">
                <div className="max-w-lg w-full bg-white border border-gray-200 rounded-[2.5rem] p-10 shadow-sm">
                    <div className="mb-6">
                        <h2 className="text-3xl font-black text-gray-900">About Admin</h2>
                        <div className="h-1.5 w-20 bg-blue-600 mt-2 rounded-full"></div>
                    </div>

                    <div className="space-y-6 mb-10">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">1</div>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                If you are an admin, you have special privileges.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">2</div>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                In addition, you have more access than other users — you can view
                                more products and add them to your cart without limitations.
                            </p>
                        </div>
                        <div className="mt-8 p-6 bg-blue-50 rounded-[2rem] border border-blue-100 flex justify-between items-center">
                            <span className="text-blue-900 font-bold text-lg">Admin Status Price:</span>
                            <span className="text-3xl font-black text-blue-600">$10</span>
                        </div>
                    </div>
                    <button
                        className="w-full py-4 bg-black text-white rounded-2xl font-black transition-all duration-300 
                                   hover:bg-[#EDEDED] hover:text-black hover:shadow-xl active:scale-95"
                        onClick={Get}
                    >
                        Get Admin Status
                    </button>
                </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Admin Payment</h3>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Card Number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:border-blue-500"
                        />
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="MM/YY"
                                value={mm}
                                onChange={(e) => setMm(e.target.value)}
                                className="w-1/2 p-3 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:border-blue-500"
                            />
                            <input
                                type="password"
                                placeholder="CVV"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-1/2 p-3 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <button
                        onClick={handlePay}
                        className="w-full mt-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition active:scale-95"
                    >
                        Pay $10
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AdminLog;