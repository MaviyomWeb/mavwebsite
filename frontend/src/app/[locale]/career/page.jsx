"use client";

import Container from "@/components/Container";
import React from "react";
import CareerItem from "./career";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";

const Career = () => {
  const t = useTranslations("CareerPage");
  const messages = useMessages();
  const careerKeys = Object.keys(messages.CareerPage.Careers);
  const [openIndex, setOpenIndex] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  // ✅ Example categories – must match your i18n data structure
  const categories = [
    "R&D",
    "Manufacturing",
    "Software",
    "Business Development",
    "Pilots",
    "Others",
  ];

  // ✅ Filter jobs based on selected category
  const filteredCareers = selectedCategory
    ? careerKeys.filter(
        (careerKey) =>
          messages.CareerPage.Careers[careerKey].Category === selectedCategory
      )
    : [];

  return (
    <div className="relative w-full bg-gray-50">
      <section className="relative h-[150px] md:h-[200px] overflow-hidden">
        <Image
          src="/carrer-hero-banner.jpg"
          alt="Career"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-[30px] leading-[35px] sm:text-[60px] sm:leading-[65px] font-bold text-center">
            {t("Banner")}
          </h2>
        </div>
      </section>

      <section className="py-10">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-6 gap-4 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenIndex(null); 
                }}
                className={`px-4 py-3 rounded-lg text-center text-[14px] leading-[20px] sm:text-[18px] sm:leading-[20px] font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-[#0D0C22] text-white hover:bg-[#0D0C22]"
                    : "bg-[#1d69e7] text-white shadow-md "
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

           {/* Career Jobs */}
          <div className="flex flex-col items-center gap-6">
            {selectedCategory ? (
              filteredCareers.length > 0 ? (
                filteredCareers.map((careerKey, index) => (
                  <CareerItem
                    key={careerKey}
                    careerKey={careerKey}
                    t={t}
                    messages={messages}
                    isOpen={openIndex === index}
                    onToggle={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  />
                ))
              ) : (
                <p className="text-gray-500">
                  No jobs available in this category.
                </p>
              )
            ) : (
              <p className="text-gray-400 italic">
                Select a category to view jobs.
              </p>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Career;
