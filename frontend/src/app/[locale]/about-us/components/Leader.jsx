  import { useMessages, useTranslations } from "next-intl";
  import React from "react";
  import Image from "next/image";

  const Leader = () => {
    const t = useTranslations("AboutPage.leader_section");
    const message = useMessages();

    const teamMembers = Object.keys(message.AboutPage.leader_section.members);
    return (
      <>
        <div className=" mb-10">
          <h2 className="text-[32px]  sm:text-4xl md:text-5xl text-secondary text-center font-semibold leading-[1.45]">
            {t("title")}
          </h2>

          <div className=" text-center">
            <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>

            <span className="ml-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>

            <span className="ml-1 inline-block h-1 w-1 rounded-full bg-blue-500"></span>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4  ">
          {teamMembers.map((member) => {
            const data = message.AboutPage.leader_section.members[member];
            return (
              <div
                key={member}
                className="bg-white shadow-md rounded-lg overflow-hidden  transition-shadow duration-300 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.15)]"
              >
                {/* Image */}
                <div className="p-10"> {/* 20px padding */}
                  <div className="relative w-full h-64 ">
                    <Image
                      src={data.imageSrc}
                      alt={data.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {data.name}
                  </h3>
                  <p className="text-sm text-blue-500 font-medium">
                    {data.role}
                  </p>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  export default Leader;
