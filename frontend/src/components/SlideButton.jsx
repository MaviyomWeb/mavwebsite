import { BiArrowBack } from "react-icons/bi";

const SlideButton = ({ clickHandler, className }) => {
  return (
    <div
      onClick={clickHandler}
      className={`absolute ${className.position}  top-1/2  -translate-y-1/2 w-7  h-7  bg-secondary rounded-full text-white z-10 flex items-center justify-center cursor-pointer hover:opacity-90  `}
    >
      <BiArrowBack className={`text-sm md:text-lg ${className.rotation}`} />
    </div>
  );
};

export default SlideButton;
