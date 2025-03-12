import Container from "@/components/Container";
import React from "react";
import GCSItem from "./GCSItem";

import { GCS_Details } from "@/constants";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";

const GCS = () => {
  const t = useTranslations("GroundControlSystemPage");

  const messages = useMessages();
  const GCS = Object.keys(messages.GroundControlSystemPage.GroundControlSystem);

  return (
    <div className="relative isolate w-full z-0 bg-white     ">
      <section className="Ground control hero-banner ">
        <div className="relative h-64 md:h-[350px]">
          <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
            <Image
              src="/mission-img.webp"
              alt="GCS"
              width="500"
              height="350"
              className="h-full w-full object-cover object-center"
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
              {t("Banner")}
            </h2>
          </div>
        </div>
      </section>

      <section className="GCS">
        <Container>
          <div className="GCS mt-8   md:w-[89%] mx-auto  ">
            {GCS.map((GCS) => (
              <div key={GCS} className="pb-16 md:pb-20 ">
                <GCSItem GCS={GCS} t={t} messages={messages} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default GCS;
