"use client";

import { useMessages } from "next-intl";
import React from "react";
import Link from "next/link";

const Team = () => {
  const messages = useMessages();

  const listItems = messages.AboutPage.team_section.list || [];
  const quickFacts = messages.AboutPage.team_section.quickFacts || [];
  const leadershipLinks = messages.AboutPage.team_section.leadershipLinks || [];
  const title = messages.AboutPage.team_section.title;
  const tableHeaders = messages.AboutPage.team_section.table_headers;

  return (
    <div className="container mx-auto px-4 py-6 sm:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

        <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-10 col-span-12 md:col-span-8 shadow-[0_0_20px_rgba(0,0,0,0.15)]">
          <h2 className="text-[22px] leading-[30px] md:text-[32px] sm:leading-[35px] font-bold text-secondary mb-4 sm:mb-6 text-center md:text-left">
            {title}
          </h2>

          <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 mb-6 text-sm sm:text-base">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-600 text-xs sm:text-sm border-collapse">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="p-2 border border-gray-800">{tableHeaders.s_no}</th>
                  <th className="p-2 border border-gray-800">{tableHeaders.parameters}</th>
                  <th className="p-2 border border-gray-800">{tableHeaders.core}</th>
                  <th className="p-2 border border-gray-800">{tableHeaders.board}</th>
                  <th className="p-2 border border-gray-800">{tableHeaders.advisors}</th>
                </tr>
              </thead>
              <tbody>
                {quickFacts.map((fact, idx) => (
                  <tr key={idx} className="border-t">
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

        <div className="col-span-12 md:col-span-4 bg-white shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-lg  p-0 pt-[40px] md:p-6 md:pt-[75px]">
          {leadershipLinks.map((link, idx) => (
            <Link key={idx} href={link.href}>
              <div className="text-secondary text-base sm:text-lg border-2 border-secondary hover:text-white hover:bg-secondary font-medium font-poppins rounded-full text-center px-4 sm:px-6 py-2 sm:py-3 mb-8 mr-10 ml-10 transition-all ease-in-out duration-200">
                <h3 className="text-sm sm:text-lg font-semibold">{link.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
