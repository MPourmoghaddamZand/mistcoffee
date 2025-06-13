// مسیر: components/utils/CartItem.jsx
import React, { useEffect, useState } from "react";
import InputNumber from "../utils/inputs/InputNumber";

const CartItem = ({ product, cart }) => {
  // مقدار quantity را بر اساس ترکیب دقیق ویژگی‌ها پیدا کن
  const initialQuantity =
    cart.find(
      (item) =>
        item.id === product.id &&
        item.size?.id === product.size?.id &&
        item.line?.id === product.line?.id &&
        item.syrup?.id === product.syrup?.id
    )?.quantity || 0;
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    const updatedQty =
      cart.find(
        (item) =>
          item.id === product.id &&
          item.size?.id === product.size?.id &&
          item.line?.id === product.line?.id &&
          item.syrup?.id === product.syrup?.id
      )?.quantity || 0;
    setQuantity(updatedQty);
  }, [cart, product.id, product.size, product.line, product.syrup]);

  return (
    <div className="w-full grid grid-cols-3 bg-white">
      <div className="">
        <img src={product.img} alt="" />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default CartItem;
