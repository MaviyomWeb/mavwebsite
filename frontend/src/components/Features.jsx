import { whyMaviyomDetails } from "@/constants";
import Image from "next/image";
import React from "react";
import Container from "./Container";

const Features = () => {
  return (
    <>
      {/* //
    
    
    // */}

      <section className="bg-white ">
        <Container>
          <div className="container mx-auto  py-10">
            <h2 className="text-[32px] sm:text-4xl md:text-5xl text-secondary text-center font-semibold leading-[1.45]">
              Why Choose Maviyom
            </h2>
            <p className=" text-[#5d6165] text-center  text-sm sm:text-base leading-5 mt-2 ">
              Unmatched Aerial Excellence
            </p>

            <div className=" text-center">
              <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
              <span className="ml-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
              <span className="ml-1 inline-block h-1 w-1 rounded-full bg-blue-500"></span>
            </div>

            <div className="mt-8 lg:flex lg:items-center  ">
              <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 xl:w-1/2 :gap-16">
                {whyMaviyomDetails.map((detail, index) => (
                  <div key={index} className="space-y-3">
                    <Image
                      src={detail.icon}
                      alt="icon"
                      width={36}
                      height={36}
                      className=""
                    />
                    <h1 className="text-xl font-semibold capitalize text-gray-700 ">
                      {detail.title}
                    </h1>
                    <p className="text-gray-500 ">{detail.description}</p>
                  </div>
                ))}
              </div>

              <div className="hidden xl:flex xl:w-1/2 xl:justify-end">
                <img
                  className="h-[28rem] w-[28rem] flex-shrink-0 rounded-md object-cover xl:h-[32rem] xl:w-[32rem]"
                  src="https://media.istockphoto.com/id/599959580/photo/man-flying-a-drone-at-sunset.jpg?s=1024x1024&w=is&k=20&c=8LwxPLO40Qy-EDcK4hpt6CXyCmasuYZOiqdAfweAAzw="
                  alt=""
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Features;

//  <section className="pb-20">
//    <Container>
//      <h2 className="text-5xl text-secondary text-center font-semibold leading-[1.45]">
//        Why Choose Maviyom
//      </h2>
//      <p className=" text-[#5d6165] text-center  leading-5">
//        Unmatched Aerial Excellence
//      </p>

//      <div className="content mt-20">
//        <div className="content-container flex items-center justify-center gap-20">
//          <div className="feature-content ">
//            {Array(3)
//              .fill(1)
//              .map((item) => {
//                return (
//                  <div
//                    // key={sub_link.key}
//                    className="group/link flex items-center justify-between rounded-md p-3 duration-300 hover:bg-[#F8F9FF] dark:hover:bg-[#202038] lg:mb-2"
//                  >
//                    <span className="flex">
//                      <span className="mr-4 h-9 w-full max-w-[36px] inline-flex  rounded  ">
//                        <Image
//                          src="/feature-message-icon.svg"
//                          alt="icon"
//                          width={200}
//                          height={200}
//                          className=""
//                        />
//                      </span>
//                      <span className="pr-6 lg:pr-8">
//                        <span className="mb-1 block text-3xl font-semibold text-dark  leading-[1.45]">
//                          {/* {sub_link.label} */}
//                          Unparalleled Design
//                        </span>
//                        <span className="block text-xl  text-[#9597a8]">
//                          {/* {sub_link.description} */}
//                          Minimalist design with maximum impact.
//                        </span>
//                      </span>
//                    </span>
//                  </div>
//                );
//              })}
//          </div>

//          <div className="h-[500px] w-[300px] rounded-md">
//            <Image
//              src="/feature-phone-img.png"
//              width={270}
//              height={101}
//              alt="experience banner"
//              className="w-full h-full object-cover rounded-[inherit]"
//            />
//          </div>
//        </div>
//      </div>
//    </Container>
//  </section>;
