import React from "react";

const ProductCard2 = ({ content }) => {
  return (
    <div className="items-center    p-6 shadow sm:flex   rounded-xl max-w-5xl mx-auto ">
      <div className="flex flex-col  items-center rounded-md border md:flex-row   p-5">
        <div className="h-full w-full ">
          <div className="h-full w-96 ">
            <img
              src={content.image}
              alt="Laptop"
              className="h-full w-full rounded-md object-cover object-center"
            />
          </div>
        </div>
        <div className="pl-5 md:w-full">
          <div className=" space-y-4">
            <h2 className="text-center text-secondary  capitalize text-4xl font-semibold">
              {content.label}
            </h2>
            <p className=" text-sm text-text-secondary leading-5">
              Mridul Aggarwal, our CEO, is the embodiment of youthful vigor
              combined with
            </p>

            <button className="bg-secondary  text-white  font-bold hover:bg-opacity-90 px-4 py-2 rounded-md">
              Check Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
