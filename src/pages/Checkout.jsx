import React from "react";
import SecNavbar from "../components/navbar/SecNavbar";
import InputLable from "../components/utils/inputs/InputLable";





const Checkout = () => {
  return (
    <div className="w-full h-screen bg-myback py-5">
      <SecNavbar title={"مرحله پرداخت"} path="/shopcart" />
      <div className="flex flex-col gap-2">
        <InputLable
          title={"شماره میز"}
          placeholder={"شماره میز خود را وارد کنید"}
          className="!py-2 border-1 border-myprimary/50  shadow-md"
        />
        <InputLable
          title={"نام و نام خانوادگی"}
          placeholder={"نام و نام خانوادگی خود را وارد کنید"}
          className="!py-2 border-1 border-myprimary/50 shadow-md"
        />
        <InputLable
          title={"توضیحات (اختیاری)"}
          placeholder={"توضیحات سفارش را وارد کنید"}
          className="!py-2 border-1 border-myprimary/50 shadow-md"
        />
      </div>
    </div>
  );
};

export default Checkout;
