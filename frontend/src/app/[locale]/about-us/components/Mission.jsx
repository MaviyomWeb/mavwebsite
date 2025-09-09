import { useMessages, useTranslations } from "next-intl";
import React from "react";
import MissionCard from "./MissionCard";

const Mission = () => {
  const t = useTranslations("AboutPage.mission");
  const messages = useMessages();
  const missionPoints = Object.keys(messages.AboutPage.mission.points);

  return (
    <>
      <div className="bg-white font-sans  flex max-lg:flex-col p-4 md:p-10 my-8 gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        <div className="lg:max-w-md mx-auto">
          <h2 className="relative text-[30px] leading-[35px] xs:text-[36px] sm:text-[45px] sm:leading-[50px] font-bold text-[#1b243f] after:absolute after:left-0 after:top-full after:h-[3px] after:w-[40px] after:rounded-3xl after:bg-primary after:content-[''] "
          >
            {t.rich("title", {
              em: (chunks) => <em>{chunks}</em>,
            })}
          </h2>
          <p className="text-gray-600 text-[16px] leading-[20px] sm:text-[20px] sm:leading-[20px] md:text-base my-7">
            {t("description")}
          </p>
          <img
            src="/mission-img.webp"
            alt=""
            className="w-full h-[50vh] object-cover "
          />
        </div>
        <div className="grid md:grid-cols-2 gap-5 lg:gap-8 max-md:max-w-lg mx-auto">
          {missionPoints.map((point) => (
            <MissionCard point={point} key={point} t={t} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Mission;
