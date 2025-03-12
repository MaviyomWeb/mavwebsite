import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-[89%] xl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto">
      {children}
    </div>
  );
};

export default Container;
