import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { TbUser } from "react-icons/tb";
import { FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { useSelector } from "react-redux";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const liked = useSelector((state) => state.liked.value);

  return (
    <header className="max-w-[1440px] bg-white  relative">
      <div className="w-full px-4 md:px-6 lg:px-20 py-4 flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-8 md:h-10" />
        </Link>
        <div className="hidden lg:flex w-full max-w-[372px] h-12 items-center bg-[#F5F5F5] p-4 rounded-lg text-[#989898] text-[20px] gap-2 mx-6">
          <CiSearch />
          <input type="text" placeholder="Search" className="outline-none " />
        </div>
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12 text-[#989898] font-medium ">
          <Link to="/">
            <span className="text-black">Home</span>
          </Link>
          <Link to="/">
            <span>About</span>
          </Link>
          <Link to="/">
            <span>Contact</span>
          </Link>
          <Link to="/">
            <span>Blog</span>
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:gap-4 lg:gap-6 ">
          <Link to="/liked" className="relative">
            <div className="w-4 h-4 rounded-full bg-red-600 absolute -top-2 left-4 text-[10px] flex items-center justify-center text-white font-semibold">
              {liked.length}
            </div>
            <FaRegHeart className="text-xl md:text-2xl" />
          </Link>
          <Link to="/">
            <BsCart3 className="text-xl md:text-2xl" />
          </Link>
          <Link to="/about">
            <TbUser className="text-xl md:text-2xl" />
          </Link>
          <button
            className="lg:hidden text-xl md:text-2xl "
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      <div className="lg:hidden px-4 pb-4">
        <div className="w-full h-10 flex items-center bg-[#F5F5F5] px-3 rounded-lg text-[#989898] gap-2">
          <CiSearch className="text-lg" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full bg-transparent text-sm"
          />
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden absolute top-full right-4 w-48 bg-white">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3 text-black  font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3 text-[#989898] "
          >
            About
          </Link>
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3 text-[#989898] "
          >
            Contact
          </Link>
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3 text-[#989898] "
          >
            Blog
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
