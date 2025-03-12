import Link from "next/link";
import React from "react";
import Container from "./Container";

import { caseStudies, industries } from "@/constants";
import { AiOutlineArrowRight } from "react-icons/ai";
import CaseStudyCard from "./IndustryCard";
import IndustryCard from "./IndustryCard";

const Industries = () => {
  return (
    <section className="bg-white pb-10 md:pb-20  ">
      <Container>
        <div className="max-w-[75rem]  mx-auto">
          <h2 className="text-[32px] sm:text-4xl md:text-5xl text-secondary text-center font-semibold leading-[1.45]">
            Industries We Cater
          </h2>

          <div className=" text-center">
            <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
            <span className="ml-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
            <span className="ml-1 inline-block h-1 w-1 rounded-full bg-blue-500"></span>
          </div>

          <div className="mt-5 case-studies-list l grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[54px]">
            {industries.map((industry) => {
              return <IndustryCard key={industry.id} industry={industry} />;
            })}
          </div>
          <button className="group group block w-full pt-4 md:pt-10 text-right">
            <Link
              href="/industries"
              className=" flex  items-center justify-end text-primary"
            >
              <span className="group text-xl decoration-primary   transition-all duration-300 group-hover:underline   group-hover:underline-offset-4">
                View all
              </span>
              <span className="pl-1 md:pl-3">
                <AiOutlineArrowRight size={24} className=" text-primary  group-hover:animate-slideRight" />
              </span>
            </Link>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Industries;
