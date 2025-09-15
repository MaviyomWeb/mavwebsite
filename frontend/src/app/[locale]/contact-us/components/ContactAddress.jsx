import { locations } from "@/constants";
import { useMessages } from "next-intl";
import React from "react";

import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

const ContactAddress = ({ t }) => {
  const messages = useMessages();
  const locations = Object.keys(
    messages.ContactPage.ContactAddress.Locations.LocationsList
  );

  return (
    <div className="rounded-lg bg-gray-100 mt-8 mb-5 md:my-8  mx-0 lg:mx-[10%] shadow-lg">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10 ">
        <div className="py-5 md:py-10">
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-[55%_45%] lg:grid-cols-[65%_35%] md:gap-x-5 lg:gap-x-5 xl:gap-x-5">
            <div className="space-y-4 ">
              <div className=" flex gap-3 ">
                <div className="h-10 md:h-12 lg:h-14 w-10 md:w-12 lg:w-14 flex flex-shrink-0 items-center justify-center text-white bg-secondary rounded-full">
                  <IoLocationOutline className="text-2xl md:text-[27px] lg:text-3xl" />
                </div>
                <div>
                  {/* <h3 className="w-full text-2xl md:text-3xl   font-bold text-secondary  ">
                    {t("ContactAddress.Locations.Heading")}
                  </h3> */}
                  <div className="flex flex-col gap-3 ml-1">
                    {locations.map((location) => (
                      <div key={location} className="">
                        <h3 className="w-full text-xl font-semibold  text-secondary">
                          {t(
                            `ContactAddress.Locations.LocationsList.${location}.Title`
                          )}
                        </h3>

                        <p className="  text-[15px] sm:text-[18px] leading-7 text-gray-700">
                          {t(
                            `ContactAddress.Locations.LocationsList.${location}.Address`
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col space-y-5 sm:space-y-0 md:space-y-7 ">
              <div className="flex flex-row items-center gap-4">
                <div className="h-10 md:h-12 lg:h-14 w-10 md:w-12 lg:w-14 flex items-center justify-center text-white bg-secondary rounded-full">
                  <HiOutlineEnvelope className="text-2xl md:text-[27px] lg:text-3xl" />
                </div>
                <div className="flex flex-col ">
                  {/* <h3 className="w-full text-2xl md:text-3xl   font-bold text-secondary  ">
                    {t("ContactAddress.Email.Label")}
                  </h3> */}
                  <p className="w-full text-[1.1rem] sm:text-xl font-semibold  text-secondary">
                    {t("ContactAddress.Email.Value")}
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center gap-4  ">
                <div className="h-10 md:h-12 lg:h-14 w-10 md:w-12 lg:w-14 flex items-center justify-center text-white bg-secondary rounded-full">
                  <IoCallOutline className="text-2xl md:text-[27px] lg:text-3xl" />
                </div>
                <div className="flex flex-col ">
                  {/* <h3 className="w-full text-2xl md:text-3xl   font-bold text-secondary    ">
                    {t("ContactAddress.Phone.Label")}
                  </h3> */}
                  <p className="w-full text-[1.1rem] sm:text-xl font-semibold  text-secondary">
                    {t("ContactAddress.Phone.Value")}
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
