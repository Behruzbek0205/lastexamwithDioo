import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Camera from "../../assets/Cameras.png";
import Computers from "../../assets/Computers.svg";
import Gaming from "../../assets/Gaming.svg";
import Head from "../../assets/Headphones.svg";
import Phone from "../../assets/Phones.svg";
import Smart from "../../assets/Smart.svg";

const Category = () => {
  return (
    <div className="main ml-6 px-4 md:px-6 lg:px-20 py-8">
      <div className="text w-full max-w-[1120px] mx-auto flex items-center justify-between">
        <h1 className="text-lg md:text-[24px] font-medium">
          Browse By Category
        </h1>
        <div className="arrwos flex gap-4 md:gap-7 text-xl md:text-[28px]">
          <IoIosArrowBack />
          <IoIosArrowForward />
        </div>
      </div>
      <div className="categoty grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 w-full max-w-[1120px] mx-auto mt-6 md:mt-8 bg-[#FAFAFA] p-3 md:p-0 md:bg-transparent">
        <div className="card w-full h-32 bg-[#EDEDED] rounded-[15px] flex flex-col items-center justify-center font-medium text-sm md:text-[16px] gap-1.5">
          <img src={Phone} alt="Phone" className="w-10 h-10 md:w-12 md:h-12" />
          Phones
        </div>
        <div className="card w-full h-32 bg-[#EDEDED] rounded-[15px] flex flex-col items-center justify-center font-medium text-sm md:text-[16px] gap-1.5">
          <img src={Smart} alt="Smart" className="w-10 h-10 md:w-12 md:h-12" />
          Smart Watches
        </div>
        <div className="card w-full h-32 bg-[#EDEDED] rounded-[15px] flex flex-col items-center justify-center font-medium text-sm md:text-[16px] gap-1.5">
          <img
            src={Camera}
            alt="Camera"
            className="w-10 h-10 md:w-12 md:h-12"
          />
          Cameras
        </div>
        <div className="card w-full h-32 bg-[#EDEDED] rounded-[15px] flex flex-col items-center justify-center font-medium text-sm md:text-[16px] gap-1.5">
          <img src={Head} alt="Head" className="w-10 h-10 md:w-12 md:h-12" />
          Headphones
        </div>
        <div className="card w-full h-32 bg-[#EDEDED] rounded-[15px] flex flex-col items-center justify-center font-medium text-sm md:text-[16px] gap-1.5">
          <img
            src={Computers}
            alt="Computers"
            className="w-10 h-10 md:w-12 md:h-12"
          />
          Computers
        </div>
        <div className="card w-full h-32 bg-[#EDEDED] rounded-[15px] flex flex-col items-center justify-center font-medium text-sm md:text-[16px] gap-1.5">
          <img
            src={Gaming}
            alt="Gaming"
            className="w-10 h-10 md:w-12 md:h-12"
          />
          Gaming
        </div>
      </div>
    </div>
  );
};

export default Category;
