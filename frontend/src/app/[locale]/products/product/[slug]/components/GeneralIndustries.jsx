import React from "react";

const GeneralIndustries = () => {
  return (
    <div className=" md:mt-10 ">
      <div className="grid justify-center sm:grid-cols-2 xl:grid-cols-3 gap-12">
        {Array(6)
          .fill(1)
          .map((_, index) => {
            return (
              <div
                className="w-full max-w-[300px] rounded-md shadow-md"
                key={index}
              >
                <img
                  src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                  alt="Laptop"
                  className=" w-full rounded-md object-cover"
                />
                <div className="p-5">
                  <h3 className="text-[17px] text-text-primary  font-semibold">
                    Forest Tracking – Surveillance – Detection
                  </h3>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GeneralIndustries;
