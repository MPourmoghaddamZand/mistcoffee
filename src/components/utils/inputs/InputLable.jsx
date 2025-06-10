import React from "react";
import Input from "./Input";

const InputLable = ({ title, placeholder , className="" }) => {
  return (
    <div className="flex flex-col items-end gap-2 w-full">
      <label className="pr-10 font-[700]"> {title} </label>
      <Input placeholder={placeholder} className={className} />
    </div>
  );
};

export default InputLable;
