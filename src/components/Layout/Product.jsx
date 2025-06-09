import React from "react";
import esp from "/images/esp.png";
import Button from "../utils/buttons/Button";

const linierGradient =
  "linear-gradient(215deg, #513623 50%, #6A4A34 80%, #6F4E37 100%)";
const linierbackground = "linear-gradient(216deg, #FFB673 0%, #372112 100%)";
const StyledEllipse5 = {
  boxShadow: "0px 0px 13px rgba(0, 0, 0, 0.60) inset",
};

const ProductBox = ({ title, detil, img, price }) => {
  return (
    <div style={{ background: linierbackground }} className=" p-[3px] rounded-[32px] relative">
      <div style={{ background: linierGradient }} className="flex flex-col justify-center items-center  round p-4 text-center">
        <div style={StyledEllipse5} className="w-3/5 drop-shadow-[0px_0px_2px_#000] bg-white rounded-full p-2 absolute -top-10">
          <img className="aspect-square" src={img} alt="" />
        </div>
        <div className="pt-[6vh]"> {/* Space */} </div>
        <div>
          <h2 className="text-mybase font-black text-2xl">{title}</h2>
          <h4 className="text-white/60 text-sm">{detil}</h4>
        </div>
        <div className="w-full">
          <h3 className="text-mybase font-semibold text-2xl">{price}</h3>
          <Button className="!py-1">Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

const Product = () => {
  return (
    <div className="grid grid-cols-2 gap-5 gap-y-12 p-5 pt-20">
      {[0, 1, 2, 3].map((item, index) => {
        return (
          <ProductBox
            title={"item1"}
            detil={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            price={90000}
            img={"/images/esp.png"}
          />
        );
      })}
    </div>
  );
};

export const ProductSearch = () => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-14 p-3 pt-10">
        {[0, 1, 2, 3].map((item, index) => {
          return (
            <ProductBox
              title={"item1"}
              detil={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
              price={90000}
              img={"/images/esp.png"}
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-14 p-3 pt-10 mt-20">
        {[0, 1, 2, 3].map((item, index) => {
          return (
            <ProductBox
              title={"item2"}
              detil={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
              price={90000}
              img={"/images/esp.png"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Product;
