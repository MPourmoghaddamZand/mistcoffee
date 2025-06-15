import React, { useState } from "react";
import SecNavbar from "../components/navbar/SecNavbar";
import InputLable from "../components/utils/inputs/InputLable";
import Button from "../components/utils/buttons/Button";
import Toman from "../components/utils/Toman";
import { useCartContext } from "../context/CartProvider";
import { formatPersianPrice } from "../utils/formatPrice";
import { Link } from "react-router-dom";

// کامپوننت نمایش پیش‌نمایش سبد خرید
const CartPreview = ({ cart }) => {
  const displayItems = cart.slice(0, 2); // فقط 2 آیتم اول
  const remainingCount = cart.length - 2; // باقی آیتم‌ها

  return (
    <Link to="/shopcart">
      <div className="bg-gradient-to-r from-myprimary/10 to-mysecondary/10 rounded-2xl p-3 border-2 border-myprimary/20 hover:border-mysecondary/40 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg">
        <div className="flex items-center justify-between">
          {/* تصاویر محصولات */}
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {displayItems.map((item, index) => (
                <div
                  key={`${item.id}-${item.size?.id}-${item.line?.id}-${index}`}
                  className="w-12 h-12 rounded-full border-3 border-white shadow-lg overflow-hidden bg-white"
                  style={{ zIndex: displayItems.length - index }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* نمایش تعداد باقی‌مانده */}
            {remainingCount > 0 && (
              <div className="w-12 h-12 rounded-full bg-mysecondary text-white flex items-center justify-center text-2xl font-bold shadow-lg border-2 border-myprimary -ml-2">
                +{remainingCount}
              </div>
            )}
          </div>

          {/* متن و دکمه */}
          <div className="flex flex-col items-end text-right">
            <span className="text-xl text-myprimary font-bold">
              مشاهده سبد خرید
            </span>
          </div>

          {/* آیکون فلش */}
          <div className="text-mysecondary">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

// کامپوننت داخلی برای انتخاب روش پرداخت
const PaymentOptions = () => {
  const [selectedPayment, setSelectedPayment] = useState("online");
  const { totalPrice, cart } = useCartContext();
  const paymentMethods = [
    {
      id: "online",
      title: "پرداخت آنلاین",
      description: "پرداخت از طریق درگاه بانکی",
      icon: "💳",
    },
    {
      id: "cash",
      title: "پرداخت نقدی",
      description: "پرداخت در محل",
      icon: "💵",
    },
  ];
  return (
    <div className="h-full flex flex-col bg-white rounded-t-3xl mx-4 shadow-lg border border-myprimary/10">
      {/* محتوای بدون اسکرول */}
      <div className="flex-1 p-4">
        {/* انتخاب روش پرداخت */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-myprimary mb-3 text-right">
            روش پرداخت را انتخاب کنید
          </h3>
          <div className="space-y-2">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                onClick={() => setSelectedPayment(method.id)}
                className={`p-2.5 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  selectedPayment === method.id
                    ? "border-mysecondary bg-myaccent/20"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-lg">{method.icon}</div>
                    <div className="text-right">
                      <h4 className="font-bold text-myprimary text-sm">
                        {method.title}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {method.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      selectedPayment === method.id
                        ? "border-mysecondary bg-mysecondary"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedPayment === method.id && (
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* خلاصه سفارش */}
        <div className="border-t border-gray-200 pt-3">
          <h3 className="text-base font-bold text-myprimary mb-2 text-right">
            خلاصه سفارش
          </h3>
          <div className="space-y-2">
            {/* پیش‌نمایش سبد خرید */}
            {cart.length > 0 && <CartPreview cart={cart} />}

            

            <div className="flex justify-between items-center py-2 border-t border-gray-100 bg-myaccent/10 rounded-lg px-3">
              <div className="flex items-center gap-2">
                <Toman size={24} />
                <span className="text-4xl font-black text-mysecondary">
                  {formatPersianPrice(totalPrice)}
                </span>
              </div>
              <span className="font-black text-myprimary text-base dirr">
                مجموع کل:
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* دکمه پرداخت - ثابت در پایین */}
      <div className="flex-shrink-0 p-4 border-t border-gray-100 bg-white rounded-b-3xl">
        <Button
          className="!w-full !bg-mysecondary hover:!bg-myprimary transition-colors duration-200 !py-2.5 "
          onClick={() => {
            // اینجا بعداً به صفحه پرداخت وصل می‌شود
            console.log("Selected payment method:", selectedPayment);
            console.log("Total price:", totalPrice);
          }}
        >
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl font-bold"
            >
              {'تکمیل سفارش و خرید'}
              </span>
          </div>
        </Button>
      </div>
    </div>
  );
};

const Checkout = () => {
  return (
    <div className="w-full h-screen bg-myback flex flex-col overflow-hidden">
      {/* Header - ثابت در بالا */}
      <div className="flex-shrink-0 py-5">
        <SecNavbar title={"مرحله پرداخت"} path="/shopcart" />
      </div>

      {/* محتوای قابل اسکرول */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* فرم اطلاعات - بخش بالایی */}
        <div className="flex-shrink-0 px-4 pb-4">
          <div className="flex flex-col gap-2">
            <InputLable
              title={"شماره میز"}
              placeholder={"شماره میز خود را وارد کنید"}
              className="!py-2 border-1 border-myprimary/50 shadow-md"
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

        {/* کامپوننت انتخاب روش پرداخت - باقی فضا */}
        <div className="flex-1 overflow-hidden">
          <PaymentOptions />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
