import React from "react";
import img1 from "../images/desktop/image-gallery-milkbottles.jpg";
import img2 from "../images/desktop/image-gallery-orange.jpg";
import img3 from "../images/desktop/image-gallery-cone.jpg";
import img4 from "../images/desktop/image-gallery-sugarcubes.jpg";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import logo from "../images/logoP.png";
const Footer = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-3/5">
        <div className="w-full h-full grid lg:grid-cols-4 grid-cols-2">
          <div className="w-full h-full">
            <img src={img1} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="w-full h-full">
            <img src={img2} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="w-full h-full">
            <img src={img3} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="w-full h-full">
            <img src={img4} className="w-full h-full object-cover" alt="" />
          </div>
        </div>
      </div>
      <div className="w-full h-2/5">
        <div className="w-full h-full bg-fotterCyan text-footerColor py-16 flex items-center flex-col gap-8">
          <img src={logo} className="h-8" alt="" />
          <div className="w-full flex items-center justify-center gap-8 capitalize text-[18px] font-bold">
            <h1>about</h1>
            <h1>services</h1>
            <h1>projects</h1>
          </div>
          <div className="w-full flex items-center justify-center gap-8 mt-8">
            <div>
              <img src={facebook} alt="" />
            </div>
            <div>
              <img src={instagram} alt="" />
            </div>
            <div>
              <img src={twitter} alt="" />
            </div>
            <div>
              <img src={pinterest} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
