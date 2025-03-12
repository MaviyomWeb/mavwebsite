import React from "react";

const TeamCard = ({ member, t }) => {
  return (
    <div className="rounded-md bg-white px-2 py-4 ">
      {/* <img
        src="https://readymadeui.com/team-5.webp"
        className="inline-block h-36 w-36 rounded-full"
      /> */}
      <div className="mt-4 flex flex-col ">
        <h4 className="text-secondary font-poppins mb-[10px] text-center font-medium capitalize ">
          {t(`members.${member}.role`)}
        </h4>
        <h3 className="text-secondary font-poppins text-center text-lg font-semibold">
          {t(`members.${member}.name`)}
        </h3>
        <p className="text-secondary mt-2  overflow-hidden  text-justify  md:text-sm xl:text-[15px] font-normal leading-5">
          {t(`members.${member}.description`)}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
