import { useMessages, useTranslations } from "next-intl";
import React from "react";
import Link from "next/link";

const Team = () => {
  const t = useTranslations("AboutPage.team_section");
  const message = useMessages();

  const quickFacts = [
    { no: 1, parameter: "Average Age", core: "25", board: "40+", advisors: "40+" },
    { no: 2, parameter: "Average Experience", core: "2+", board: "15+", advisors: "25+" },
    { no: 3, parameter: "Average Educational Qualification", core: "Masters", board: "Masters", advisors: "Professionals" }
  ];

  const leadershipLinks = [
    { title: "Founders", href: "/about-us/founder" },
    { title: "Directors", href: "/about-us/director" },
    { title: "Advisors", href: "/about-us/advisor" },
    { title: "Leaders", href: "/about-us/leader" }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-12 gap-8">
        
        {/* LEFT COLUMN */}
        <div className="bg-white rounded-lg p-10 col-span-12 md:col-span-8 shadow-[0_0_20px_rgba(0,0,0,0.15)]">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            The Team of Maviyom is a PEARL
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Passion Driven Core Team</li>
            <li>Educated Directors</li>
            <li>Advisors from Multi Skills and Disciplines</li>
            <li>Realistic Approach</li>
            <li>Learned Workforce</li>
          </ul>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-600 text-sm border-collapse">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="p-2 border border-gray-800">S. NO.</th>
                  <th className="p-2 border border-gray-800">PARAMETERS</th>
                  <th className="p-2 border border-gray-800">CORE</th>
                  <th className="p-2 border border-gray-800">BOARD</th>
                  <th className="p-2 border border-gray-800">ADVISORS</th>
                </tr>
              </thead>
              <tbody>
                {quickFacts.map((fact) => (
                  <tr key={fact.no} className="border-t">
                    <td className="p-2 text-center border border-gray-800">{fact.no}</td>
                    <td className="p-2 border border-gray-800">{fact.parameter}</td>
                    <td className="p-2 text-center border border-gray-800">{fact.core}</td>
                    <td className="p-2 text-center border border-gray-800">{fact.board}</td>
                    <td className="p-2 text-center border border-gray-800">{fact.advisors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-12 md:col-span-4 bg-white shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-lg p-6 pt-[75px]">
          {leadershipLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <div className="text-secondary text-lg border-2 border-secondary hover:text-white hover:bg-secondary  font-medium font-poppins rounded-full text-center px-6 py-3 mb-8 mr-10 ml-10 transition-all ease-in-out duration-200">
                <h3 className="text-lg font-semibold">{link.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
