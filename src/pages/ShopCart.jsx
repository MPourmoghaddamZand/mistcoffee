// مسیر: pages/ShopCart.jsx (یا مسیر دلخواه)
import React from "react";
import SecNavbar from "../components/navbar/SecNavbar";
import InputLable from "../components/utils/inputs/InputLable";
import { useCartContext } from "../context/CartProvider";
import { FaShoppingCart } from "react-icons/fa";
import Button from "../components/utils/buttons/Button";
import CartItem from "../components/Layout/CartItems";
import Toman from "../components/utils/Toman";
import { Link } from "react-router-dom";
import { formatPersianPrice } from "../utils/formatPrice";

const ShopCart = () => {
  const { cart, totalQuantity, totalPrice } = useCartContext();
  return (
    <div className="flex flex-col justify-between py-5 w-full h-screen max-h-full">
      <SecNavbar title={"سبد خرید"} />
      {cart.length === 0 ? (
        <div className="w-full flex gap-5 flex-col justify-center items-center h-full">
          <FaShoppingCart size={108} />
          <p className="text-3xl">سبد خرید شما خالی است</p>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-4 p-4 h-full w-full">
            <div className="flex flex-col gap-2 h-full overflow-y-auto">
              {cart.map((product, index) => (
                <CartItem key={index} product={product} cart={cart} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-7 justify-center items-center fixed bottom-0 w-full py-5 bg-myback">
            <div className="flex w-full justify-around items-center">
              {" "}
              <div className="flex justify-center items-center">
                <Toman size={32} />
                <h2 className="text-4xl text-myprimary font-black">
                  {formatPersianPrice(totalPrice)}
                </h2>
              </div>
              <h2 className="text-4xl text-myprimary font-black">
                قیمت پایانی
              </h2>
            </div>
            <Link className="w-full" to={"/checkout"}>
              <Button className="text-2xl"> تکمیل سفارش</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ShopCart;
