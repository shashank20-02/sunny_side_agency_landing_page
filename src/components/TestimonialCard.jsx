import React from "react";
const Testimonial_Card = ({ img, desc, name, designation }) => {
  return (
    <div className="w-full lg:h-full h-[40vh] px-4 lg:py-16 py-8">
      <div className="w-full h-full flex items-center flex-col lg:gap-0 gap-4">
        <div className="w-[75px] h-[75px]">
          <img src={img} className="w-full h-full rounded-full" alt="/" />
        </div>
        <div className="w-full h-full lg:py-16">
          <h1 className="text-center text-[18px] text-darkBlue font-barlow">
            {desc}
          </h1>
        </div>
        <div>
          <h1 className="text-center text-[20px] font-fraunces text-darkSBlue">
            {name}
          </h1>
        </div>
        <div>
          <h1 className="text-center text-[16px] font-barlow text-grey">
            {designation}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Testimonial_Card;
