import React from "react";
import { FaHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteLiked } from "../../redux/likedRedux";

const Liked = () => {
  const liked = useSelector((state) => state.liked.value);
  const dispatch = useDispatch();

  const del = (id) => {
    dispatch(deleteLiked(id));
  };

  return (
    <div className="w-full">
      <hr className="text-[#B5B5B5]" />

      <h1 className="flex items-center justify-center inter font-medium text-2xl sm:text-3xl md:text-[40px] mt-6 md:mt-10 px-4">
        Liked Products
      </h1>

      <div className="card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-4 sm:px-6 md:px-10 lg:px-20 py-6 md:py-10">
        {liked.length === 0 ? (
          <div className="col-span-full text-center py-20">
            <p className="text-xl text-gray-500">No liked products yet</p>
          </div>
        ) : (
          liked.map((item, index) => (
            <div
              className="map w-full max-w-[300px] mx-auto h-[432px] flex flex-col items-center justify-around rounded-[9px] bg-[#F6F6F6] "
              key={index}
            >
              <div className="w-full flex justify-end pr-4 pt-2 text-[29px]">
                <FaHeart
                  className="text-red-500 cursor-pointer"
                  onClick={() => del(item.id)}
                />
              </div>

              <Link
                to="/apple"
                className="flex items-center justify-center px-4"
              >
                <img
                  src={item.image}
                  alt={item.text}
                  className="max-w-full h-auto object-contain max-h-[180px]"
                />
              </Link>

              <p className="w-full px-4 text-center font-medium text-base md:text-[18px]">
                {item.text}
              </p>

              <span className="text-xl md:text-[24px] font-semibold">
                ${item.price}
              </span>

              <Link to="/gadjets" className="w-full px-4">
                <button className="w-full py-3 md:py-4 bg-black text-white rounded-lg">
                  Buy Now
                </button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Liked;
