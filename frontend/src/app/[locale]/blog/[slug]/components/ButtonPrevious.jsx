"use client";

import { useRouter } from "next/navigation";
import React from "react";

const ButtonPrevious = ({ locale }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center text-lg  text-black font-medium transition-all duration-200 ease-in-out cursor-pointer hover:underline"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className="css-1ykfz6g"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M328 112 184 256l144 144"
        ></path>
      </svg>{" "}
      {locale === "en" ? "Back" : "पीछे"}
    </button>
  );
};

export default ButtonPrevious;
