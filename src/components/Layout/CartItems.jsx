// مسیر: components/utils/CartItem.jsx
import React, { useEffect, useState } from "react";
import InputNumber from "../utils/inputs/InputNumber";
import Toman from "../utils/Toman";
import CircleProduct, { StyledEllipse5 } from "../utils/CircleProduct";

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
    <div className="w-full flex bg-white rounded-3xl drop-shadow-xl p-4 place-items-center">
      <div
        style={StyledEllipse5}
        className="w-1/6 max-w-[140px] drop-shadow-[0px_0px_2px_#000] bg-white rounded-full grow min-w-[50px]"
      >
        <img className="rounded-full" src={product.img} alt="" />
      </div>
      <div className="grow h-full flex flex-col justify-around items-center">
        <div className="text-right dirr">
          <p className="text-xs">اندازه قهوه : {product.size?.name}</p>
          <p className="text-xs">لاین قهوه: {product.line?.name}</p>
        </div>
        <div>
          <div className="flex justify-center h-full items-center">
            <Toman size={20} />
            <h3 className=" text-3xl font-black text-myhardbrown pt-1 self-start w-full ">
              {product.price}
            </h3>
          </div>
        </div>
      </div>
      <div className="text-right grow flex flex-col justify-around h-full items-center">
        <h2 className="font-black self-end pr-2 text-myprimary text-2xl">
          {product.title}
        </h2>
        <InputNumber
          value={quantity}
          setValue={setQuantity}
          product={product}
          iconSize={30}
          className="!px-2 !p-0 drop-shadow-none"
          textSize="3xl"
        />
      </div>
    </div>
  );
};

export default CartItem;
