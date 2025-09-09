const Applications = ({ data: product, locale }) => {
  return (
    <>
      <div className="mt-8 md:mt-16 md::px-4 w-full max-w-md sm:max-w-4xl  mx-auto pb-10 md:pb-0">
        <h2 className="heading text-[28px] md:text-4xl xl:text-5xl text-secondary  font-dmSans  md:leading-5 font-medium text-center mb-4 md:mb-8 ">
          {product?.title} {locale === "en" ? "Applications" : "के अनुप्रयोग"}
        </h2>
        <div className="text-[#5b6278] font-sans    ">
          <div>
            <ul className="md:ml-5 list-disc   grid sm:grid-cols-2 gap-5 ">
              {product?.applications?.applications?.map((usage, index) => {
                return (
                  <li
                    className="flex items-center      bg-[#e8f0fdab] p-2 rounded-md  gap-3"
                    key={index}
                  >
                    <svg
                      className="h-6  w-6 flex-none fill-sky-100 stroke-primary stroke-2 "
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="11" />
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <p className=" text-secondary  text-lg ">{usage}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Applications;
