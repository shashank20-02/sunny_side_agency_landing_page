import React from "react";

const Layout_3 = ({ image1, image2, title1, title2, desc1, desc2 }) => {
  return (
    <div className="w-full lg:h-[60vh] h-full">
      <div className="w-full h-full flex items-center lg:flex-row flex-col">
        <div className="lg:w-1/2 w-full lg:h-full h-[70vh] flex items-end relative">
          <img src={image1} className="w-full h-full object-cover" alt="" />
          <div className="absolute w-full h-1/2 flex items-end justify-center py-16">
            <div className="lg:w-1/2 w-full flex items-center flex-col">
              <h1 className=" font-fraunces text-[32px] text-darkBlue">
                {title1}
              </h1>
              <p className=" font-barlow text-[18px] text-darkSBlue text-center">
                {desc1}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full lg:h-full h-[70vh]  flex items-end relative">
          <img src={image2} className="w-full h-full object-cover" alt="" />
          <div className="absolute w-full h-1/2 flex items-end justify-center py-16">
            <div className="lg:w-1/2 w-full flex items-center flex-col">
              <h1 className=" font-fraunces text-[32px] text-darkBlue">
                {title2}
              </h1>
              <p className=" font-barlow text-[18px] text-darkSBlue text-center">
                {desc2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout_3;
