import React from "react";
import Mac from "../../assets/Macbook1.png";
import flip from "../../assets/flip.png";
import two from "../../assets/watchair.png";
import ipad from "../../assets/ipads.png";

const Products = () => {
  return (
    <div className="max-w-[1540px] px-4 md:px-6 lg:px-20 py-8">
      <div className="allcards grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        
        <div className="card w-[380px] h-auto md:h-[640px] bg-[#FFFFFF] py-5 ">
          <img src={two} alt="two devices" className="w-full h-auto md:h-[327px] object-cover"/>
          <div className="text px-6 md:px-8">
            <span className="font-light text-2xl md:text-[33px] block mt-4">Popular Products</span>
            <p className="w-full max-w-[276px] font-medium text-sm md:text-[14px] text-[#909090] mt-4">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="px-10 md:px-14 py-3 md:py-4 border border-black rounded-md mt-4  hover:bg-black hover:text-white transition-colors">
              Shop Now
            </button>
          </div>
        </div>

        <div className="card w-[380px] h-auto md:h-[640px] bg-[#F9F9F9] py-5">
          <img src={ipad} alt="ipad" className="w-full h-auto md:h-[327px] object-cover rounded-t-lg"/>
          <div className="text px-6 md:px-8">
            <span className="font-light text-2xl md:text-[33px] block mt-4">Ipad Pro</span>
            <p className="w-full max-w-[276px] font-medium text-sm md:text-[14px] text-[#909090] mt-4">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="px-10 md:px-14 py-3 md:py-4 border border-black rounded-md mt-4  hover:bg-black hover:text-white transition-colors">
              Shop Now
            </button>
          </div>
        </div>

        <div className="card w-[380px] h-auto md:h-[640px] bg-[#EAEAEA] py-5 ">
          <img src={flip} alt="flip" className="w-full h-auto md:h-[327px] object-cover rounded-t-lg" />
          <div className="text px-6 md:px-8">
            <span className="font-light text-2xl md:text-[33px] block mt-4">Samsung Galaxy</span>
            <p className="w-full max-w-[276px] font-medium text-sm md:text-[14px] text-[#909090] mt-4">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="px-10 md:px-14 py-3 md:py-4 border border-black rounded-md mt-4 hover:bg-black hover:text-white transition-colors">
              Shop Now
            </button>
          </div>
        </div>

        <div className="card w-[380px] h-auto md:h-[640px] bg-[#2C2C2C] py-5">
          <img src={Mac} alt="Macbook pro" className="w-full h-auto md:h-[327px] object-cover rounded-t-lg"/>
          <div className="text px-6 md:px-8">
            <span className="font-light text-2xl md:text-[33px] text-white block mt-4">Mackbook Pro</span>
            <p className="w-full max-w-[276px] font-medium text-sm md:text-[14px] text-[#909090] mt-4">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="px-10 md:px-14 py-3 md:py-4 border border-white text-white rounded-md mt-4 hover:bg-white hover:text-black transition-colors">
              Shop Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Products;