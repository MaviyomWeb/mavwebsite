import Container from "@/components/Container";
import { camerasData } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div className="relative isolate z-0pb-10 md:pb-20 ">
      <section className="Ground control hero-banner ">
        <div className="relative h-64 md:h-[350px]">
          <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
            <img
              src="/payload-hero-banner.webp"
              alt="Payload"
              className="h-full w-full object-cover object-top"
            />
          </div>
          {/* Overlay */}
          <div className="absolute left-0 top-0 h-full w-full overflow-hidden bg-black/30 "></div>
          {/* Content */}
          <div
            className="content relative h-full w-full  flex items-center justify-center gap-5 px-1 font-poppins text-[#f8f9fa]
       "
          >
            <h2 className="text-3xl md:text-[48px] lg:text-[56px]  xl:text-[64px] text-center font-semibold  leading-[1.1]   ">
              Maviyom Payloads
            </h2>
          </div>
        </div>
      </section>
      <Container>
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
            <div className="mb-6 grid gap-8 md:grid-cols-2 lg:mb-16">
              {camerasData.map((item, index) => {
                return (
                  <div
                    className="items-center rounded-lg bg-gray-50 shadow sm:flex dark:border-gray-700 dark:bg-gray-800"
                    key={item.id + index}
                  >
                    <a href="#">
                      <img
                        className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                        src="/cam-1.webp"
                        alt="Bonnie Avatar"
                      />
                    </a>
                    <div className="p-5">
                      <h3 className="text-xl font-bold tracking-tight mb-2 text-gray-900 dark:text-white">
                        {item.id}
                      </h3>
                      <span className="text-gray-900 font-semibold">
                        {item.type}
                      </span>
                      <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qu
                      </p>

                      <div className=" pt-1 pb-2">
                        {item.features.map((feature, index) => {
                          return (
                            <div className="">
                              <span
                                key={index}
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                              >
                                {feature}
                              </span>
                              {/* <span>
                                <IoIosCheckmarkCircle className="text-2xl font-bold fill-primary" />
                              </span> */}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default page;
