import React from "react";

const CareerItem = ({ careerKey, t, messages }) => {
  const careerData = messages.CareerPage.Careers[careerKey];

  const formatWithLineBreaks = (value) => {
    return value.includes("/n")
      ? value.split("/n").map((line, i) => (
        <React.Fragment key={i}>
          {line.trim()}
          <br />
        </React.Fragment>
      ))
      : value;
  };

  if (!careerData) return null;

  return (
    <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300 border border-gray-200">
      <h3 className="text-3xl font-semibold text-blue-700 text-center mb-6">
        {careerData.Header}
      </h3>

      <div className="space-y-6 text-gray-700">
        {/* Responsibilities */}
        <div>
          <h4 className="text-xl font-bold mb-2">Key Responsibilities</h4>
          <ul className="list-disc pl-5 space-y-1">
            {careerData.Responsibilities.map((item, index) => (
              <li key={index}>{formatWithLineBreaks(item)}</li>
            ))}
          </ul>
        </div>

        {/* Qualifications */}
        <div>
          <h4 className="text-xl font-bold mb-2">Qualifications</h4>
          <ul className="list-disc pl-5 space-y-1">
            {careerData.Qualifications.map((item, index) => (
              <li key={index}>{formatWithLineBreaks(item)}</li>
            ))}
          </ul>
        </div>

        {/* Bonus Skills */}
        <div>
          <h4 className="text-xl font-bold mb-2">Bonus / Preferred Skills</h4>
          <ul className="list-disc pl-5 space-y-1">
            {careerData.BonusSkills.map((item, index) => (
              <li key={index}>{formatWithLineBreaks(item)}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Apply Now */}
      <div className="mt-8 text-center">
        <a
          href="https://maviyom.com/en/contact-us"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-200 shadow-md"
        >
          Apply Now
        </a>
      </div>

    </div>
  );
};

export default CareerItem;
