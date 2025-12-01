import React from "react";
import Ps from "../../assets/ps.png";
import Air from "../../assets/halfair.png";
import Vison from "../../assets/vison.png";
import Mac from "../../assets/MacBook.png";

const Games = () => {
  return (
    <div className="max-w-[1521px] w-full  sm:w-[1521px]">
      <div className="twodivs w-full flex flex-col lg:flex-row sm:w-[1521px]">
        <div className="ralex w-full lg:w-auto">
          <div className="ps5 flex flex-col sm:flex-row w-full h-auto sm:w-[760.5px] sm:h-[328px]">
            <div className="img">
              <img src={Ps} alt="playStation" className="w-full sm:w-auto" />
            </div>
            <div className="text mt-8 sm:mt-[100px] px-4 sm:px-0">
              <h3 className="inter font-medium text-[32px] sm:text-[49px]">Playstation 5</h3>
              <p className="w-full sm:w-[338px] text-[14px] text-[#909090]">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>

          <div className="all flex flex-col sm:flex-row">
            <div className="airpods w-full sm:w-[380.25px] flex flex-col items-center sm:flex-row gap-6 sm:gap-12 bg-[#EDEDED] p-4 sm:p-0">
              <div className="image w-[104px]">
                <img src={Air} alt="Airpods" />
              </div>
              <div className="text py-8 sm:py-16">
                <h3 className="text-[24px] sm:text-[29px] font-light w-full sm:w-20">
                  Apple AirPods <span className="font-semibold">Max</span>
                </h3>
                <p className="w-full sm:w-40 text-[#909090]">
                  Computational audio. Listen, it's powerful
                </p>
              </div>
            </div>
            <div className="vision bg-[#353535] flex flex-col items-center sm:flex-row gap-6 sm:gap-12 sm:items-center w-full sm:w-[380.25px] p-4 sm:p-0">
              <div className="img">
                <img src={Vison} alt="Vison" />
              </div>
              <div className="text">
                <h3 className="inter text-[white] text-[24px] sm:text-[29px] font-light w-full sm:w-34">
                  Apple Vision <span className="font-semibold">Pro</span>
                </h3>
                <p className="w-full sm:w-40 text-[#909090]">An immersive way to experience entertainment</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mac w-full lg:w-[760.5px] flex flex-col sm:flex-row items-center justify-between bg-[#EDEDED] p-6 sm:p-0">
          <div className="text w-full sm:w-[360px] h-auto sm:h-[272px] sm:ml-20">
            <h3 className="text-[40px] sm:text-[64px] font-light w-full sm:w-20 leading-tight sm:leading-15">Macbook <span className="font-semibold">Air</span></h3>
            <p className="w-full sm:w-93 text-[#909090] mt-4">
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <button className="border border-[black] rounded-md px-[50px] sm:px-[65px] py-3 sm:py-4 mt-6 text-[16px] sm:text-[18px] font-medium">
              Shop Now
            </button>
          </div>
          <div className="img mt-6 sm:mt-0">
            <img src={Mac} alt="Macbook Pro" className="w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;