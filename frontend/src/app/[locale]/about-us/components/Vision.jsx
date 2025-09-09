import { useTranslations } from "next-intl";
import React from "react";

const Vision = () => {
  const t = useTranslations("AboutPage.our_vision");
  return (
    <>
      <div className="mt-5 md:mt-20 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-stretch lg:gap-10 py-10 md:pb-20  ">
        <div className={` grid place-content-center rounded bg-gray-100 p-6 sm:p-8`}>
          <h2 className={`relative text-[30px] leading-[35px] xs:text-[36px] sm:text-[45px] sm:leading-[50px] font-bold text-[#1b243f] after:absolute after:left-0 after:top-full after:h-[3px] after:w-[40px] after:rounded-3xl after:bg-primary after:content-[''] `}> {t("title")}
          </h2>
          <p className={`mt-5  text-[16px] leading-[20px] sm:text-[20px] sm:leading-[20px] text-[#1b243f]`}>
            {t("description")}
          </p>
        </div>
        <div className="img-container h-full sm:h-[400px] lg:h-full   overflow-hidden rounded-md">
          <img
            src="/businessman-big-office.webp"
            alt="deigns"
            className="h-full w-full object-right object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Vision;
