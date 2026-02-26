import React from "react";
import { Link } from "react-router-dom";
import { Data } from "../../alldata/data";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addLiked, deleteLiked } from "../../redux/likedRedux";
import { BsCart3 } from "react-icons/bs";
import { addWish, deleteWish } from "../../redux/wishlistRedux";

const Card = () => {
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.liked.value);
  const wish = useSelector((state) => state.wish.value);

  const handleLike = (item) => {
    if (liked.some((q) => q.id === item.id)) {
      dispatch(deleteLiked(item.id));
    } else {
      dispatch(addLiked(item));
    }
  };

  const handleWish = (item) => {
    if (wish.some((q) => q.id === item.id)) {
      dispatch(deleteWish(item.id));
    } else {
      dispatch(addWish(item));
    }
  };

  return (
    <div className="w-full max-w-[1521px] px-14 md:px-6 lg:px-20 py-8">
      <div className="text-base md:text-[18px] font-medium text-black flex flex-wrap gap-4 md:gap-8 mb-6 md:mb-8 ml-30">
        <span className="underline cursor-pointer">New Arrival</span>
        <span className="text-[#8B8B8B] cursor-pointer">Bestseller</span>
        <span className="text-[#8B8B8B] cursor-pointer">Featured Products</span>
      </div>

      <div className="w-full max-w-[1120px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Data.map((item) => (
          <div
            key={item.id}
            className="w-full bg-[#F6F6F6] rounded-[9px] p-4 flex flex-col items-center gap-4 relative"
          >
            <div className="w-full flex justify-between items-center px-1">
              <div
                className="cursor-pointer"
                onClick={() => handleWish(item)}
              >
                {wish.some((q) => q.id === item.id) ? (
                  <BsCart3 className="text-blue-600 text-[26px]" />
                ) : (
                  <BsCart3 className="text-[#B5B5B5] text-[26px]" />
                )}
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleLike(item)}
              >
                {liked.some((q) => q.id === item.id) ? (
                  <FaHeart className="text-red-500 text-[28px]" />
                ) : (
                  <FaHeart className="text-[#B5B5B5] text-[28px]" />
                )}
              </div>
            </div>
            <Link to="/gadjets">
              <img
                src={item.image}
                alt={item.text}
                className="max-w-full h-40 sm:h-48 object-contain transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <p className="w-full text-center font-medium text-[16px] sm:text-[17px] md:text-[18px] px-2 min-h-[50px]">
              {item.text}
            </p>
            <span className="text-lg md:text-[22px] font-semibold">
              ${item.price}
            </span>

            <Link to="/gadjets">
              <button className="px-15 sm:px-14 py-3 
    bg-black text-white rounded-lg 
       text-sm sm:text-base 
      transition-all duration-300 
  hover:bg-[#EDEDED] hover:text-black 
hover:-translate-y-1 hover:shadow-xl">
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