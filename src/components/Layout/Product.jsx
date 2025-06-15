import React, { useState } from "react";
import esp from "/images/esp.png";
import Button from "../utils/buttons/Button";
import Toman from "../utils/Toman";
import ProductsInfo from "./ProductInfo";
import productList from "../../data/products.json";
import { useCartContext } from "../../context/CartProvider";
import InputNumber from "../utils/inputs/InputNumber";
import CircleProduct, { StyledEllipse5 } from "../utils/CircleProduct";
import { formatPersianPrice } from "../../utils/formatPrice";

const linierGradient =
  "linear-gradient(215deg, #513623 50%, #6A4A34 80%, #6F4E37 100%)";
const linierbackground = "linear-gradient(216deg, #FFB673 0%, #372112 100%)";

const ProductBox = ({ title, detail, img, price }) => {
  return (
    <div className="bg-myprimary p-[3px] rounded-[32px] relative">
      <div className="bg-myhardbrown flex flex-col justify-between items-center round p-4 text-center h-64">
        <CircleProduct>
          <img className="aspect-square" src={img} alt="" />
        </CircleProduct>
        <div className="pt-[9vh]"> {/* Space */} </div>
        <div>
          <h2 className="text-mybase font-black text-2xl">{title}</h2>
          <h4 className="text-white/60 text-sm pt-1">{detail}</h4>
        </div>{" "}
        <div className="w-full">
          <div>
            <h3 className="text-mybase font-semibold text-2xl">
              {formatPersianPrice(price)}
            </h3>
          </div>
          <Button className="!py-1 !px-2 w-full"> افزودن به سبد خرید </Button>
        </div>
      </div>
    </div>
  );
};

const ProductBoxVertical = ({ product, onClick }) => {
  const { cart } = useCartContext();
  const initialQuantity = cart
    .filter((item) => item.id === product.id)
    .reduce((sum, item) => sum + (item.quantity || 0), 0);
  const [quantity, setQuantity] = useState(initialQuantity);
  return (
    <div
      className="bg-myprimary p-[3px] rounded-[32px] relative"
      onClick={onClick}
    >
      <div className="bg-myhardbrown flex flex-col justify-between items-center round p-4 text-right">
        <div className="flex w-full">
          <div className="w-full drop-shadow-[0px_0px_2px_#000] relative ">
            <img
              style={StyledEllipse5}
              className="w-10/12 max-w-[140px] p-1 bg-white rounded-full absolute -top-[58px]"
              src={product.img}
              alt=""
            />
          </div>
          <div className="text-white w-full flex flex-col gap-2">
            <h1 className="text-3xl font-black">{product.title}</h1>
            <h4 className="text-[#888]">{product.detail}</h4>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-5 mt-4">
          {" "}
          <div className="flex gap-1 pl-2 pt-2 justify-center items-center">
            <Toman />
            <h3 className="text-myneutral font-bold text-4xl">
              {formatPersianPrice(product.sizes[0]?.price || product.price)}
            </h3>
          </div>
          <Button className="!py-2 !w-1/2 mr-0 flex flex-row-reverse justify-center items-center gap-2">
            {"افزودن به سبد خرید"}
            {quantity > 0 && (
              <div className="w-6 h-6 flex pt-[2px] justify-center items-center bg-myprimary rounded-full">
                {quantity}
              </div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <>
      {selectedProduct ? (
        <ProductsInfo
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      ) : (
        <div className="flex flex-col gap-12 p-5 pt-10">
          {productList.map((product, index) => {
            return (
              <ProductBoxVertical
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export const ProductSearch = () => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-14 p-3 pt-10 flex-1">
        {" "}
        {productList
          .filter((_, index) => index % 2 === 0) // ایندکس‌های زوج
          .map((product, index) => (
            <ProductBox
              key={product.id}
              title={product.title}
              detail={product.detail}
              price={formatPersianPrice(product.price)}
              img={product.img}
            />
          ))}
      </div>
      <div className="flex flex-col gap-14 p-3 pt-10 mt-20 flex-1">
        {" "}
        {productList
          .filter((_, index) => index % 2 === 1) // ایندکس‌های فرد
          .map((product, index) => (
            <ProductBox
              key={product.id}
              title={product.title}
              detail={product.detail}
              price={formatPersianPrice(product.price)}
              img={product.img}
            />
          ))}
      </div>
    </div>
  );
};

export default Product;
