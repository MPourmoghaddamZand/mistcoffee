import React from "react";

const Input = ({ placeholder }) => {
  return (
    <input
      className="text-center py-4 rounded-full w-10/12 m-auto border-2 border-[#aaa]"
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;
