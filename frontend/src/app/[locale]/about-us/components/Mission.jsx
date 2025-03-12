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
          <h2
            className="relative text-4xl md:text-5xl font-bold text-[#1b243f] after:absolute after:left-0 after:top-full after:h-[3px]
after:w-[40px] after:rounded-3xl after:bg-primary after:content-[''] "
          >
            {t.rich("title", {
              em: (chunks) => <em>{chunks}</em>,
            })}
          </h2>
          <p className="text-gray-600 text-lg md:text-base my-7">
            {t("description")}
          </p>
          <img
            src="/mission-img.webp"
            alt=""
            className="w-full h-64 sm:h-96   xl:h-full object-cover "
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
