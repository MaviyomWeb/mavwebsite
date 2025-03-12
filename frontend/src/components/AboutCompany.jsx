import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Container from "./Container";

import { useMessages, useTranslations } from "next-intl";
import Link from "next/link";

const AboutCompany = () => {
  const t = useTranslations("HomePage.why_choose_maviyom");
  const messages = useMessages();

  const benefits = Object.keys(messages.HomePage.why_choose_maviyom.benefits);

  return (
    <section className="mt-5 md:mt-0 pb-10 md:pb-20 bg-white">
      <Container>
        <>
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] text-[#152432] text-center font-semibold leading-[1.45]">
              {t("title")}
            </h2>
            <p className=" text-[#5d6165] text-center text-base leading-5 mt-2 ">
              {t("subtitle")}
            </p>

            <div className=" text-center">
              <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
              <span className="ml-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
              <span className="ml-1 inline-block h-1 w-1 rounded-full bg-blue-500"></span>
            </div>
            <div className="relative mt-4 md:mt-8 grid   max-w-[1250px] gap-2 md:gap-5  lg:mx-auto lg:grid-cols-2 lg:gap-40">
              <div className="content grid  gap-2 md:gap-5 pb-10 ">
                <h3 className="text-[26px]  md:text-3xl lg:text-4xl font-bold text-[#1b243f]">
                  {t("pledge.title")}
                </h3>
                <p className="text-lg md:text-base my-2 md:my-0 text-gray-800  ">
                  {t.rich("pledge.description", {
                    span: (chunks) => <span className="block">{chunks}</span>,
                  })}
                </p>

                <ul className="grid gap-4">
                  {benefits.map((benefit) => {
                    return (
                      <li key={benefit} className="flex items-center gap-2">
                        <span>
                          <IoIosCheckmarkCircle className="text-2xl font-bold fill-primary" />
                        </span>
                        <p className="font-medium text-secondary text-lg md:text-base">
                          {t(`benefits.${benefit}.benefit`)}
                        </p>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-4 md:mt-0">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center text-secondary border-2 border-secondary     px-6 py-3   rounded-[30px] whitespace-nowrap tracking-widest capitalize text-sm font-semibold  transition-all ease-in-out duration-200 hover:text-white hover:bg-[#0D0C22]"
                  >
                    {t("learn_more")}
                  </Link>
                </div>
              </div>

              <div className="flex flex-grow relative pl-10  ">
                <img
                  src="/agri-25L.webp"
                  alt="about"
                  className="h-80 md:h-full w-full rounded-md   object-cover  "
                />
                <div className="absolute bottom-0  left-0 z-10 bg-secondary w-full max-w-[240px] md:max-w-[260px] px-[5%]  py-[5%] md:py-[2%]   lg:py-[5%] border-[5px] border-white   rounded-2xl ">
                  <h3 className="  text-[#f8f8f8]  text-xl  font-semibold ">
                    {t("image_caption")}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </>
      </Container>
    </section>
  );
};

export default AboutCompany;
