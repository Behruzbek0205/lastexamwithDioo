import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { Data } from "../../alldata/data";
import { FaHeart, FaMobileScreen } from "react-icons/fa6";
import { HiMiniCpuChip } from "react-icons/hi2";
import { GoCpu } from "react-icons/go";
import { IoCamera } from "react-icons/io5";
import { IoCameraReverse } from "react-icons/io5";
import { GiBattery75 } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import Rating from "../../assets/rating.svg";
import good from "../../assets/good.svg";
import below from "../../assets/below.svg";
import poor from "../../assets/poor.svg";
import avarage from "../../assets/avarage.svg";
import exelent from "../../assets/exelent.svg";
import user from "../../assets/user.svg";
import man from "../../assets/man.svg";
import opa from "../../assets/opa.svg";
import stars from "../../assets/Stars.svg";
import fullstart from "../../assets/fullstars.svg";
import broken from "../../assets/broken.svg";
import broken2 from "../../assets/broken2.svg";
import { Iphone } from "../../alldata/iphone";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/userCart";
import { Dataaa } from "../../alldata/apple";
import { addLiked, deleteLiked } from "../../redux/likedRedux";

const Information = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.liked.value);

  const handleLike = (item) => {
    if (liked.some((q) => q.id === item.id)) {
      dispatch(deleteLiked(item.id));
    } else {
      dispatch(addLiked(item));
    }
  };

  const handleItem = (item) => {
    dispatch(addCart(item));
  };

  const dataFromDataa = Dataaa.find((item) => item.id === Number(id));
  const dataFromData = Data.find((item) => item.id === Number(id));

  if (!dataFromDataa && !dataFromData) {
    return (
      <div className="text-center py-20 text-xl">
        Kechirasiz, maxsulot topilmadi
      </div>
    );
  }

  const data = dataFromDataa || dataFromData;
  const dataa = dataFromData || dataFromDataa;

  return (
    <div className="">
      <hr className="text-[#B5B5B5] w-full" />
      <div className="top">
        <div className="text flex gap-2 ml-4 md:ml-20 md:gap-4 items-center py-6 md:py-11 text-[#A4A4A4] text-sm md:text-[18px] font-medium inter overflow-x-auto">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <IoIosArrowForward />
          <Link to="/catalog" className="hover:underline">
            Catalog
          </Link>
          <IoIosArrowForward />
          <Link to="/catalog/smartphones" className="hover:underline">
            Smartphones
          </Link>
          <IoIosArrowForward />
          <Link to="/catalog/smartphones/apple" className="hover:underline">
            Apple
          </Link>
          <IoIosArrowForward />
          <span className="text-black font-semibold">{data.text}</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-12">
        <div className="image w-full lg:w-auto">
          <img
            src={data.image}
            alt="Image"
            className="w-full lg:w-[536px] h-auto lg:h-[516px] object-contain"
          />
        </div>
        <div className="text w-full lg:w-[536px]">
          <h1 className="font-bold text-2xl md:text-[40px] inter">
            {data.text}
          </h1>
          <span className="font-semibold text-xl md:text-[32px] inter mt-5 inline-block">
            ${data.price}
          </span>
          <del className="text-[#A0A0A0] font-normal text-lg md:text-[24px] ml-4">
            $1699
          </del>
          <div className="color mt-4">
            <span className="flex gap-3 md:gap-4 items-center inter font-normal text-base md:text-[19px] flex-wrap">
              Select color:
              <div className="w-8 h-8 rounded-full bg-[#000000] cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-[#781DBC] cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-[#E10000] cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-[#E1B000] cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-[#E8E8E8] cursor-pointer"></div>
            </span>
          </div>
          <div className="gg flex gap-2 md:gap-4 mt-6 flex-wrap">
            <div className="w-24 md:w-28 h-10 md:h-12 border border-[#D5D5D5] rounded-lg text-sm md:text-[16px] text-[#D5D5D5] font-medium inter flex items-center justify-center cursor-pointer">
              128GB
            </div>
            <div className="w-24 md:w-28 h-10 md:h-12 border border-[#D5D5D5] rounded-lg text-sm md:text-[16px] text-[#6F6F6F] font-medium inter flex items-center justify-center cursor-pointer">
              256GB
            </div>
            <div className="w-24 md:w-28 h-10 md:h-12 border border-[#D5D5D5] rounded-lg text-sm md:text-[16px] text-[#6F6F6F] font-medium inter flex items-center justify-center cursor-pointer">
              512GB
            </div>
            <div className="w-24 md:w-28 h-10 md:h-12 border border-[#000000] rounded-lg text-sm md:text-[16px] text-[#000000] font-medium inter flex items-center justify-center cursor-pointer">
              1TB
            </div>
          </div>

          <div className="info grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-6">
            <div className="w-full h-16 rounded-[7px] bg-[#F4F4F4] flex justify-center items-center gap-2 md:gap-3 px-2">
              <FaMobileScreen className="text-2xl md:text-[28px]" />
              <div className="text flex flex-col text-sm md:text-[18px] text-[#4E4E4E] font-normal">
                <p>Screen size</p>
                <span className="text-[black]">6.7"</span>
              </div>
            </div>
            <div className="w-full h-16 rounded-[7px] bg-[#F4F4F4] flex justify-center items-center gap-2 md:gap-3 px-2">
              <HiMiniCpuChip className="text-2xl md:text-[28px]" />
              <div className="text flex flex-col text-sm md:text-[18px] text-[#4E4E4E] font-normal">
                <p>CPU</p>
                <span className="text-[#000000] text-xs md:text-[16px]">
                  Apple A16 Bionic
                </span>
              </div>
            </div>
            <div className="w-full h-16 rounded-[7px] bg-[#F4F4F4] flex justify-center items-center gap-2 md:gap-3 px-2">
              <GoCpu className="text-2xl md:text-[28px]" />
              <div className="text flex flex-col text-sm md:text-[16px] text-[#4E4E4E] font-normal">
                <p>Number of Cores</p>
                <span className="text-[#000000] text-base md:text-[18px]">
                  6
                </span>
              </div>
            </div>
            <div className="w-full h-16 rounded-[7px] bg-[#F4F4F4] flex justify-center items-center gap-2 md:gap-3 px-2">
              <IoCamera className="text-2xl md:text-[28px]" />
              <div className="text flex flex-col text-sm md:text-[18px] text-[#4E4E4E] font-normal">
                <h3>Main camera</h3>
                <span className="text-[#000000]">48-12-12 MP</span>
              </div>
            </div>
            <div className="w-full h-16 rounded-[7px] bg-[#F4F4F4] flex justify-center items-center gap-2 md:gap-3 px-2">
              <IoCameraReverse className="text-2xl md:text-[28px]" />
              <div className="text flex flex-col text-sm md:text-[18px] text-[#4E4E4E] font-normal">
                <h3>Front-camera</h3>
                <span className="text-[#000000]">12MP</span>
              </div>
            </div>
            <div className="w-full h-16 rounded-[7px] bg-[#F4F4F4] flex justify-center items-center gap-2 md:gap-3 px-2">
              <GiBattery75 className="text-2xl md:text-[28px]" />
              <div className="text flex flex-col text-sm md:text-[18px] text-[#4E4E4E] font-normal">
                <h3>Battery capacity</h3>
                <span className="text-[#000000]">4323 mAh</span>
              </div>
            </div>
          </div>

          <p className="font-normal text-sm md:text-[16px] inter text-[#6C6C6C] mt-6">
            Enhanced capabilities thanks to an enlarged display of 6.7 inches
            and work without recharging throughout the day. Incredible photos in
            weak, yes and in bright light using the new system with two cameras{" "}
            <u className="text-[black] cursor-pointer"> more...</u>
          </p>

          <div className="btn flex flex-col sm:flex-row gap-4 mt-8">
            <button className="border rounded-md border-[black] text-base md:text-[18px] px-12 md:px-18 py-3 md:py-4">
              Add to Wishlist
            </button>
            <Link to="/apply">
              <button
                className="bg-[#000000] text-[white] text-base md:text-[18px] px-12 md:px-18 py-3 md:py-4 rounded-md w-full sm:w-auto"
                onClick={() => handleItem(dataa)}
              >
                Add to Card
              </button>
            </Link>
          </div>

          <div className="bottom flex flex-col sm:flex-row gap-4 md:gap-8 mt-8">
            <div className="flex gap-2">
              <div className="icon w-14 h-14 rounded-[11px] bg-[#F6F6F6] flex items-center justify-center">
                <CiDeliveryTruck className="text-[28px] text-[#797979]" />
              </div>
              <div className="text text-base md:text-[18px] text-[#4E4E4E] font-normal">
                <p className="text-sm md:text-[16px]">Free Delivery</p>
                <span className="text-[black]">1-2 day</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="icon w-14 h-14 rounded-[11px] bg-[#F6F6F6] flex items-center justify-center">
                <IoHomeOutline className="text-[28px] text-[#797979]" />
              </div>
              <div className="text text-base md:text-[18px] text-[#4E4E4E] font-normal">
                <p className="text-sm md:text-[16px]">In Stock</p>
                <span className="text-[black]">Today</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="icon w-14 h-14 rounded-[11px] bg-[#F6F6F6] flex items-center justify-center">
                <FaRegCheckCircle className="text-[28px] text-[#797979]" />
              </div>
              <div className="text text-base md:text-[18px] text-[#4E4E4E] font-normal">
                <p className="text-sm md:text-[16px]">Guaranteed</p>
                <span className="text-[black]">1 year</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="details bg-[#FAFAFA] w-full max-w-[1120px] mx-auto my-10 md:my-20">
        <div className="all px-6 md:px-12 py-8 md:py-12">
          <div className="top">
            <h1 className="font-medium text-xl md:text-[24px] inter">
              Details
            </h1>
            <p className="w-full font-medium text-sm md:text-[14px] text-[#9D9D9D] mt-6 md:mt-8">
              Just as a book is judged by its cover, the first thing you notice
              when you pick up a modern smartphone is the display. Nothing
              surprising, because advanced technologies allow you to practically
              level the display frames and cutouts for the front camera and
              speaker, leaving no room for bold design solutions. And how good
              that in such realities Apple everything is fine with displays.
              Both critics and mass consumers always praise the quality of the
              picture provided by the products of the Californian brand. And
              last year's 6.7-inch Retina panels, which had ProMotion, caused
              real admiration for many.
            </p>
          </div>

          <div className="screen mt-6 md:mt-8">
            <div className="text flex flex-col gap-4 md:gap-6">
              <h3 className="font-medium inter text-xl md:text-[24px]">
                Screen
              </h3>
              <div className="form flex justify-between items-center">
                <p className="text-sm md:text-base">Screen diagonal</p>
                <span className="text-sm md:text-base">6.7"</span>
              </div>
              <hr className="text-[#CDCDCD]" />
              <div className="form flex justify-between items-center">
                <p className="text-sm md:text-base">The screen resolution</p>
                <span className="text-sm md:text-base">2796x1290</span>
              </div>
              <hr className="text-[#CDCDCD]" />
              <div className="form flex justify-between items-center">
                <p className="text-sm md:text-base">The screen refresh rate</p>
                <span className="text-sm md:text-base">120Hz</span>
              </div>
              <hr className="text-[#CDCDCD]" />
              <div className="form flex justify-between items-center">
                <p className="text-sm md:text-base">The pixel density</p>
                <span className="text-sm md:text-base">460 ppi</span>
              </div>
              <hr className="text-[#CDCDCD]" />
              <div className="form flex justify-between items-center">
                <p className="text-sm md:text-base">Screen type</p>
                <span className="text-sm md:text-base">OLED</span>
              </div>
              <hr className="text-[#CDCDCD]" />
              <div className="form flex justify-between items-start">
                <p className="text-sm md:text-base">Additionally</p>
                <span className="w-full max-w-[132px] text-end text-sm md:text-base">
                  Dynamic Island Always-On display HDR display True Tone Wide
                  color (P3)
                </span>
              </div>
            </div>
            <div className="cpu mt-8 md:mt-10">
              <h3 className="text-lg md:text-[20px] font-medium mb-4">CPU</h3>
              <div className="form flex justify-between items-center">
                <h3 className="text-sm md:text-base">CPU</h3>
                <span className="text-sm md:text-base">A16 Bionic</span>
              </div>
              <hr className="text-[#CDCDCD] my-4" />
              <div className="form flex justify-between items-center">
                <span className="text-sm md:text-base">Number of cores</span>
                <span className="text-sm md:text-base">6</span>
              </div>
            </div>
          </div>
          <div className="btn flex justify-center mt-8 md:mt-12">
            <button className="flex items-center gap-2 px-10 md:px-14 py-3 border rounded-lg">
              View More
              <IoIosArrowDown />
            </button>
          </div>
        </div>
      </div>

      <div className="reviews w-full max-w-[1320px] mx-auto hidden md:block">
        <div className="rev_top px-6 md:px-12 py-8 md:py-12">
          <h1 className="font-medium inter text-xl md:text-[24px]">Reviews</h1>
          <div className="mark flex flex-col lg:flex-row gap-8 lg:gap-35 mt-6">
            <img src={Rating} alt="Rating" className="w-full max-w-[300px]" />
            <div className="all mt-0 lg:mt-12 flex flex-col gap-4 md:gap-6">
              <div className="reting flex items-center gap-2">
                <p className="min-w-[100px] md:min-w-38 font-medium inter text-base md:text-[18px]">
                  Excellent
                </p>
                <img
                  src={exelent}
                  alt="reting image"
                  className="flex-1 max-w-[400px]"
                />
                <span className="font-medium inter text-sm md:text-[16px] text-[#D9D9D9] ml-4">
                  100
                </span>
              </div>
              <div className="reting flex items-center gap-2">
                <p className="min-w-[100px] md:min-w-38 font-medium inter text-base md:text-[18px]">
                  Good
                </p>
                <img
                  src={good}
                  alt="reting image"
                  className="flex-1 max-w-[400px]"
                />
                <span className="font-medium inter text-sm md:text-[16px] text-[#D9D9D9] ml-4">
                  11
                </span>
              </div>
              <div className="reting flex items-center gap-2">
                <p className="min-w-[100px] md:min-w-38 font-medium inter text-base md:text-[18px]">
                  Average
                </p>
                <img
                  src={avarage}
                  alt="reting image"
                  className="flex-1 max-w-[400px]"
                />
                <span className="font-medium inter text-sm md:text-[16px] text-[#D9D9D9] ml-4">
                  3
                </span>
              </div>
              <div className="reting flex items-center gap-2">
                <p className="min-w-[100px] md:min-w-38 font-medium inter text-base md:text-[18px]">
                  Below Average
                </p>
                <img
                  src={below}
                  alt="reting image"
                  className="flex-1 max-w-[400px]"
                />
                <span className="font-medium inter text-sm md:text-[16px] text-[#D9D9D9] ml-4">
                  8
                </span>
              </div>
              <div className="reting flex items-center gap-2">
                <p className="min-w-[100px] md:min-w-38 font-medium inter text-base md:text-[18px]">
                  Poor
                </p>
                <img
                  src={poor}
                  alt="reting image"
                  className="flex-1 max-w-[400px]"
                />
                <span className="font-medium inter text-sm md:text-[16px] text-[#D9D9D9] ml-4">
                  1
                </span>
              </div>
            </div>
          </div>
          <input
            type="text"
            placeholder="Leave Comment"
            className="border border-[#CECECE] rounded-lg w-full h-12 md:h-14 mt-8 md:mt-12 px-4 inter font-normal text-sm md:text-[14px] outline-none"
          />
        </div>
      </div>

      <div className="commets w-full max-w-[1320px] mx-auto">
        <div className="commet px-4 md:px-6 py-6">
          <div className="top flex items-start gap-3">
            <img src={user} alt="user" className="w-12 h-12 md:w-16 md:h-16 " />
            <div className="flxx flex flex-col sm:flex-row justify-between w-full gap-2">
              <h3 className="font-bold inter text-base md:text-[17px]">
                Grace Carey
              </h3>
              <span className="font-medium text-sm md:text-[14px] text-[#979797]">
                24 January,2023
              </span>
            </div>
          </div>
          <div className="text mt-3 md:ml-19">
            <img src={stars} alt="stars" className="mb-2" />
            <p className="w-full text-[#7E7E7E] font-medium text-sm md:text-[15px]">
              I was a bit nervous to be buying a secondhand phone from Amazon,
              but I couldn't be happier with my purchase!! I have a pre-paid
              data plan so I was worried that this phone wouldn't connect with
              my data plan, since the new phones don't have the physical Sim
              tray anymore, but couldn't have been easier! I bought an Unlocked
              black iPhone 14 Pro Max in excellent condition and everything is
              PERFECT. It was super easy to set up and the phone works and looks
              great. It truly was in excellent condition. Highly recommend!!!🖤
            </p>
          </div>
        </div>

        <div className="commet px-4 md:px-6 py-6">
          <div className="top flex items-start gap-3">
            <img src={man} alt="man" className="w-12 h-12 md:w-16 md:h-16" />
            <div className="flxx flex flex-col sm:flex-row justify-between w-full gap-2">
              <h3 className="font-bold inter text-base md:text-[17px]">
                Ronald Richards
              </h3>
              <span className="font-medium text-sm md:text-[14px] text-[#979797]">
                24 January,2023
              </span>
            </div>
          </div>
          <div className="text mt-3 md:ml-19">
            <img src={fullstart} alt="stars" className="mb-2" />
            <p className="w-full text-[#7E7E7E] font-medium text-sm md:text-[15px]">
              This phone has 1T storage and is durable. Plus all the new iPhones
              have a C port! Apple is phasing out the current ones! (All about
              the Benjamin's) So if you want a phone that's going to last grab
              an iPhone 14 pro max and get several cords and plugs.
            </p>
          </div>
        </div>

        <div className="commet px-4 md:px-6 py-6">
          <div className="top flex items-start gap-3">
            <img src={opa} alt="opa" className="w-12 h-12 md:w-16 md:h-16 " />
            <div className="flxx flex flex-col sm:flex-row justify-between w-full gap-2">
              <h3 className="font-bold inter text-base md:text-[17px]">
                Darcy King
              </h3>
              <span className="font-medium text-sm md:text-[14px] text-[#979797]">
                24 January,2023
              </span>
            </div>
          </div>
          <div className="text mt-3 md:ml-19">
            <img src={stars} alt="stars" className="mb-2" />
            <p className="w-full text-[#7E7E7E] font-medium text-sm md:text-[15px]">
              I might be the only one to say this but the camera is a little
              funky. Hoping it will change with a software update: otherwise,
              love this phone! Came in great condition
            </p>
          </div>
          <div className="bottom flex gap-2 mt-2 md:ml-19">
            <img
              src={broken}
              alt="broken iphone"
              className="w-full max-w-[150px]"
            />
            <img
              src={broken2}
              alt="broken iphone"
              className="w-full max-w-[150px]"
            />
          </div>
        </div>

        <div className="btn flex justify-center mt-8 md:mt-12 mb-8">
          <button className="flex items-center gap-2 px-10 md:px-14 py-3 border rounded-lg">
            View More
            <IoIosArrowDown />
          </button>
        </div>
      </div>

      <div className="main mb-12">
        <div className="text px-4 md:px-6">
          <h3 className="font-medium text-xl md:text-[24px]">
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
                className="w-full flex justify-end cursor-pointer text-[26px]"
                onClick={() => handleLike(item)}
              >
                {liked.some((q) => q.id === item.id) ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaHeart className="text-[#B5B5B5]" />
                )}
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
                <button className="px-10 sm:px-12 py-3 bg-black text-white rounded-lg text-sm sm:text-base">
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

export default Information;
