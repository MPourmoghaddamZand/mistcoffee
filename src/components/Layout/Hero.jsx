import React from "react";
import cup from "/images/cup.png"; // Adjusted image path
import { CiLocationArrow1 } from "react-icons/ci";
import { BiLocationPlus } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const LocationDetail = () => {
  return (
    <div className="flex flex-row-reverse items-center gap-2 text-white">
      <FaLocationDot color="white" size={24} />
      <p className="text-xs">ستار خان انتهای ولی عصر </p>
    </div>
  );
};

const Hero = () => {
  return (
    <header className="mt-8">
      <div className="w-10/12 m-auto bg-hero-cafe bg-cover bg-center bg-blend-overlay bg-black/70 h-48 rounded-3xl relative">
        <div className="absolute -top-5 -left-7 rotate-[-40deg]">
          <img className="" src={cup} alt="Cup" />
        </div>
        <div className="flex flex-col gap-2 text-right items-end px-4 ">
          <h1 className="text-5xl font-black pt-6 text-white">کافه میست</h1>
          <p className="text-lg text-white text-right">
            طعم خوب را با ما تجربه کن
          </p>
          <LocationDetail />
          <LocationDetail />
        </div>
      </div>
    </header>
  );
};

export default Hero;
