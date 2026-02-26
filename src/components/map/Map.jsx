import React from "react";
import { Iphone } from "../../alldata/iphone";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addLiked, deleteLiked } from "../../redux/likedRedux";
import { BsCart3 } from "react-icons/bs";
import { addWish, deleteWish } from "../../redux/wishlistRedux";

const Map = () => {
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
    <div className="max-w-[1521px] w-full px-4 md:px-6 lg:px-20 py-8">
      <div className="mb-6 md:mb-10">
        <h3 className="font-medium text-xl md:text-[24px] ml-30">
          Discounts up to -50%
        </h3>
      </div>
      <div className="w-full max-w-[1120px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Iphone.map((item, index) => (
          <div
            key={index}
            className="w-full bg-[#F6F6F6] rounded-[9px] p-4 flex flex-col items-center gap-4"
          >
            <div
              className="w-full flex justify-between items-center cursor-pointer text-[26px]"
            >
              <div className="icon w-9 h-9  flex items-center justify-center ">
                <BsCart3 className="text-2xl " />
              </div>
              <div className="liked" onClick={() => handleLike(item)}>
                {liked.some((q) => q.id === item.id) ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaHeart className="text-[#B5B5B5]" />
                )}
              </div>
            </div>
            <Link to="/apple">
              <img
                src={item.image}
                alt="iPhone"
                className="max-w-full h-40 sm:h-48 object-contain"
              />
            </Link>
            <p className="w-full text-center font-medium text-[16px] sm:text-[17px] md:text-[18px] px-2">
              {item.text}
            </p>
            <span className="text-lg md:text-[22px] font-semibold">
              ${item.price}
            </span>
            <Link to="/apple">
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

export default Map;
