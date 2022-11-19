import React from "react";
import Navbar from "./Navbar";
import arrow from "../images/icon-arrow-down.svg";
const Hero = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full bg-center bg-cover _custom">
        <Navbar />
        <div className="w-full flex items-center flex-col lg:gap-24 gap-16 mt-16">
          <h1 className=" font-fraunces font-[800] text-[50px] text-center text-white tracking-[4px]">
            WE ARE CREATIVES
          </h1>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
