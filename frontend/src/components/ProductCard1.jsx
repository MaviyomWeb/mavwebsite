import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard1 = ({ data: product, locale }) => {
  const productData =
    locale === "en" ? product : product?.localizations[0];

    const imageUrl =
    product?.product_image?.formats?.large?.url || 
    product?.product_image?.url || 
    null;

    
    

  return (
    <div className="relative p-5  group cursor-pointer ">
      <div
        className={`relative group aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75  max-w-[500px]  mx-auto
         

        h-full   md:h-[220px] ${
          productData?.title === "Maviyom 25L" ? "h-[64px]" : ""
        }
        
        `}
      >
        <Image
          src={imageUrl}
          alt={productData?.title}
          width={500}
          height={200}
          className="h-full w-full object-cover object-center  "
        />
      </div>
      <div className="p-4 flex flex-col items-center justify-center">
        <div className="space-y-3 md:space-y-4">
          <h1
            className=" inline-flex items-center  text-secondary  text-2xl  md:text-3xl font-semibold  gap-1 
                          transition-all ease-in-out duration-200  "
          >
            {productData?.title}
            <span className="hidden sm:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </span>
          </h1>
          <p className=" md:mt-3 max-w-md mx-auto   text-gray-600">
            {productData?.short_description}
          </p>
          <Link
            href={`/products/product/${product?.slug}`}
            className="flex max-w-max mx-auto place-content-center mt-3 md:mt-5 mb-2 items-center justify-center whitespace-nowrap border-2 border-secondary text-secondary hover:text-white hover:bg-secondary  font-medium px-4 py-2 rounded-full transition-all ease-in-out duration-200"
          >
            {locale === "en" ? "know more" : "अधिक जानें"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard1;

/**
 * 
 * <div className="p-4 flex flex-col items-center justify-center">
        <h1 className="text-xl text-primary font-semibold flex gap-1 items-center">
          {content.label}
          <span>
            <MdArrowForward className=" -rotate-45 " />
          </span>
        </h1>
        <p className="mt-3 text-sm text-center text-gray-600">
          Advanced Spraying drone (25L tank capacity), Advanced Spraying drone
          (25L tank capacity)
        </p>
        <button className="flex max-w-max place-content-center mt-3 xs:mt-5 mb-2 items-center justify-center whitespace-nowrap text-white bg-secondary  font-medium px-4 py-2 rounded-lg">
          Know More
        </button>
      </div>
 */
