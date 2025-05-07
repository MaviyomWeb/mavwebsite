'use client';

import Container from "@/components/Container";
import React from "react";
import CareerItem from "./career";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";

const Career = () => {
  const t = useTranslations("CareerPage");
  const messages = useMessages();
  const careerKeys = Object.keys(messages.CareerPage.Careers);

  return (
    <div className="relative w-full bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-72 md:h-[400px] overflow-hidden">
        <Image
          src="/payload-hero-banner.webp"
          alt="Career"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-6xl font-bold text-center">
            {t("Banner")}
          </h2>
        </div>
      </section>

      {/* Career Cards - One Column */}
      <section className="py-16">
        <Container>
          <div className="flex flex-col items-center gap-12">
            {careerKeys.map((careerKey) => (
              <CareerItem
                key={careerKey}
                careerKey={careerKey}
                t={t}
                messages={messages}
              />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Career;
