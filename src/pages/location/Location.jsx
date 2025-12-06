import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaDollyFlatbed } from "react-icons/fa";
import { MdOutlinePayment, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <div className="w-full min-h-screen bg-white pb-10">
      <hr className="text-[#B5B5B5] w-full mb-6" />
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="top flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-4 mb-12">
          <div className="adress flex items-center gap-3 w-full md:w-auto">
            <div className="w-10 h-10 bg-[#B2B2B2] text-white rounded-full flex items-center justify-center ">
              <CiLocationOn size={22} />
            </div>
            <div className="step text-[#B2B2B2]">
              <span className="text-xs md:text-[14px] block">Step 1</span>
              <h4 className="text-base md:text-[18px] font-medium">Address</h4>
            </div>
          </div>
          <div className="adress flex items-center gap-3 w-full md:w-auto">
            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center ">
              <FaDollyFlatbed size={20} />
            </div>
            <div className="step text-black">
              <span className="text-xs md:text-[14px] block">Step 2</span>
              <h4 className="text-base md:text-[18px] font-medium">Shipping</h4>
            </div>
          </div>
          <div className="adress flex items-center gap-3 w-full md:w-auto">
            <div className="w-10 h-10 bg-[#B2B2B2] text-white rounded-full flex items-center justify-center">
              <MdOutlinePayment size={20} />
            </div>
            <div className="step text-[#B2B2B2]">
              <span className="text-xs md:text-[14px] block">Step 3</span>
              <h4 className="text-base md:text-[18px] font-medium">Payment</h4>
            </div>
          </div>
        </div>
        <div className="center mb-12">
          <h3 className="text-xl md:text-[26px] font-bold mb-6 text-[#17183B]">
            Shipment Method
          </h3>

          <div className="location flex flex-col gap-4">
            <label className="adres flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-[#B2B2B2] px-4 py-4 md:px-6 md:py-5 rounded-xl cursor-pointer bg-white">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <input
                  type="radio"
                  className="w-5 h-5 accent-black border rounded-full"
                  defaultChecked
                />
                <span className="font-semibold text-sm md:text-base">
                  Free
                </span>
              </div>

              <p className="text-gray-600 text-sm md:text-base">
                Regular shipment
              </p>

              <h4 className="sm:ml-auto font-medium text-black text-sm md:text-base  mt-2 sm:mt-0">
                17 Oct, 2023
              </h4>
            </label>
            <label className="adres flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-[#B2B2B2] px-4 py-4 md:px-6 md:py-5 rounded-xl cursor-pointer bg-white">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <input type="radio" className="w-5 h-5 accent-black shrink-0" />
                <span className="font-semibold text-black text-sm md:text-base whitespace-nowrap">
                  $8.50
                </span>
              </div>

              <p className="text-gray-600 text-sm md:text-base leading-snug">
                Get your delivery as soon as possible
              </p>

              <h4 className="sm:ml-auto font-medium text-black text-sm md:text-base whitespace-nowrap mt-2 sm:mt-0">
                1 Oct, 2023
              </h4>
            </label>
            <label className="adres flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-[#B2B2B2] px-4 py-4 md:px-6 md:py-5 rounded-xl cursor-pointer  bg-white">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <input type="radio" className="w-5 h-5 accent-black " />
                <h4 className="font-semibold text-black text-sm md:text-base ">
                  Schedule
                </h4>
              </div>

              <p className="text-gray-600 text-sm md:text-base">
                Pick a date when you want to get your delivery
              </p>

              <span className="sm:ml-auto flex items-center gap-1 font-medium text-black text-sm md:text-base  mt-2 sm:mt-0 ">
                Select Date <MdKeyboardArrowDown size={20} />
              </span>
            </label>
          </div>
        </div>
        <div className="btn flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 mt-8">
          <button className="w-full sm:w-auto border border-gray-300 rounded-md px-8 py-3 md:px-12 lg:px-16 md:py-4 font-medium">
            Back
          </button>

          <Link to="/final" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3 md:px-12 lg:px-16 md:py-4 bg-black rounded-md text-white font-medium">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Location;
