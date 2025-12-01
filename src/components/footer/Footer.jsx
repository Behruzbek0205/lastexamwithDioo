import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Logo from "../../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-black w-full">
      <div className="text flex flex-col lg:flex-row text-white px-4 md:px-6 lg:px-20 xl:px-40 py-12 md:py-16 lg:py-[104px] justify-between gap-8 lg:gap-12">
        <div className="left w-full lg:w-auto lg:max-w-[384px]">
          <img
            src={Logo}
            alt="White Logo"
            className="h-8 md:h-10 mb-4 md:mb-6"
          />
          <p className="w-full font-medium inter">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>
        <div className="center flex flex-col sm:flex-row gap-8 md:gap-12 lg:gap-[132px] w-full lg:w-auto">
          <div className="card">
            <h3 className="font-semibold text-xl md:text-[24px] mb-2 md:mb-4">
              Services
            </h3>
            <ul className="text-sm flex flex-col gap-4 md:text-base">
              <li>Bonus program</li>
              <li>Gift cards</li>
              <li>Credit and payment</li>
              <li>Service contracts</li>
              <li>Non-cash account</li>
              <li>Payment</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold text-xl md:text-[24px] mb-2 md:mb-4">
              Assistance to the buyer
            </h3>
            <ul className="text-sm flex flex-col gap-4 md:text-base">
              <li>Find an order</li>
              <li>Terms of delivery</li>
              <li>Exchange and return of goods</li>
              <li>Guarantee</li>
              <li>Frequently asked questions</li>
              <li>Terms of use of the site</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="icons flex gap-6 md:gap-9 text-white text-xl md:text-2xl px-4 md:px-6 lg:px-20 xl:px-40 pb-8 md:pb-12">
        <FaTwitter  />
        <FaFacebookF  />
        <FaTiktok  />
        <FaInstagram  />
      </div>
    </footer>
  );
};

export default Footer;
