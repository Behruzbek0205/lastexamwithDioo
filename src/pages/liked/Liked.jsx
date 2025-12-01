import React from "react";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Liked = () => {
  const liked = useSelector((state) => state.liked.value);

  return (
    <div className="main">
      <h1 className="flex items-center justify-center inter font-medium">
        Liked Products
      </h1>
      <div className="card">
        {liked.map((item, index) => (
          <div
            className="map w-full h-[432px] flex flex-col items-center justify-around rounded-[9px] bg-[#F6F6F6]"
            key={index}
          >
            <div className="w-full flex justify-end pr-4 pt-2">
              <FaHeart className="text-2xl md:text-[29px] text-[#909090C4]" />
            </div>

            <Link to="/apple" className="flex items-center justify-center">
              <img
                src={item.image}
                alt="Image"
                className="max-w-full h-auto object-contain"
              />
            </Link>
            <p className="w-full px-4 text-center font-medium  md:text-[18px]">
              {item.text}
            </p>
            <span className="text-xl md:text-[24px] font-semibold">
              ${item.price}
            </span>
            <Link to="/apple">
              <button className="px-12 md:px-[65px] py-3 md:py-4 bg-black text-white rounded-lg ">
                Buy Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Liked;
