import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const ContactHeader = () => {
  const t = useTranslations("ContactPage.ContactHeader");

  return (
    <section className="Contact Us hero-banner ">
      <div className="relative h-[200px] md:h-[200px]">
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <Image
            src="/Contact-bg.webp"
            alt="Contact"
            width={500}
            height={350}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div
          className="content relative h-full w-full  flex items-center justify-center gap-5 px-1 font-poppins text-[#f8f9fa]
       "
        >
          <h2 className="text-[40px]  md:text-[48px] lg:text-[56px]  xl:text-[64px] text-center font-semibold  leading-[1.1]   ">
            {t("Heading")}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
