import React, { useState } from "react";
import { FaCircle, FaShoppingCart } from "react-icons/fa";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { useCartContext } from "../../../context/CartProvider";

const InputNumber = ({ value, setValue, product, className = "" }) => {
  const { addProduct, removeProduct } = useCartContext();
  const handleChange = (change) => {
    if (change === "plus") {
      setValue((prev) => prev + 1);
      addProduct(product, 1);
    } else if (value > 0 && change === "minus") {
      setValue((prev) => prev - 1);
      // اگر مقدار جدید صفر شد، آیتم را حذف کن
        removeProduct(product);
    }
  };

  return (
    <div
      className={`p-2 drop-shadow-lg px-5 rounded-full flex  items-center justify-between gap-5 bg-white ${className}`}
    >
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
