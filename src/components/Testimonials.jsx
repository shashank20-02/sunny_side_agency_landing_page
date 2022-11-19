import React from "react";
import TestimonialCard from "./TestimonialCard";
import img1 from "../images/image-emily.jpg";
import img2 from "../images/image-jennie.jpg";
import img3 from "../images/image-thomas.jpg";
import assets from "../assets.json";
const Testimonials = ({ title }) => {
  return (
    <div className="w-full lg:h-screen h-auto">
      <div className="w-full h-full lg:py-32 py-8 lg:px-52 px-4">
        <div className="w-full flex items-center justify-center">
          <h1 className=" font-fraunces text-[28px] text-grey uppercase mb-8">
            {title}
          </h1>
        </div>
        <div className="w-full h-full grid lg:grid-cols-3 grid-cols-1">
          <TestimonialCard
            img={img1}
            desc={assets.testimonials.testimonial_1.title}
            name={assets.testimonials.testimonial_1.name}
            designation={assets.testimonials.testimonial_1.designation}
          />
          <TestimonialCard
            img={img2}
            desc={assets.testimonials.testimonial_2.title}
            name={assets.testimonials.testimonial_2.name}
            designation={assets.testimonials.testimonial_2.designation}
          />
          <TestimonialCard
            img={img3}
            desc={assets.testimonials.testimonial_3.title}
            name={assets.testimonials.testimonial_3.name}
            designation={assets.testimonials.testimonial_3.designation}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
