import { useEffect } from "react";
import Category from "../components/Layout/Category";
import Hero from "../components/Layout/Hero";
import Reward from "../components/Layout/Reward";
import Product from "../components/Layout/Product";
import Navbar from "../components/navbar/Navbar";
import { useNavbarContext } from "../context/NavbarProvider";

const Menu = () => {


  return (
    <div className="w-full min-h-screen h-full bg-myback">
      <Navbar />
      <Reward />
      <Hero />
      <Category />
      <Product />
    </div>
  );
};

export default Menu;
