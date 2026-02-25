import React, { useState } from "react";
import { AiOutlineSave } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import { addAdmin } from "../../redux/adminRedux";

const Admin = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !firstname || !password || !lastname || !number) {
            alert("Iltimos hamma joylarni to'ldiring");
            return;
        }

        dispatch(addAdmin({ firstname, lastname, email, password, number }));

        navigate("/adminPage");
    };

    return (
        <section className=" bg-[#F9FAFB] py-12 px-4 flex justify-center">
            <div className="max-w-4xl w-full">
                <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-200">
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-800">Personal Information</h2>
                        <div className="h-1 w-20 bg-black mt-3 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-700">First Name</label>
                            <input type="text" onChange={(e) => setFirstname(e.target.value)} className="w-full h-14 px-5 rounded-xl border border-gray-300 outline-none focus:border-black" placeholder="Enter name" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-700">Last Name</label>
                            <input type="text" onChange={(e) => setLastname(e.target.value)} className="w-full h-14 px-5 rounded-xl border border-gray-300 outline-none focus:border-black" placeholder="Enter last name" />
                        </div>
                        <div className="md:col-span-2 flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-700">Email Address</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} className="w-full h-14 px-5 rounded-xl border border-gray-300 outline-none focus:border-black" placeholder="example@mail.com" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-700">Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="w-full h-14 px-5 rounded-xl border border-gray-300 outline-none focus:border-black" placeholder="••••••••" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-700">Phone Number</label>
                            <input type="text" onChange={(e) => setNumber(e.target.value)} className="w-full h-14 px-5 rounded-xl border border-gray-300 outline-none focus:border-black" placeholder="+998..." />
                        </div>
                    </div>
                    <div className="mt-12 flex justify-end">
                        <button type="submit" className="flex items-center gap-3 px-12 py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all active:scale-95">
                            <AiOutlineSave size={22} />
                            Save and View
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Admin;