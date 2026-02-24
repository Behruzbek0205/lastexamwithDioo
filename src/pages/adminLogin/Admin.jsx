import React, { useState } from "react";
import { AiOutlineSave } from "react-icons/ai";

const Admin = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        number: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Ma'lumotlar yuborildi:", formData);
    };

    return (
        <section>
            <hr className="border-[#B5B5B5] w-full" />
            <div className="min-h-screen bg-[#F9FAFB] py-12 px-4 md:px-10 lg:px-20 flex justify-center items-start">
                <div className="max-w-4xl w-full">
                    <form onSubmit={handleSubmit}>
                        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-200">
                            <div className="mb-10">
                                <h2 className="text-3xl font-bold text-gray-800">Personal Information</h2>
                                <div className="h-1 w-20 bg-black mt-3 rounded-full"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">First Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        onChange={handleChange}
                                        className="w-full h-14 px-5 rounded-xl border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Enter your last name"
                                        onChange={handleChange}
                                        className="w-full h-14 px-5 rounded-xl border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white"
                                    />
                                </div>

                                <div className="md:col-span-2 flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="example@mail.com"
                                        onChange={handleChange}
                                        className="w-full h-14 px-5 rounded-xl border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="••••••••"
                                        onChange={handleChange}
                                        className="w-full h-14 px-5 rounded-xl border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                                    <input
                                        type="text"
                                        name="number"
                                        placeholder="+998 90 123 45 67"
                                        onChange={handleChange}
                                        className="w-full h-14 px-5 rounded-xl border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white"
                                    />
                                </div>
                            </div>
                            <div className="mt-12 flex justify-end">
                                <button
                                    type="submit"
                                    className="flex items-center justify-center gap-3 px-12 py-4 bg-black text-white rounded-xl font-bold text-l"
                                >
                                    <AiOutlineSave size={22} />
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Admin;