import { AiOutlineDelete, AiOutlineMail, AiOutlineUser, AiOutlinePhone, AiOutlinePlus } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAdmin } from "../../redux/adminRedux";

const AdminPage = () => {
    const admin = useSelector((state) => state.admin.value);
    const dispatch = useDispatch();

    const del = (id) => {
        if (window.confirm("Haqiqatan ham ushbu foydalanuvchini o'chirmoqchimisiz?")) {
            dispatch(deleteAdmin(id));
        }
    };

    return (
        <div className="bg-[#f0f2f5] min-h-screen py-12 px-6">
            <div className="max-w-7xl mx-auto">
                
                {/* Sahifa Sarlavhasi va Qo'shish tugmasi */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Admin Management</h1>
                        <p className="text-gray-500 mt-1 font-medium">Tizimdagi barcha administratorlar ro'yxati</p>
                    </div>
                    <Link 
                        to="/admin" 
                        className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all active:scale-95"
                    >
                        <AiOutlinePlus size={20} />
                        Add New Admin
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {admin && admin.length > 0 ? (
                        admin.map((item) => (
                            <div
                                key={item.id}
                                className="group relative bg-white rounded-[2.5rem] p-2 shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100"
                            >
                                {/* Karta Ichki Qismi */}
                                <div className="bg-gray-50 rounded-[2.2rem] p-6 h-full flex flex-col items-center">
                                    
                                    {/* Rasm qismi - Neon effekt bilan */}
                                    <div className="relative mb-6">
                                        <div className="absolute inset-0 bg-black rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                        <img
                                            src={item.url || "https://api.dicebear.com/7.x/avataaars/svg?seed=" + item.firstname}
                                            alt={item.firstname}
                                            className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover relative z-10"
                                        />
                                    </div>

                                    {/* Ma'lumotlar */}
                                    <h3 className="text-xl font-extrabold text-gray-800 mb-1 group-hover:text-black transition-colors">
                                        {item.firstname} {item.lastname}
                                    </h3>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-200 px-3 py-1 rounded-full mb-6">
                                        Administrator
                                    </span>

                                    <div className="w-full space-y-3 mb-8">
                                        <div className="flex items-center p-3 bg-white rounded-2xl shadow-sm border border-gray-100 group-hover:border-blue-100 transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 mr-3">
                                                <AiOutlineMail size={16} />
                                            </div>
                                            <span className="text-xs font-semibold text-gray-600 truncate">{item.email}</span>
                                        </div>
                                        
                                        <div className="flex items-center p-3 bg-white rounded-2xl shadow-sm border border-gray-100 group-hover:border-green-100 transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-500 mr-3">
                                                <AiOutlinePhone size={16} />
                                            </div>
                                            <span className="text-xs font-semibold text-gray-600">{item.number}</span>
                                        </div>
                                    </div>

                                    {/* Action Tugmalari */}
                                    <div className="flex gap-3 w-full mt-auto">
                                        <Link
                                            to={`/update/${item.id}`}
                                            className="flex-1 flex items-center justify-center py-3.5 rounded-2xl bg-white text-gray-700 font-bold text-xs shadow-sm hover:bg-black hover:text-white transition-all duration-300 border border-gray-100"
                                        >
                                            <GrEdit className="mr-2" size={14} />
                                            Edit
                                        </Link>

                                        <button
                                            onClick={() => del(item.id)}
                                            className="w-14 flex items-center justify-center rounded-2xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 border border-red-100 shadow-sm"
                                        >
                                            <AiOutlineDelete size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full flex flex-col items-center justify-center py-24 bg-white rounded-[3rem] shadow-inner border-2 border-dashed border-gray-200">
                            <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mb-6">
                                <AiOutlineUser size={60} />
                            </div>
                            <p className="text-2xl font-black text-gray-400 italic">No Admins Found</p>
                            <Link to="/admin" className="mt-4 text-black font-bold hover:underline">Hozir bittasini qo'shing →</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminPage;