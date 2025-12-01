import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaDollyFlatbed } from "react-icons/fa";
import { MdEdit, MdOutlinePayment } from "react-icons/md";
import line from "../../assets/line.svg";
import { Link } from "react-router-dom";
const Step = () => {
  return (
    <div>
      <hr className="text-[#B5B5B5] w-[1521px]" />
      <div className="main">
        <div className="top flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-4">
          <div className="adress flex items-center gap-3">
            <div className="w-10 h-10 bg-[black] text-white rounded-full flex items-center justify-center ">
              <CiLocationOn size={22} />
            </div>
            <div className="step text-[#000000]">
              <span className="text-xs md:text-[14px] block">Step 1</span>
              <h4 className="text-base md:text-[18px] font-medium">Address</h4>
            </div>
          </div>

          <div className="adress flex items-center gap-3">
            <div className="w-10 h-10 bg-[#B2B2B2] text-white rounded-full flex items-center justify-center ">
              <FaDollyFlatbed size={20} />
            </div>
            <div className="step text-[#B2B2B2]">
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

        <div className="select mt-20">
          <h1 className="inter text-[20px] text-[#17183B]">Select Address</h1>
          <div
            className="cards flex flex-col gap-6 mt-8
        "
          >
            <div className="card bg-[#F6F6F6] px-6 py-6 rounded-2xl">
              <div className="top flex gap-4">
                <input
                  type="checkbox"
                  checked
                  className="w-6 h-6 accent-black border rounded-full"
                />
                <p className="inter font-normal text-[18px]">2118 Thornridge</p>
                <span className="w-13 h-6 bg-[black] text-[white] flex items-center justify-center rounded">
                  home
                </span>
              </div>
              <div className="center flex items-center justify-between px-10 mt-3">
                <p className="inter font-normal text-[#17183B] text-[16px]">
                  2118 Thornridge Cir. Syracuse, Connecticut 35624
                </p>
                <div className="flex  items-center gap-6 text-[18px] ">
                  <MdEdit />X
                </div>
              </div>
              <div className="bottom px-10 mt-3">
                <span>(209) 555-0104</span>
              </div>
            </div>

            <div className="card  bg-[#F6F6F6] px-6 py-6 rounded-2xl">
              <div className="top flex gap-4">
                <input
                  type="checkbox"
                  className="w-6 h-6 border rounded-full accent-black"
                />
                <p className="inter font-normal text-[18px]">Headoffice</p>
                <span className="w-13 h-6 bg-[black] text-[white] flex items-center justify-center rounded">
                  office
                </span>
              </div>
              <div className="center flex items-center justify-between px-10 mt-3">
                <p className="inter font-normal text-[#17183B] text-[16px]">
                  2715 Ash Dr. San Jose, South Dakota 83475
                </p>
                <div className="flex  items-center gap-6 text-[18px] ">
                  <MdEdit />X
                </div>
              </div>
              <div className="bottom px-10 mt-3">
                <span>(704) 555-0127</span>
              </div>
            </div>
          </div>
        </div>
        <div className="svg mt-12">
          <img src={line} alt="" />
        </div>
        <div className="btn flex flex-col sm:flex-row justify-end gap-3">
          <button className="border rounded-md px-8 md:px-16 lg:px-22 py-4 md:py-6">
            Back
          </button>
          <Link to="/location">
            <button className="w-full sm:w-auto px-8 md:px-16 lg:px-22 py-4 md:py-6 bg-black rounded-md text-white">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Step;
