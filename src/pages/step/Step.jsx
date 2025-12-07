import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaDollyFlatbed } from "react-icons/fa";
import { MdEdit, MdOutlinePayment } from "react-icons/md";
import line from "../../assets/line.svg";
import { Link } from "react-router-dom";

const Step = () => {
  return (
    <div className="w-full pb-10">
      <hr className="text-[#B5B5B5] w-full mb-8" />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 ">
        <div className="top flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-4 w-full">
          <div className="adress flex items-center gap-3 w-full md:w-auto">
            <div className="w-10 h-10 bg-[black] text-white rounded-full flex items-center justify-center ">
              <CiLocationOn size={22} />
            </div>
            <div className="step text-[#000000]">
              <span className="text-xs md:text-[14px] block">Step 1</span>
              <h4 className="text-base md:text-[18px] font-medium">Address</h4>
            </div>
          </div>

          <div className="adress flex items-center gap-3 w-full md:w-auto">
            <div className="w-10 h-10 bg-[#B2B2B2] text-white rounded-full flex items-center justify-center ">
              <FaDollyFlatbed size={20} />
            </div>
            <div className="step text-[#B2B2B2]">
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

        <div className="select mt-12 md:mt-20">
          <h1 className="inter text-[18px] md:text-[20px] text-[#17183B] font-medium">
            Select Address
          </h1>

          <div className="cards flex flex-col gap-6 mt-6 md:mt-8">
            <div className="card bg-[#F6F6F6] p-4 md:px-6 md:py-6 rounded-2xl w-full">
              <div className="top flex flex-wrap gap-3 md:gap-4 items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 md:w-6 md:h-6 accent-black border rounded-full cursor-pointer"
                />
                <p className="inter font-normal text-[16px] md:text-[18px]">
                  2118 Thornridge
                </p>
                <span className="px-3 py-1 bg-[black] text-[white] text-xs md:text-sm flex items-center justify-center rounded uppercase">
                  home
                </span>
              </div>

              <div className="center flex flex-col md:flex-row md:items-center justify-between pl-0 md:pl-10 mt-3 gap-3">
                <p className="inter font-normal text-[#17183B] text-[14px] md:text-[16px]">
                  2118 Thornridge Cir. Syracuse, Connecticut 35624
                </p>
                <div className="flex items-center gap-4 text-[16px] md:text-[18px]">
                  <MdEdit  />
                  <span className="font-bold">X</span>
                </div>
              </div>
              <div className="bottom pl-0 md:pl-10 mt-2 md:mt-3 text-sm md:text-base text-gray-600">
                <span>(209) 555-0104</span>
              </div>
            </div>
            <div className="card bg-[#F6F6F6] p-4 md:px-6 md:py-6 rounded-2xl w-full">
              <div className="top flex flex-wrap gap-3 md:gap-4 items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 md:w-6 md:h-6 border rounded-full accent-black cursor-pointer"
                />
                <p className="inter font-normal text-[16px] md:text-[18px]">
                  Headoffice
                </p>
                <span className="px-3 py-1 bg-[black] text-[white] text-xs md:text-sm flex items-center justify-center rounded uppercase">
                  office
                </span>
              </div>

              <div className="center flex flex-col md:flex-row md:items-center justify-between pl-0 md:pl-10 mt-3 gap-3">
                <p className="inter font-normal text-[#17183B] text-[14px] md:text-[16px]">
                  2715 Ash Dr. San Jose, South Dakota 83475
                </p>
                <div className="flex items-center gap-4 text-[16px] md:text-[18px]">
                  <MdEdit />
                  <span className="font-bold">X</span>
                </div>
              </div>

              <div className="bottom pl-0 md:pl-10 mt-2 md:mt-3 text-sm md:text-base text-gray-600">
                <span>(704) 555-0127</span>
              </div>
            </div>
          </div>
        </div>

        <div className="svg mt-12 w-full flex justify-center overflow-hidden">
          <img src={line} alt="" className="w-full max-w-full object-cover" />
        </div>
        <div className="btn flex flex-col-reverse sm:flex-row justify-end gap-3 mt-10">
          <button className="w-full sm:w-auto border border-gray-300 rounded-md px-8 py-3 md:px-16 md:py-4 ">
            Back
          </button>

          <Link to="/location" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3 md:px-16 md:py-4 bg-black rounded-md text-white ">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Step;
