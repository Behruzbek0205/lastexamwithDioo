import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaDollyFlatbed } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { useSelector } from "react-redux";
import card from "../../assets/card.svg";

const Final = () => {
  const cart = useSelector((state) => state.cart.value);
  const total = cart.reduce((sum, item) => sum + Number(item.price), 50 + 29);

  return (
    <div className="w-full">
      <hr className="text-[#B5B5B5] w-full" />
      <div className=" px-4 md:px-10 py-8 flex flex-col gap-12 max-w-[1521px] mx-auto">
        <div className="top flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="adress flex items-center gap-3" >
            <div className="w-10 h-10 bg-[#B2B2B2] text-white rounded-full flex items-center justify-center ">
              <CiLocationOn size={22} />
            </div>
            <div className="step text-[#B2B2B2]">
              <span className="text-[14px]">Step 1</span>
              <h4 className="text-[18px] font-medium">Address</h4>
            </div>
          </div>

          <div className="adress flex items-center gap-3">
            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center ">
              <FaDollyFlatbed size={20} />
            </div>
            <div className="step text-black">
              <span className="text-[14px]">Step 2</span>
              <h4 className="text-[18px] font-medium">Shipping</h4>
            </div>
          </div>

          <div className="adress flex items-center gap-3">
            <div className="w-10 h-10 bg-[#B2B2B2] text-white rounded-full flex items-center justify-center ">
              <MdOutlinePayment size={20} />
            </div>
            <div className="step text-[#B2B2B2]">
              <span className="text-[14px]">Step 3</span>
              <h4 className="text-[18px] font-medium">Payment</h4>
            </div>
          </div>
        </div>

        <div className="payment3 flex flex-col lg:flex-row gap-8 lg:gap-24 justify-center">
          <div className="summary w-full lg:w-128 h-auto border border-[#EBEBEB] rounded-[10px] px-6 py-8">
            <h1 className="font-medium inter text-[20px]">Summary</h1>
            <div className="card flex flex-col gap-4 mt-4">
              {cart.map((item) => (
                <div
                  className="cart bg-[#F6F6F6] rounded-[13px] flex items-center justify-between px-4 py-4"
                  key={item.id}
                >
                  <img src={item.image} alt="image" className="w-10 h-10" />
                  <span className="font-medium inter text-[16px]">
                    {item.text}
                  </span>
                  <span className="font-bold inter text-[16px]">
                    ${item.price}
                  </span>
                </div>
              ))}
            </div>
            <div className="ul">
              <h3 className="text-[#545454] text-[15px] inter">Adress</h3>
              <p className="text-[16px] text-[#000000] inter font-medium mt-3">
                1131 Dusty Townline, Jacksonville, TX 40322
              </p>
              <h3 className="text-[#545454] text-[15px] inter mt-4">
                Shipment method
              </h3>
              <p className="text-[black] text-[18px] inter font-semibold mt-3">
                Free
              </p>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center justify-between text-[#545454] text-[16px] inter font-medium">
                  Estimated Tax
                  <span className="text-[18px] inter font-semibold text-black">
                    $50
                  </span>
                </li>
                <li className="flex items-center justify-between text-[#545454] text-[16px] inter font-medium">
                  Estimated shipping & Handling
                  <span className="text-[18px] inter font-semibold text-black">
                    $29
                  </span>
                </li>
                <li className="flex items-center justify-between text-[black] text-[18px] inter font-semibold">
                  Total<span>${total}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="paymant w-full lg:w-[528px]">
            <h3 className="inter font-bold text-[20px]">Payment</h3>
            <div className="top flex items-center gap-8 md:gap-16 mt-6 flex-wrap">
              <span className="inter font-medium text-[14px] underline">
                Credit Card
              </span>
              <span className="inter font-medium text-[14px] text-[#717171]">
                PayPal
              </span>
              <span className="inter font-medium text-[14px] text-[#717171]">
                PayPal Credit
              </span>
            </div>
            <div className="image mt-10">
              <img src={card} alt="card" className="w-full max-w-full" />
            </div>
            <div className="input flex flex-col gap-4 mt-3">
              <input
                type="text"
                className="px-4 py-4 border border-[#979797] rounded-[7px] text-[#979797] outline-none w-full"
                placeholder="Cardholder Name"
              />
              <input
                type="text"
                className="px-4 py-4 border border-[#979797] rounded-[7px] text-[#979797] outline-none w-full"
                placeholder="Card Number"
              />
              <div className="inp flex flex-col sm:flex-row justify-between gap-4">
                <input
                  type="number"
                  className="px-4 py-4 border border-[#979797] rounded-[7px] text-[#979797] outline-none w-full"
                  placeholder="Exp.Date"
                />
                <input
                  type="text"
                  className="px-4 py-4 border border-[#979797] rounded-[7px] text-[#979797] outline-none w-full"
                  placeholder="CVV"
                />
              </div>
            </div>
            <div className="addres flex items-center gap-2 mt-11">
              <input type="checkbox" checked className="accent-black w-4 h-4" />
              <p className="text-[black]">Same as billing address</p>
            </div>
            <div className="btn flex flex-col sm:flex-row justify-end gap-3 mt-10">
              <button className="border rounded-md px-8 sm:px-[113px] py-4 w-full sm:w-auto">
                Back
              </button>
              <button
                className="px-8 sm:px-[113px] py-4 bg-[black] rounded-md text-[white] w-full sm:w-auto"
                onClick={() =>
                  alert(
                    "Thank my teacher, for bringing me to this level:                                   Your student Bexruz"
                  )
                }
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
