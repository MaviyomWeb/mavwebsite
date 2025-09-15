import { useTranslations } from "next-intl";
import Link from "next/link";

const HeroBanner = () => {
  const t = useTranslations("HomePage.HeroBanner");

  return (
    <section className="relative isolate z-0 px-6 md:px-10 lg:px-8 bg-white pt-[3rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem]">
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-10">

        {/* Image Column (Left Side) */}
        <div className="flex justify-center md:justify-center">
          <img
            src="/drone1.jpg"  // Replace with your image path
            alt="Hero Banner Image"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        {/* <video
  src="/drone-video.mp4"  // Replace with your video path
  className="w-full rounded-lg shadow-lg"
  autoPlay
  loop
  muted
  playsInline
>
  Your browser does not support the video tag.
</video> */}


        {/* Text Column (Right Side) */}
        <div className="text-center md:text-left">
          <h1 className="font-semibold tracking-tight text-secondary text-[30px] leading-[35px] xs:text-[36px] sm:text-[45px] sm:leading-[50px] leading-[1.1] font-poppins">
            {t("title")}
          </h1>
          <p className="mt-4 text-[16px] leading-[20px] sm:text-[20px] sm:leading-[20px] md:leading-8 text-gray-600">
            {t("subtitle")}
          </p>
          <div className="mt-6 flex items-center justify-center md:justify-start gap-x-4">
            <Link
              href="/products"
              className="inline-flex whitespace-nowrap text-secondary text-[15px] leading-[20px] sm:text-[20px] sm:leading-[25px] border-2 border-secondary hover:text-white hover:bg-secondary font-medium font-poppins px-6 py-3 rounded-full transition-all ease-in-out duration-200"
            >
              {t("explore")}
            </Link>
          </div>
        </div>
      </div>

      {/* Optional Decorative Background SVG */}
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
    </section>
  );
};

export default HeroBanner;
