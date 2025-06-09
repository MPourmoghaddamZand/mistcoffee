import React from "react";

const Input = ({ placeholder, className = '', icon }) => {
  return (
    <>
      <div
        className={`flex justify-center items-center gap-2 bg-white text-right px-5 py-4 rounded-full w-10/12 m-auto border-2 border-[#aaa] ${className}`}
      >
        <input
          className="all-unset flex-1 w-full"
          type="text"
          placeholder={placeholder}
          />
          {icon !== undefined && icon}
      </div>
    </>
  );
};

export default Input;
