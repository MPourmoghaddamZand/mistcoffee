import React from "react";
import SecNavbar from "../components/navbar/SecNavbar";
import Reward from "../components/Layout/Reward";
import InputLable from "../components/utils/inputs/InputLable";

const NumberOfPurchace = ({ number }) => {
  return (
    <div className="p-12 w-full bg-myhardbrown rounded-3xl border-2 border-mybase relative">
      <h3 className="font-black text-center text-mybase text-5xl dirr">
        <span className="font-black text-7xl px-2">
          {"   "}
          {number}{" "}
        </span>
        بار
        <br />
        مهمان ما بودی
      </h3>
      <img
        className="absolute top-0 left-0 w-28 -rotate-45"
        src={"/images/cup.png"}
        alt="Cup"
      />
      <img
        className="absolute -bottom-5 -right-7 w-28"
        src={"/images/cup.png"}
        alt="Cup"
      />
    </div>
  );
};

const Profile = () => {
  return (
    <div className="w-full min-h-screen bg-myback relative py-5 h-screen">
      <SecNavbar title={"پروفایل کاربری"} />
      <div className="w-full m-auto px-5 flex flex-col items-center gap-6">
        <div className="w-24">
          <img src="/ProfImage.png" alt="" />
        </div>
        <InputLable
          title={"نام  و نام خانوادگی"}
          placeholder={"نام کاربری را وارد کنید"}
          className="!py-1"
        />
        <InputLable
          title={"شماره تلفن"}
          placeholder={"شماره خود را وارد کنید"}
          className="!py-1"
        />
        <Reward />
        <NumberOfPurchace number={5} />
      </div>
    </div>
  );
};

export default Profile;
