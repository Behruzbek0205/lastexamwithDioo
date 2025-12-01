import React from "react";
import { Iphone } from "../../alldata/iphone";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addLiked } from "../../redux/likedRedux";

const Map = () => {
  const dispatch = useDispatch();

  const handleLike = (item) => {
    dispatch(addLiked(item));
  };

  return (
    <div className="main w-full px-4 md:px-6 lg:px-20 py-8">
      <div className="text mb-6 md:mb-10">
        <h3 className="font-medium text-xl md:text-[24px]">
          Discounts up to -50%
        </h3>
      </div>
      <div className="card w-full max-w-[1120px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {Iphone.map((item, index) => (
          <div
            className="map w-full h-[432px] flex flex-col items-center justify-around rounded-[9px] bg-[#F6F6F6]"
            key={index}
          >
            <div className="w-full flex justify-end pr-4 pt-2">
              <FaHeart
                className="text-2xl md:text-[29px] text-[#909090C4]"
                onClick={() => handleLike(item)}
              />
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

export default Map;
