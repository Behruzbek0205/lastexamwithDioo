import React from "react";
import Phone from "../../assets/phone.png";

const Iphone = () => {
  return (
    <div className="max-w-[1540px] bg-[#211C24] px-4 md:px-6 lg:px-20 py-12 lg:py-16 h-[997px]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
        <div className="text-white w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <span className="font-semibold text-base md:text-xl lg:text-[25px] text-[#909090] block mb-3">
            Pro.Beyond.
          </span>
          <h1 className="font-thin text-4xl md:text-6xl lg:text-7xl xl:text-[95px] text-white leading-tight">
            IPhone 14 <span className="font-bold">Pro</span>
          </h1>
          <p className="text-sm md:text-base lg:text-[18px] font-medium text-[#909090] mb-8 max-w-md mx-auto lg:mx-0">
            Created to change everything for the better. For everyone
          </p>
          <button className="border-2 border-white rounded-md px-12 md:px-16 lg:px-[65px] py-3 md:py-4 font-medium md:text-base">
            Shop Now
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={Phone}
            alt="Iphone 14 Pro"
            className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Iphone;
