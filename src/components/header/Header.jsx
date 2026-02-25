import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { TbUser } from "react-icons/tb";
import { FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const liked = useSelector((state) => state.liked.value);

  return (
    <header className="max-w-[1440px] mx-auto bg-white">
      <div className="w-full px-4 md:px-6 lg:px-20 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <Link to="/" className="shrink-0">
            <img src={Logo} alt="Logo" className="h-7 md:h-10" />
          </Link>
        </div>

        <div className="hidden lg:flex flex-1 max-w-[400px] h-12 items-center bg-[#F5F5F5] px-4 rounded-xl text-[#989898] gap-3">
          <CiSearch className="text-2xl" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full text-[16px]"
          />
        </div>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-10 text-[#989898] font-medium">
          <Link to="/" className="text-black hover:opacity-70 transition-opacity">Home</Link>
          <Link to="/" className="hover:text-black transition-colors">About</Link>
          <Link to="/" className="hover:text-black transition-colors">Contact</Link>
          <Link to="/" className="hover:text-black transition-colors">Blog</Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <div className="flex items-center gap-3 md:gap-5">
            <Link to="/liked" className="relative group">
              {liked.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-red-600 absolute -top-2 -right-2 text-[10px] flex items-center justify-center text-white font-bold">
                  {liked.length}
                </span>
              )}
              <FaRegHeart className="text-2xl group-hover:text-red-600 transition-colors" />
            </Link>
            <Link to="/" className="hover:opacity-60 transition-opacity">
              <BsCart3 className="text-2xl" />
            </Link>
            <Link to="/about" className="hover:opacity-60 transition-opacity">
              <TbUser className="text-2xl" />
            </Link>
          </div>

          <Link to="/adminLog" className="hidden sm:block">
            <button className="px-5 py-2.5 bg-black text-white rounded-xl text-sm font-semibold transition-all duration-300 
                                hover:bg-[#EDEDED] hover:text-black hover:shadow-xl active:scale-95">
              About Admin
            </button>
          </Link>
        </div>
      </div>

      <div className="lg:hidden px-4 pb-4">
        <div className="w-full h-11 flex items-center bg-[#F5F5F5] px-4 rounded-xl text-[#989898] gap-2 border border-transparent focus-within:border-gray-200 focus-within:bg-white transition-all">
          <CiSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full bg-transparent text-sm"
          />
        </div>
      </div>

      <div className={`
        lg:hidden fixed inset-0 top-[120px] bg-white z-40 transition-transform duration-300 ease-in-out border-t
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="flex flex-col p-6 gap-6 text-xl font-semibold">
          <Link to="/" onClick={() => setMenuOpen(false)} className="border-b pb-2">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="text-gray-500 border-b pb-2">About</Link>
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-500 border-b pb-2">Contact</Link>
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-500 border-b pb-2">Blog</Link>
          <Link to="/adminLog" onClick={() => setMenuOpen(false)} className="sm:hidden">
            <button className="w-full py-4 bg-black text-white rounded-2xl">About Admin</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;