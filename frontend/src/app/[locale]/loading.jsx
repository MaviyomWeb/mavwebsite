import React from "react";

const Loading = () => {
  return (
    <div className="preloader h-[calc(100vh-60px)]  964Screen:h-[calc(100vh-120px)] bg-gray-50 grid place-content-center z-[100] transition duration-200">
      <div className="preloader-inner relative">
        <div
          className="animate-spin inline-block w-8 h-8 border-[4px] border-current border-t-transparent text-primary rounded-full "
          role="status"
          aria-label="loading"
        >
          <span className="sr-only text-secondary">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
