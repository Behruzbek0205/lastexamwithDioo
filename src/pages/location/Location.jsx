import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaDollyFlatbed } from "react-icons/fa";
import { MdOutlinePayment, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <div>
      <hr className="text-[#B5B5B5] w-[1521px]" />

      <div className="main w-full px-4 md:px-6 lg:px-10 xl:px-20 py-6 md:py-8 flex flex-col gap-8 md:gap-12">
        <div className="top flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-4">
          <div className="adress flex items-center gap-3">
            <div className="w-10 h-10 bg-[#B2B2B2] text-white rounded-full flex items-center justify-center ">
              <CiLocationOn size={22} />
            </div>
            <div className="step text-[#B2B2B2]">
              <span className="text-xs md:text-[14px] block">Step 1</span>
              <h4 className="text-base md:text-[18px] font-medium">Address</h4>
            </div>
          </div>{" "}
          <div className="adress flex items-center gap-3">
            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center ">
              <FaDollyFlatbed size={20} />
            </div>
            <div className="step text-black">
              <span className="text-xs md:text-[14px] block">Step 2</span>
              <h4 className="text-base md:text-[18px] font-medium">Shipping</h4>
            </div>
          </div>
          <div className="adress flex items-center gap-3">
            <div className="w-10 h-10 bg-[#B2B2B2] text-white rounded-full flex items-center justify-center ">
              <MdOutlinePayment size={20} />
            </div>
            <div className="step text-[#B2B2B2]">
              <span className="text-xs md:text-[14px] block">Step 3</span>
              <h4 className="text-base md:text-[18px] font-medium">Payment</h4>
            </div>
          </div>
        </div>

        <div className="center">
          <h3 className="text-xl md:text-[26px] font-bold mb-4 md:mb-6">
            Shipment Method
          </h3>
          <div className="location flex flex-col gap-3 md:gap-4">
            <div className="adres flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 border border-[#B2B2B2] px-4 md:px-6 py-3 md:py-4 rounded-xl">
              <input
                type="checkbox"
                className="w-5 h-5 accent-black border rounded-full"
                checked
              />
              <span className="font-semibold text-sm md:text-base">Free</span>
              <p className="text-black text-sm md:text-base">
                Regular shipment
              </p>
              <h4 className="sm:ml-auto font-medium text-black text-sm md:text-base">
                17 Oct, 2023
              </h4>
            </div>
            <div className="adres flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 border border-[#B2B2B2] px-4 md:px-6 py-3 md:py-4 rounded-xl">
              <input type="checkbox" className="w-5 h-5" />
              <span className="font-semibold text-gray-600 text-sm md:text-base">
                $8.50
              </span>
              <p className="text-gray-600 text-sm md:text-base">
                Get your delivery as soon as possible
              </p>
              <h4 className="sm:ml-auto font-medium text-gray-600 text-sm md:text-base">
                1 Oct, 2023
              </h4>
            </div>

            <div className="adres flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 border border-[#B2B2B2] px-4 md:px-6 py-3 md:py-4 rounded-xl">
              <input type="checkbox" className="w-5 h-5 " />
              <h4 className="font-semibold text-gray-600 text-sm md:text-base">
                Schedule
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Pick a date when you want to get your delivery
              </p>
              <span className="sm:ml-auto flex items-center gap-1 font-medium text-gray-600 text-sm md:text-base">
                Select Date <MdKeyboardArrowDown size={20} />
              </span>
            </div>
          </div>
        </div>

        <div className="btn flex flex-col sm:flex-row justify-end gap-3">
          <button className="border rounded-md px-8 md:px-16 lg:px-22 py-4 md:py-6">
            Back
          </button>
          <Link to="/final">
            <button className="w-full sm:w-auto px-8 md:px-16 lg:px-22 py-4 md:py-6 bg-black rounded-md text-white">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Location;
