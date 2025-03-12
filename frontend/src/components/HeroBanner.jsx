import { useTranslations } from "next-intl";

import Link from "next/link";

const HeroBanner = () => {
  const t = useTranslations("HomePage.HeroBanner");

  return (
    <section className="relative isolate z-0  px-6  pt-5 bg-white   lg:px-8 pb-5 md:pb-10 ">
      <div className="relative mx-auto max-w-2xl pt-5">
        <div className="absolute inset-x-0 -top-[5rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[12rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[11.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="text-center">
          <h1 className="   font-semibold   tracking-tight text-secondary text-3xl xs:text-[36px] sm:text-[52px] leading-[1.1] font-poppins">
            {t("title")}
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:leading-8 text-gray-600">
            {t("subtitle")}
          </p>
          <div className="my-7 md:my-10 flex items-center justify-center gap-x-2">
            <Link
              href="/products"
              className="inline-flex whitespace-nowrap text-secondary text-lg border-2 border-secondary hover:text-white hover:bg-secondary  font-medium font-poppins px-6 py-2 rounded-full transition-all ease-in-out duration-200"
            >
              {t("explore")} 
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
