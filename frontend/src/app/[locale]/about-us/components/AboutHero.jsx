import { useMessages, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { HiCheckBadge } from "react-icons/hi2";
import { MdArrowRight } from "react-icons/md";

const AboutHero = () => {
  const t = useTranslations("AboutPage.about_company");
  const messages = useMessages();
  const points = Object.keys(messages.AboutPage.about_company.points);

  return (
    <>
      <div className="flex flex-wrap flex-grow flex-shrink flex-auto  items-center pt-4 964Screen:pt-10 pb-10 964Screen:pb-20">
        <div className={`content 964Screen:w-1/2 964Screen:pr-[32px] lg:pr-[64px] xl:pr-[100px] flex flex-col`}>
          <h4 className="relative uppercase text-base text-primary font-semibold tracking-[0.3px] mb-2 964Screen:mb-2">
            {t("section_title")}
          </h4>
          <h2 className={` relative text-[28px] leading-[33px] xs:text-[36px] sm:text-[45px] sm:leading-[50px] font-deca capitalize font-semibold   tracking-[-.92px] text-[#1b243f] mb-3 964Screen:mb-5`}>
            {t("headline")}
          </h2>
          <p className={` text-gray-700 pb-5  text-[15px] leading-[20px] sm:text-[18px] sm:leading-[22px] `}>
            {t("description")}
          </p>

          <ul className=" flex flex-col gap-3 ">
            {points.map((point) => {
              return (
                <li key={point} className="flex gap-3 ">
                  <span className="border-t-2 border-transparent">
                    <HiCheckBadge size={24} className="fill-primary " />
                  </span>
                  <span className="font-medium text-[#0f110f] text-[15px] leading-[20px] sm:text-[18px] sm:leading-[22px]  font-poppins ">
                    {t(`points.${point}.text`)}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="mt-6">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center   text-white bg-[#0D0C22]  px-6 py-3  964Screen:px-[1.875rem] 964Screen:py-4 rounded-[30px] hover:opacity-90 active:opacity-90"
            >
              <span className="whitespace-nowrap tracking-widest capitalize text-sm font-semibold">
                {t("discover_more_button")}
              </span>

              <span className="text-xl">
                <MdArrowRight />
              </span>
            </Link>
          </div>
        </div>

        <div className="hidden 964Screen:block 964Screen:w-1/2">
          <div className="img-container  w-full h-[300px]  964Screen:h-[400px] xl:h-[444px] max-w-[728px] border-4 border-white overflow-hidden rounded-2xl">
            <img
              src="/about-hero-img.webp"
              alt="deigns"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="pb-5 md:pb-5">
        <div className=" w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl  xL:max-w-5xl mx-auto">
          <img
            src={t("section_image.src")}
            alt={t("section_image.alt")}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <p className="text-center mt-4  md:mt-8 max-w-7xl mx-auto  text-[15px] leading-[20px] sm:text-[18px] sm:leading-[22px] text-[#1b243f]">
          {t("footer_description")}
        </p>
      </div>
    </>
  );
};

export default AboutHero;
