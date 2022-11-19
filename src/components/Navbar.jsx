import React, { useState } from "react";
import Logo from "../images/logo.svg";
import Ham from "../images/icon-hamburger.svg";
const Navbar = () => {
  const [nav, SetNav] = useState(false);

  const HandleClick = () => {
    SetNav(!nav);
  };
  return (
    <div className="w-screen h-[100px] lg:px-16 px-8">
      <div className="w-full h-full flex items-center justify-between">
        <div className=" w-28">
          <img src={Logo} className="w-full" alt="" />
        </div>
        <div className=" text-[18px] text-white hidden  lg:flex items-center">
          <ul className="flex items-center gap-6">
            <li className=" hover:cursor-pointer">About</li>
            <li className=" hover:cursor-pointer">Services</li>
            <li className=" hover:cursor-pointer">Projects</li>
          </ul>
          <button className="ml-8 px-6 py-2 font-fraunces font-[700] border-white border text-black  bg-white transition duration-200 rounded-3xl hover:bg-transparent hover:text-white">
            Contact
          </button>
        </div>
        <div className="text-[18px] text-white flex items-center lg:hidden">
          <img
            src={Ham}
            alt="/"
            onClick={() => {
              HandleClick();
            }}
          />
        </div>
      </div>
      {nav && (
        <div className="w-full absolute flex items-center flex-col justify-center left-0 px-4 py-4">
          <ul className="w-full flex items-center flex-col bg-white py-4 text-[18px] text-grey font-[800] font-barlow">
            <li className=" hover:cursor-pointer py-4">About</li>
            <li className=" hover:cursor-pointer py-4">Services</li>
            <li className=" hover:cursor-pointer py-4">Projects</li>
            <button className="mt-4 px-8 py-4 rounded-3xl text-[18px] text-black uppercase font-fraunces border border-yellow bg-yellow transition duration-200 hover:bg-transparent font-[800]">
              Contact
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
