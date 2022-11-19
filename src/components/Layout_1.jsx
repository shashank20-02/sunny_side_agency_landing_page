import React from "react";

const Layout = ({ image, title, desc, Button }) => {
  return (
    <div className="w-full lg:h-[60vh] h-auto">
      <div className="w-full h-full flex items-center lg:flex-row flex-col">
        <div className="lg:w-1/2 w-full lg:h-full h-[60vh] lg:px-44 px-12 lg:py-28 py-16 lg:text-left text-center">
          <h1 className=" font-fraunces text-[40px] lg:py-0 py-4">{title}</h1>
          <p className=" font-barlow text-[18px] text-grey lg:text-left text-center lg:py-0 py-4">
            {desc}
          </p>
          <button className=" font-fraunces px-2 py-0 drop-shadow-2xl border-[.25px] rounded-xl border-grey my-4">
            {Button}
          </button>
        </div>
        <div className="lg:w-1/2 w-full lg:h-full h-[40vh] -order-last lg:order-last">
          <img src={image} className="w-full h-full object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
