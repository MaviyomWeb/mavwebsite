import React from "react";

const PolicySection = ({ title, section, messages , t}) => {
   const content = Object.keys(
     messages.sections[section].content
   );
  return (
    <div className="mt-7 ">
      <p className=" text-xl  left-7  text-secondary">
        <strong>{title}:</strong>
      </p>
      <ul className=" list-disc mt-3  text-gray-600">
        {content.map((item, index) => (
          <li key={index} className="my-[5px]">
            <p className="inline  text-[17px] leading-7 ">
              {t(`sections.${section}.content.${item}`)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PolicySection;
