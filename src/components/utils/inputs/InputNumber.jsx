import React, { useState } from "react";
import { FaCircle, FaShoppingCart } from "react-icons/fa";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

const InputNumber = () => {
  const [value, setValue] = useState(0);

  const handleChange = (change) => {
    if (change === "plus") {
      setValue((prev) => prev + 1);
    } else if (value > 0 && change === "minus") {
      setValue((prev) => prev - 1);
    }
  };

  return (
    <div className="p-3 drop-shadow-lg px-5 rounded-full flex  items-center justify-between gap-5 bg-white">
      <FaCirclePlus
        size={36}
        color="#B67C47"
        onClick={() => handleChange("plus")}
      />
      <div>
        <p className="text-4xl pt-1 font-black">{value}</p>
      </div>
      <FaCircleMinus size={36} onClick={() => handleChange("minus")} />
    </div>
  );
};

export default InputNumber;
