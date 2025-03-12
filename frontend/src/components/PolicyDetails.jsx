import PolicySection from "./PolicySection";

const PolicyDetails = ({ title, info, sections, t, messages }) => {
  return (
    <section className="max-w-[75rem] mx-auto">
      <h2
        className={`relative text-3xl md:text-[2rem]   font-roboto capitalize font-semibold leading-10 md:leading-[1.2]   text-secondary  mb-3 md:mb-6  
          
    `}
      >
        {title}
      </h2>

      <div className="break-words ">
        <p className="mb-6 text-gray-600 text-[17px] leading-7 ">{info}</p>

        {sections.map((section, index) => {
         
          return (
            <PolicySection
              key={index}
              title={t(`sections.${section}.title`)}
              section={section}
              messages = {messages}
              t = {t}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PolicyDetails;
