import React from "react";

const AboutCard = ({ feature, index }) => {
  return (
    <div className="grid justify-between  md:grid-cols-2 lg:gap-0">
      <div
        className={`content grid gap-5  pb-10  sm:place-content-center 
    ${index % 2 !== 0 ? "md:order-1 md:justify-items-end " : ""}
    `}
      >
        {/* <h3
          className="relative text-lg font-normal italic after:absolute after:left-0 after:top-6 after:h-[3px]
after:w-[20px] after:rounded-3xl after:bg-btn-primary-bg after:content-[''] sm:mb-0 lg:mb-5  lg:text-base
"
        >
          {feature.service}
        </h3> */}
        <h2
          className={`text-3xl font-bold text-[#1b243f]   
          ${index % 2 !== 0 ? "md:text-end" : ""}
    `}
        >
          {feature.title}
        </h2>
        <p
          className={` md font-poppins text-lg leading-7 text-text sm:w-4/5 md:text-base 
            ${index % 2 !== 0 ? "md:text-end" : ""}`}
        >
          {feature.subtitle}
        </p>
      </div>

      <div className="img-container h-[400px] w-full max-w-[768px] overflow-hidden rounded-md">
        <img
          src={feature.imgSrc}
          alt="deigns"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutCard;
