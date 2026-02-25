import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineMail, AiOutlineUser, AiOutlinePhone, AiOutlinePlus, AiOutlineClose, AiOutlineSave } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAdmin, updateLogin } from "../../redux/adminRedux"; 

const AdminPage = () => {
    const admin = useSelector((state) => state.admin.value);
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingAdmin, setEditingAdmin] = useState(null);

    const del = (id) => {
        if (window.confirm("Haqiqatan ham ushbu foydalanuvchini o'chirmoqchimisiz?")) {
            dispatch(deleteAdmin(id));
        }
    };

    const handleEdit = (item) => {
        setEditingAdmin({ ...item });
        setIsModalOpen(true);
    };

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(updateLogin(editingAdmin));
        setIsModalOpen(false);
    };

    return (
        <div className="bg-[#f0f2f5] min-h-screen py-12 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Admin Management</h1>
                        <p className="text-gray-500 mt-1 font-medium">Tizimdagi administratorlarni shu yerning o'zida boshqaring</p>
                    </div>
                    <Link to="/admin" className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all">
                        <AiOutlinePlus size={20} /> Add New Admin
                    </Link>
                </div>

                {/* Kartalar ro'yxati */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {admin && admin.length > 0 ? (
                        admin.map((item) => (
                            <div key={item.id} className="group bg-white rounded-[2.5rem] p-2 shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100">
                                <div className="bg-gray-50 rounded-[2.2rem] p-6 h-full flex flex-col items-center">
                                    <div className="relative mb-6">
                                        <img
                                            src={item.url ? item.url : "https://via.placeholder.com/150"}
                                            alt={item.firstname}
                                            className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
                                        />
                                    </div>

                                    <h3 className="text-xl font-extrabold text-gray-800 mb-1">{item.firstname} {item.lastname}</h3>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-200 px-3 py-1 rounded-full mb-6">Administrator</span>

                                    <div className="w-full space-y-3 mb-8">
                                        <div className="flex items-center p-3 bg-white rounded-2xl shadow-sm text-xs font-semibold text-gray-600 truncate">
                                            <AiOutlineMail size={16} className="text-blue-500 mr-3" /> {item.email}
                                        </div>
                                        <div className="flex items-center p-3 bg-white rounded-2xl shadow-sm text-xs font-semibold text-gray-600">
                                            <AiOutlinePhone size={16} className="text-green-500 mr-3" /> {item.number}
                                        </div>
                                    </div>

                                    <div className="flex gap-3 w-full mt-auto">
                                        <button
                                            onClick={() => handleEdit(item)}
                                            className="flex-1 flex items-center justify-center py-3.5 rounded-2xl bg-white text-gray-700 font-bold text-xs shadow-sm hover:bg-black hover:text-white transition-all border border-gray-100"
                                        >
                                            <GrEdit className="mr-2" size={14} /> Edit
                                        </button>
                                        <button
                                            onClick={() => del(item.id)}
                                            className="w-14 flex items-center justify-center rounded-2xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm"
                                        >
                                            <AiOutlineDelete size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center text-gray-400 font-bold">Adminlar topilmadi</div>
                    )}
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-lg rounded-[3rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                        <div className="bg-black p-8 text-white flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Edit Profile</h2>
                            <button onClick={() => setIsModalOpen(false)} className="hover:rotate-90 transition-transform">
                                <AiOutlineClose size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="p-8 space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 ml-1">First Name</label>
                                    <input
                                        type="text"
                                        value={editingAdmin.firstname}
                                        onChange={(e) => setEditingAdmin({ ...editingAdmin, firstname: e.target.value })}
                                        className="w-full h-12 px-5 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-black transition-all"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 ml-1">Last Name</label>
                                    <input
                                        type="text"
                                        value={editingAdmin.lastname}
                                        onChange={(e) => setEditingAdmin({ ...editingAdmin, lastname: e.target.value })}
                                        className="w-full h-12 px-5 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-black transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-500 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    value={editingAdmin.email}
                                    onChange={(e) => setEditingAdmin({ ...editingAdmin, email: e.target.value })}
                                    className="w-full h-12 px-5 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-black transition-all"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-500 ml-1">Phone Number</label>
                                <input
                                    type="text"
                                    value={editingAdmin.number}
                                    onChange={(e) => setEditingAdmin({ ...editingAdmin, number: e.target.value })}
                                    className="w-full h-12 px-5 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-black transition-all"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-500 ml-1">Profile Image URL</label>
                                <input
                                    type="text"
                                    value={editingAdmin.url}
                                    onChange={(e) => setEditingAdmin({ ...editingAdmin, url: e.target.value })}
                                    placeholder="https://..."
                                    className="w-full h-12 px-5 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-black transition-all"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full h-14 bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-xl active:scale-[0.98] transition-all mt-4"
                            >
                                <AiOutlineSave size={20} /> Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPage;