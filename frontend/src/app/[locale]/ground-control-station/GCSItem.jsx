import DroneSpecsTable from "@/components/DroneSpecsTable";
import React from "react";

const GCSItem = ({ GCS, t, messages }) => {

  const droneSpecs = Object.keys(
    messages.GroundControlSystemPage.GroundControlSystem[GCS].Specs
  );


  const formatValueWithLinsBreaks = (value) => {
    if (value.includes("/n")) {
      return value.split("/n").map((item, index) => {
        return (
          <React.Fragment key={index}>
            {item.trim()}
            <br />
          </React.Fragment>
        );
      });
    }

    return value;
  };

  return (
    <div className="">
      <h3 className="heading text-4xl md:text-[38px] lg:text-[56px]  xl:text-[64px] text-primary text-center font-semibold  font-grotesk leading-[1.1]">
        {t(`GroundControlSystem.${GCS}.Header`)}
      </h3>
      <div
        className={`flex flex-col  lg:flex-row items-center  lg:items-start justify-center gap-8 md:gap-16 mt-5 md:mt-10 ${
          t(`GroundControlSystem.${GCS}.GCS_Number`) === "1" ? "flex-wrap" : ""
        }`}
      >
        <div>
          <img
            src={t(`GroundControlSystem.${GCS}.imgSrc`)}
            alt={t(`GroundControlSystem.${GCS}.Header`)}
            className="w-full h-full max-w-[300px] object-cover "
          />
        </div>

        {/* Specs */}

        <div className="">
          <table className="  text-left rtl:text-right text-gray-500 break-words  border-collapse shadow-[10px_10px_0px_0px_#1d69e7]  ">
            <tbody>
              {droneSpecs.map((spec, index) => (
                <tr
                  key={index}
                  className={`border-2 border-primary ${
                    index % 2 == 0 ? "bg-[#e8f0fdab] " : ""
                  }`}
                >
                  <th
                    scope="row"
                    className="px-2 sm:px-6 py-2 md:py-3 font-medium text-secondary   text-[15px]  xs:text-base   "
                  >
                    
                    {t(`GroundControlSystem.${GCS}.Specs.${spec}.Label`)}:
                  </th>
                  <td className=" px-2 sm:px-6 py-2 md:py-3 text-text-secondary  text-[15px] xs:text-base   ">
                    {formatValueWithLinsBreaks(
                      t(`GroundControlSystem.${GCS}.Specs.${spec}.Value`)
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {t(`GroundControlSystem.${GCS}.GCS_Number`) === "1" && (
        <figure className="hidden sm:block my-5 md:mt-16 md:mb-0 h-full w-full  max-w-[900px] mx-auto">
          <img
            src="/GCS_safe_return.webp"
            alt="GCS Specs"
            className="h-full w-full object-cover"
          />
        </figure>
      )}
    </div>
  );
};

export default GCSItem;
