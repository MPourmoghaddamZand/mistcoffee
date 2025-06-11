import { useEffect, useState } from "react";
import Category from "../components/Layout/Category";
import Hero from "../components/Layout/Hero";
import Reward from "../components/Layout/Reward";
import Product from "../components/Layout/Product";
import Navbar from "../components/navbar/Navbar";
import { useNavbarContext } from "../context/NavbarProvider";

const Menu = () => {
  return (
    <div className="w-full min-h-screen h-full bg-myback relative">
      <Navbar />
      <div className="mt-28 ">{/* space */}</div>
      <Reward />
      <Hero />
      <Category />
      <Product />
      {/* <div class="fixed w-full bottom-0 h-48 bg-gradient-to-t from-myhardbrown/70 to-pink-500/0 z-10 backdrop-blur-lg"></div> */}
      <div class="fixed w-full -bottom-4 h-48 backdrop-blur-xl bg-black/70 mask-gradient"></div>
      <div className="h-28" />
    </div>
  );
};

export default Menu;
