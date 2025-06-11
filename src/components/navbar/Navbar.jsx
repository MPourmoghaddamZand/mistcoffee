import React from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartProvider";

const Navbar = () => {
  const { totalQuantity } = useCartContext();
  return (
    <nav className="fixed top-0 bg-myback z-50 w-full h-24 flex items-center justify-between px-7 text-myprimary">
      <div className="relative">
        <FiShoppingCart size={30} />
        {totalQuantity > 0 && (
          <div className="absolute top-0 -right-2 w-4 h-4 text-xs pt-[3px] bg-myaccent text-myhardbrown border-2 border-myhardbrown flex justify-center items-center rounded-full font-[700]">
            {totalQuantity}
          </div>
        )}
      </div>
      <div className="">
        <h1 className=" font-trajan text-4xl font-semibold">Mist Cafe</h1>
      </div>
      <Link to="/search">
        <div>
          <FiSearch size={30} />
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
