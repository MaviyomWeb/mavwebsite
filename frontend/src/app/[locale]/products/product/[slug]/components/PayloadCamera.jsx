import Link from "next/link";
import React from "react";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Payload from "./Payload";

const PayloadCamera = ({ productAllDetails, product, locale }) => {

  const imageUrl =
  productAllDetails?.payload_image?.formats?.medium?.url || 
  productAllDetails?.payload_image?.url || 
  null;


  return (
    <div className="max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={
          imageUrl
        }
        alt={product?.title}
      />

      <div className="mt-4 mb-1 flex items-center justify-center">
        <Link
          href="/contact-us"
          className="px-6 py-2   font-medium text-text-primary rounded-3xl flex items-center justify-center transition-all duration-150 ease-in-out hover:text-white hover:bg-primary"
        >
          {locale === "en" ? "know more" : "अधिक जानें"}
          <span>
            <MdOutlineKeyboardArrowRight className="text-3xl" />
          </span>
        </Link>
      </div>
      <div className="flex items-center justify-center flex-wrap ">
        {product?.payload_features?.features?.map((feature, index) => {
          return (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{feature}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default PayloadCamera;
