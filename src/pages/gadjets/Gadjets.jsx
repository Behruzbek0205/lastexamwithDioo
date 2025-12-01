import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { Data } from "../../alldata/data";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

const Gadjets = () => {
  return (
    <div className=" md:px-6 lg:px-8">
      <hr className="text-[#B5B5B5]" />
      <div className="top ml-40">
        <div className="text flex gap-2 md:gap-4 items-center py-6 md:py-11 text-[#A4A4A4] text-sm md:text-[18px] font-medium inter overflow-x-auto">
          <span>Home</span>
          <IoIosArrowForward />
          <span>Catolog</span>
          <IoIosArrowForward />
          <span className="text-[black]">Gadgets</span>
        </div>
      </div>

      <div className="main flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="side w-full lg:w-[256px] h-auto lg:h-[760px]">
          <div className="top flex items-center justify-between">
            <h3 className="font-medium text-base md:text-[18px] inter">
              Brand
            </h3>
            <span>
              <IoIosArrowUp className="text-[18px]" />
            </span>
          </div>
          <hr className="text-[#B5B5B5]" />
          <div className="input w-full lg:w-[256px] h-10 bg-[#F5F5F5] flex gap-2.5 px-4 items-center mt-4 rounded-md text-[#656565]">
            <CiSearch className="text-[16px]" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent flex-1"
            />
          </div>
          <div className="center flex flex-col gap-2 px-1 mt-4">
            <div className="type flex gap-2 text-sm md:text-[16px] font-medium inter items-center">
              <input type="checkbox" className="pt-0.5" />
              Apple{" "}
              <span className="inter font-normal text-xs md:text-[12px] text-[#656565] pt-0.5">
                110
              </span>
            </div>
            <div className="type flex gap-2 text-sm md:text-[16px] font-medium inter items-center">
              <input type="checkbox" />
              Samsung{" "}
              <span className="inter font-normal text-xs md:text-[12px] text-[#656565] pt-0.5">
                125
              </span>
            </div>
            <div className="type flex gap-2 text-sm md:text-[16px] font-medium inter items-center">
              <input type="checkbox" />
              Xiaomi{" "}
              <span className="inter font-normal text-xs md:text-[12px] text-[#656565] pt-0.5">
                68
              </span>
            </div>
            <div className="type flex gap-2 text-sm md:text-[16px] font-medium inter items-center">
              <input type="checkbox" />
              Poco{" "}
              <span className="inter font-normal text-xs md:text-[12px] text-[#656565] pt-0.5">
                44
              </span>
            </div>
            <div className="type flex gap-2 text-sm md:text-[16px] font-medium inter items-center">
              <input type="checkbox" />
              OPPO{" "}
              <span className="inter font-normal text-xs md:text-[12px] text-[#656565] pt-0.5">
                36
              </span>
            </div>
            <div className="type flex gap-2 text-sm md:text-[16px] font-medium inter items-center">
              <input type="checkbox" />
              Honor{" "}
              <span className="inter font-normal text-xs md:text-[12px] text-[#656565] pt-0.5">
                10
              </span>
            </div>
            <div className="type flex gap-2 text-sm md:text-[16px] font-medium inter items-center">
              <input type="checkbox" />
              Motorola{" "}
              <span className="inter font-normal text-xs md:text-[12px] text-[#656565] pt-0.5">
                34
              </span>
            </div>
            <div className="type flex gap-2 text-sm md:text-[16px] font-medium inter items-center">
              <input type="checkbox" />
              Nokia{" "}
              <span className="inter font-normal text-xs md:text-[12px] text-[#656565] pt-0.5">
                22
              </span>
            </div>
            <div className="type flex gap-2 text-sm md:text-[16px] font-medium inter items-center">
              <input type="checkbox" />
              Realme{" "}
              <span className="inter font-normal text-xs md:text-[12px] text-[#656565] pt-0.5">
                35
              </span>
            </div>
          </div>
          <div className="botom flex flex-col gap-4 mt-6">
            <div className="turlar flex items-center justify-between">
              <h3 className="font-medium text-base md:text-[18px] inter">
                Battery capacity
              </h3>
              <IoIosArrowDown />
            </div>
            <hr className="text-[#B5B5B5]" />
            <div className="turlar flex items-center justify-between">
              <h3 className="font-medium text-base md:text-[18px] inter">
                Screen type
              </h3>
              <IoIosArrowDown />
            </div>
            <hr className="text-[#B5B5B5]" />
            <div className="turlar flex items-center justify-between">
              <h3 className="font-medium text-base md:text-[18px] inter">
                Screen diagonal
              </h3>
              <IoIosArrowDown />
            </div>
            <hr className="text-[#B5B5B5]" />
            <div className="turlar flex items-center justify-between">
              <h3 className="font-medium text-base md:text-[18px] inter">
                Protection class
              </h3>
              <IoIosArrowDown />
            </div>
            <hr className="text-[#B5B5B5]" />
            <div className="turlar flex items-center justify-between">
              <h3 className="font-medium text-base md:text-[18px] inter">
                Built-in memory
              </h3>
              <IoIosArrowDown />
            </div>
            <hr className="text-[#B5B5B5]" />
          </div>
        </div>
        <div className="map w-full lg:flex-1">
          <div className="top flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <h3 className="text-[#6C6C6C] font-medium text-sm md:text-[16px] inter flex items-center gap-2">
              Selected Products:{" "}
              <span className="text-lg md:text-[20px] text-[black]">85</span>
            </h3>
            <select className="w-full sm:w-[256px] h-10 border border-[#D4D4D4] rounded-lg px-3 text-sm md:text-[16px] inter">
              <option value="by rating">By rating</option>
              <option value="by price">By price</option>
            </select>
          </div>

          <div className="card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {Data.map((item, index) => (
              <div
                className="map w-full max-w-[268px] mx-auto h-auto sm:h-[432px] flex flex-col items-center justify-around rounded-[9px] bg-[#F6F6F6] py-6"
                key={index}
              >
                <FaHeart className="text-2xl md:text-[29px] self-end mr-6 cursor-pointer transition-colors text-[#909090C4]" />

                <Link to={`/information/${item.id}`}>
                  <img
                    src={item.image}
                    alt="Image"
                    className="w-full h-auto px-4"
                  />
                </Link>
                <p className="w-full max-w-[236px] text-center font-medium text-base md:text-[18px] px-4">
                  {item.text}
                </p>
                <span className="text-xl md:text-[24px] font-semibold">
                  ${item.price}
                </span>
                <Link to={`/information/${item.id}`}>
                  <button className="px-12 md:px-[65px] py-3 md:py-4 bg-[black] text-[white] rounded-lg text-sm md:text-base">
                    Buy Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="page flex items-center justify-center gap-3 mt-7 mb-8">
        <IoIosArrowBack className="text-lg md:text-[22px] cursor-pointer" />
        <span className="w-8 h-8 rounded-[5px] flex items-center justify-center bg-[black] text-[#FFFFFF] cursor-pointer">
          1
        </span>
        <span className="w-8 h-8 rounded-[5px] flex items-center justify-center bg-[#F6F6F6] text-[#000000] cursor-pointer">
          2
        </span>
        <span className="w-8 h-8 rounded-[5px] flex items-center justify-center bg-[#F6F6F6] text-[#000000] cursor-pointer">
          3
        </span>
        <span className="w-8 h-8 rounded-[5px] flex items-center justify-center bg-[#F6F6F6] text-[#000000]">
          ...
        </span>
        <span className="w-8 h-8 rounded-[5px] flex items-center justify-center bg-[#F6F6F6] text-[#000000] cursor-pointer">
          12
        </span>
        <IoIosArrowForward className="text-lg md:text-[22px] cursor-pointer" />
      </div>
    </div>
  );
};

export default Gadjets;
