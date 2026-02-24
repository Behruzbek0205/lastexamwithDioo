import React from "react";
import {
  IoIosArrowForward,
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosArrowBack,
} from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Data } from "../../alldata/data";
import { addLiked, deleteLiked } from "../../redux/likedRedux";

const Gadjets = () => {
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.liked.value);

  const handleLike = (item) => {
    if (liked.some((q) => q.id === item.id)) {
      dispatch(deleteLiked(item.id));
    } else {
      dispatch(addLiked(item));
    }
  };

  return (
    <section>
      <hr className="border-[#B5B5B5] w-full" />
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="w-full max-w-[1120px] mx-auto">
          <div className="flex items-center gap-2 text-sm md:text-[16px] text-[#A4A4A4] py-4 overflow-x-auto">
            <span>Home</span>
            <IoIosArrowForward />
            <span>Catalog</span>
            <IoIosArrowForward />
            <span className="text-black font-medium">Gadgets</span>
          </div>
        </div>
        <div className="w-full max-w-[1120px] mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="w-full lg:w-[256px]">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-base md:text-[18px]">Brand</h3>
              <IoIosArrowUp className="text-[18px]" />
            </div>
            <hr className="border-[#B5B5B5]" />
            <div className="w-full h-10 bg-[#F5F5F5] flex gap-2.5 px-4 items-center mt-4 rounded-md text-[#656565]">
              <CiSearch className="text-[16px]" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent flex-1"
              />
            </div>
            <div className="mt-4 flex flex-col gap-2 max-h-[400px] overflow-y-auto px-1">
              <div className="flex items-center gap-2 text-sm md:text-[16px] font-medium">
                <input type="checkbox" className="pt-0.5" /> Apple
                <span className="text-xs md:text-[12px] text-[#656565]">110</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-[16px] font-medium">
                <input type="checkbox" /> Samsung
                <span className="text-xs md:text-[12px] text-[#656565]">125</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-[16px] font-medium">
                <input type="checkbox" /> Xiaomi
                <span className="text-xs md:text-[12px] text-[#656565]">68</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-[16px] font-medium">
                <input type="checkbox" /> Poco
                <span className="text-xs md:text-[12px] text-[#656565]">44</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-[16px] font-medium">
                <input type="checkbox" /> OPPO
                <span className="text-xs md:text-[12px] text-[#656565]">36</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-[16px] font-medium">
                <input type="checkbox" /> Honor
                <span className="text-xs md:text-[12px] text-[#656565]">10</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-[16px] font-medium">
                <input type="checkbox" /> Motorola
                <span className="text-xs md:text-[12px] text-[#656565]">34</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-[16px] font-medium">
                <input type="checkbox" /> Nokia
                <span className="text-xs md:text-[12px] text-[#656565]">22</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-[16px] font-medium">
                <input type="checkbox" /> Realme
                <span className="text-xs md:text-[12px] text-[#656565]">35</span>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-base md:text-[18px]">
                  Battery capacity
                </h3>
                <IoIosArrowDown />
              </div>
              <hr className="border-[#B5B5B5]" />
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-base md:text-[18px]">
                  Screen type
                </h3>
                <IoIosArrowDown />
              </div>
              <hr className="border-[#B5B5B5]" />
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-base md:text-[18px]">
                  Screen diagonal
                </h3>
                <IoIosArrowDown />
              </div>
              <hr className="border-[#B5B5B5]" />
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-base md:text-[18px]">
                  Protection class
                </h3>
                <IoIosArrowDown />
              </div>
              <hr className="border-[#B5B5B5]" />
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-base md:text-[18px]">
                  Built-in memory
                </h3>
                <IoIosArrowDown />
              </div>
              <hr className="border-[#B5B5B5]" />
            </div>
          </div>
          <div className="flex-1 mt-4 md:mt-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <h3 className="text-[#6C6C6C] font-medium text-sm md:text-[16px]">
                Selected Products:{" "}
                <span className="text-lg md:text-[20px] text-black">85</span>
              </h3>
              <select className="w-full sm:w-[256px] h-10 border border-[#D4D4D4] rounded-lg px-3 text-sm md:text-[16px]">
                <option value="by rating">By rating</option>
                <option value="by price">By price</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {Data.map((item, index) => (
                <div
                  key={index}
                  className="w-full h-[432px] flex flex-col items-center justify-around rounded-[9px] bg-[#F6F6F6]"
                >
                  <div
                    className="w-full flex justify-end pr-4 pt-2 cursor-pointer"
                    onClick={() => handleLike(item)}
                  >
                    {liked.some((q) => q.id === item.id) ? (
                      <FaHeart className="text-red-500 text-[29px]" />
                    ) : (
                      <FaHeart className="text-[#B5B5B5] text-[29px]" />
                    )}
                  </div>

                  <Link
                    to={`/information/${item.id}`}
                    className="flex items-center justify-center"
                  >
                    <img
                      src={item.image}
                      alt="Image"
                      className="max-w-full h-auto object-contain"
                    />
                  </Link>

                  <p className="w-full px-4 text-center font-medium md:text-[18px]">
                    {item.text}
                  </p>
                  <span className="text-xl md:text-[24px] font-semibold">
                    ${item.price}
                  </span>

                  <Link to={`/information/${item.id}`}>
                    <button className="px-15 sm:px-14 py-3 
    bg-black text-white rounded-lg 
       text-sm sm:text-base 
      transition-all duration-300 
  hover:bg-[#EDEDED] hover:text-black 
hover:-translate-y-1 hover:shadow-xl">
                      Buy Now
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 mt-7 mb-8">
          <IoIosArrowBack className="text-lg md:text-[22px] cursor-pointer" />
          <span className="w-8 h-8 rounded flex items-center justify-center bg-black text-white cursor-pointer">
            1
          </span>
          <span className="w-8 h-8 rounded flex items-center justify-center bg-[#F6F6F6] text-black cursor-pointer">
            2
          </span>
          <span className="w-8 h-8 rounded flex items-center justify-center bg-[#F6F6F6] text-black cursor-pointer">
            3
          </span>
          <span className="w-8 h-8 rounded flex items-center justify-center bg-[#F6F6F6] text-black">
            ...
          </span>
          <span className="w-8 h-8 rounded flex items-center justify-center bg-[#F6F6F6] text-black cursor-pointer">
            12
          </span>
          <IoIosArrowForward className="text-lg md:text-[22px] cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Gadjets;
