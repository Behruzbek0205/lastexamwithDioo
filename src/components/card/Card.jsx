import React from "react";
import { Link } from "react-router-dom";
import { Data } from "../../alldata/data";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addLiked, deleteLiked } from "../../redux/likedRedux";

const Card = () => {
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.liked.value);

  const handleLike = (item) => {
    if (liked.some((q) => q.id === item.id)) {
      dispatch(deleteLiked(item.id));
    } else {
      dispatch(addLiked(item));
    }
  };

  return (
    <div className="w-full px-14 md:px-6 lg:px-20 py-8">
      <div className="text-base md:text-[18px] font-medium text-black flex flex-wrap gap-4 ml-30 md:gap-8 mb-6 md:mb-8">
        <span className="underline">New Arrival</span>
        <span className="text-[#8B8B8B]">Bestseller</span>
        <span className="text-[#8B8B8B]">Featured Products</span>
      </div>
      <div className="w-full max-w-[1120px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Data.map((item) => (
          <div
            key={item.id}
            className="w-full bg-[#F6F6F6] rounded-[9px] p-4 flex flex-col items-center gap-4"
          >
            <div
              className="w-full flex justify-end cursor-pointer"
              onClick={() => handleLike(item)}
            >
              {liked.some((q) => q.id === item.id) ? (
                <FaHeart className="text-red-500 text-[28px]" />
              ) : (
                <FaHeart className="text-[#B5B5B5] text-[28px]" />
              )}
            </div>
            <Link to="/gadjets">
              <img
                src={item.image}
                alt="product"
                className="max-w-full h-40 sm:h-48 object-contain"
              />
            </Link>
            <p className="w-full text-center font-medium text-[16px] sm:text-[17px] md:text-[18px] px-2">
              {item.text}
            </p>
            <span className="text-lg md:text-[22px] font-semibold">
              ${item.price}
            </span>
            <Link to="/gadjets">
              <button className="px-10 sm:px-12 py-3 bg-black text-white rounded-lg text-sm sm:text-base">
                Buy Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
