import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteCart } from "../../redux/userCart";
import { Link } from "react-router-dom";
import { Iphone } from "../../alldata/iphone";
import { FaHeart } from "react-icons/fa6";

const Apply = () => {
  const [favorites, setFavorites] = useState({});

  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const [counts, setCounts] = useState({});

  const increase = (id) => {
    setCounts({
      ...counts,
      [id]: (counts[id] || 1) + 1,
    });
  };

  const decrease = (id) => {
    setCounts({
      ...counts,
      [id]: counts[id] > 1 ? counts[id] - 1 : 1,
    });
  };

  const cartDelete = (id) => {
    dispatch(deleteCart({ id }));
  };

  const toggleFavorite = (id) => {
    setFavorites({
      ...favorites,
      [id]: !favorites[id],
    });
  };

  const totalPrice = cart.reduce((sum, item) => {
    const count = counts[item.id] || 1;
    return sum + item.price * count;
  }, 79);

  return (
    <div>
      <hr className="text-[#B5B5B5] w-[1521px]" />
      <div className="main px-4 md:px-6 lg:px-8 py-6">
      <div className="twodivs flex flex-col lg:flex-row gap-6 lg:gap-12">
        <div className="card w-full lg:w-[536px] flex flex-col gap-3.5">
          <h3 className="font-extrabold inter text-2xl md:text-[30px]">
            Shopping Cart
          </h3>

          {cart.map((item) => {
            const count = counts[item.id] || 1;

            return (
              <div
                className="cartlar flex flex-col sm:flex-row items-center gap-3 w-full lg:w-[536px] min-h-[138px] border-2 border-[#A3A3A3] rounded-md p-3"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-20 h-20 sm:w-22 sm:h-22 object-cover"
                />

                <p className="w-full sm:w-[191px] inter font-medium text-sm sm:text-[16px] text-center sm:text-left">
                  {item.text}
                </p>

                <div className="count flex gap-2 text-lg sm:text-[21px] items-center">
                  <span
                    onClick={() => decrease(item.id)}
                    className="text-2xl sm:text-[26px] cursor-pointer"
                  >
                    -
                  </span>

                  <p className="border border-[#D9D9D9] rounded w-10 h-8 flex items-center justify-center">
                    {count}
                  </p>

                  <span
                    onClick={() => increase(item.id)}
                    className="text-2xl sm:text-[26px] cursor-pointer"
                  >
                    +
                  </span>
                </div>

                <p className="inter font-medium text-xl sm:text-[26px] sm:pl-3">
                  ${item.price * count}
                </p>

                <MdDelete
                  className="text-2xl sm:text-[26px] sm:ml-3 text-red-600 cursor-pointer"
                  onClick={() => cartDelete(item.id)}
                />
              </div>
            );
          })}
        </div>
        <div className="order border py-6 px-4 sm:py-8 sm:px-8 w-full lg:w-auto">
          <h3 className="font-bold text-lg sm:text-[20px] inter">
            Order Summary
          </h3>

          <div className="inputlar flex flex-col gap-4 mt-6">
            <label className="text-sm sm:text-base">
              Discount code / Promo code
            </label>
            <input
              type="password"
              placeholder="Code"
              className="w-full sm:w-[408px] h-12 sm:h-14 rounded-lg border border-[#9F9F9F] px-4 inter outline-none"
            />

            <label className="text-sm sm:text-base">
              Your bonus card number
            </label>
            <div className="input flex w-full sm:w-[408px] h-12 sm:h-14 rounded-lg border border-[#9F9F9F] items-center">
              <input
                type="number"
                placeholder="Enter Card Number"
                className="px-4 inter outline-none flex-1"
              />
              <button className="border rounded-lg inter px-2 py-2 mr-2">
                Apply
              </button>
            </div>
          </div>

          <div className="ul mt-6">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center justify-between text-[#545454] text-sm sm:text-[16px] inter font-medium">
                Estimated Tax
                <span className="text-base sm:text-[18px] inter font-semibold text-black">
                  $50
                </span>
              </li>
              <li className="flex items-center justify-between text-[#545454] text-sm sm:text-[16px] inter font-medium">
                Estimated shipping & Handling
                <span className="text-base sm:text-[18px] inter font-semibold text-black">
                  $29
                </span>
              </li>
              <li className="flex items-center justify-between text-black text-base sm:text-[18px] inter font-semibold">
                Total<span>${totalPrice}</span>
              </li>
            </ul>
          </div>

          <div className="btn">
            <Link to="/step">
              <button className="bg-[black] text-[white] text-sm sm:text-[16px] rounded-2xl w-full px-6 sm:px-[167px] py-4 mt-10">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {Iphone.map((item, index) => (
          <div
            className="map w-full max-w-[268px] mx-auto h-auto sm:h-[432px] flex flex-col items-center justify-around rounded-[9px] bg-[#F6F6F6] py-6"
            key={index}
          >
            <FaHeart
              className="text-2xl sm:text-[29px] self-end mr-6 cursor-pointer transition-colors"
              onClick={() => toggleFavorite(index)}
              style={{ color: favorites[index] ? "red" : "#909090C4" }}
            />

            <Link to="/apple">
              <img
                src={item.image}
                alt="Image"
                className="w-full h-auto px-4"
              />
            </Link>

            <p className="w-full max-w-[236px] text-center font-medium text-base sm:text-[18px] px-4">
              {item.text}
            </p>

            <span className="text-xl sm:text-[24px] font-semibold">
              ${item.price}
            </span>

            <Link to="/apple">
              <button className="px-12 sm:px-[65px] py-3 sm:py-4 bg-[black] text-[white] rounded-lg text-sm sm:text-base">
                Buy Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Apply;