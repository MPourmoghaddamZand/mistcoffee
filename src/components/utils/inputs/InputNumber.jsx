import React, { useState } from "react";
import { FaCircle, FaShoppingCart } from "react-icons/fa";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { useCartContext } from "../../../context/CartProvider";
import { toPersianDigits } from "../../../utils/formatPrice";

const InputNumber = ({
  value,
  setValue,
  product,
  className = "",
  iconSize = 36,
  textSize = "3xl",
}) => {
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
        size={iconSize}
        color="#B67C47"
        onClick={() => handleChange("plus")}
      />{" "}
      <div>
        <p className={`text-${textSize} pt-1 font-black text-center w-6`}>
          {toPersianDigits(value)}
        </p>
      </div>
      <FaCircleMinus size={iconSize} onClick={() => handleChange("minus")} />
    </div>
  );
};
export default InputNumber;
