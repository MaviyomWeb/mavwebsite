import { useTranslations } from "next-intl";

const CTA = () => {
  const t = useTranslations("CTASection");
  return (
    <section className="pb-8 md:pb-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full  md:max-w-2xl">
          <h2
            style={{ lineHeight: 1.25 }}
            className="font-bold   text-center text-secondary text-2xl sm:text-3xl lg:text-[2.6rem] "
          >
            {t("title")}
          </h2>
          <p className="sm:mx-auto mt-3 sm:max-w-xl  text-center text-base  text-gray-600">
            {t("description")}
          </p>
        </div>

        {/* <div className=" mt-8 flex justify-center">
          <TouchButton />
        </div> */}
      </div>
    </section>
  );
};

export default CTA;
