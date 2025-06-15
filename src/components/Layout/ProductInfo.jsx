import ReactDOM from "react-dom";
import SecNavbar from "../navbar/SecNavbar";
import Spliter from "../utils/Spliter";
import { useContext, useEffect, useState } from "react";
import Toman from "../utils/Toman";
import InputNumber from "../utils/inputs/InputNumber";
import { FaShoppingCart } from "react-icons/fa";
import Button from "../utils/buttons/Button";
import { CartContext } from "../../context/CartProvider";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import CircleProduct, { StyledEllipse5 } from "../utils/CircleProduct";
import { formatPersianPrice, toPersianDigits } from "../../utils/formatPrice";

const ProductInfo = ({ product, onClose }) => {
  const { cart, totalQuantity } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedLine, setSelectedLine] = useState(product.lines[0]);
  const [selectedSyrup, setSelectedSyrup] = useState(product.syrups[0]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const found = cart.find(
      (item) =>
        item.id === product.id &&
        item.size?.id === selectedSize.id &&
        item.line?.id === selectedLine.id &&
        item.syrup?.id === selectedSyrup.id
    );
    setQuantity(found ? found.quantity : 0);
  }, [cart, product.id, selectedSize, selectedLine, selectedSyrup]);

  // کامپوننت انتخاب سایز
  const SizeCoffee = () => (
    <div className="mt-2">
      <Spliter title={"اندازه کاپ"} />
      <div className="overflow-x-auto touch-auto no-scrollbar py-2 flex gap-3 px-6 w-full">
        {product.sizes.map((cat, index) => (
          <div
            key={cat.id}
            onClick={() => setSelectedSize(cat)}
            className={`flex flex-1 justify-center items-center gap-2 py-2 rounded-full drop-shadow-md cursor-pointer ${
              selectedSize.id === cat.id
                ? "bg-mysecondary text-white"
                : "bg-white text-mysecondary"
            }`}
          >
            <div>
              <img
                src={"/svg/esp.svg"}
                className={`w-6 h-6 ${selectedSize.id === cat.id && "invert"}`}
                alt=""
              />
            </div>
            <h3 className="font-black pt-1">{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );

  // کامپوننت انتخاب لاین
  const LineCoffee = () => (
    <div className="mt-2">
      <Spliter title={"لاین قهوه"} />
      <div className="overflow-x-auto touch-auto no-scrollbar py-2 flex gap-3 px-6">
        {product.lines.map((cat, index) => (
          <div
            key={cat.id}
            onClick={() => setSelectedLine(cat)}
            className={`flex justify-center items-center gap-2 py-2 min-w-32 rounded-full drop-shadow-md cursor-pointer ${
              selectedLine.id === cat.id
                ? "bg-mysecondary text-white"
                : "bg-white text-mysecondary"
            }`}
          >
            <h3 className="font-black pt-1">{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );

  // کامپوننت انتخاب سیروپ
  const SyrupCoffee = () => (
    <div className="mt-2">
      <Spliter title={"سیروپ"} />
      <div className="overflow-x-auto touch-auto no-scrollbar py-2 flex gap-3 px-6">
        {product.syrups.map((cat, index) => (
          <div
            key={cat.id}
            onClick={() => setSelectedSyrup(cat)}
            className={`flex justify-center items-center gap-2 py-2 min-w-32 rounded-full drop-shadow-md cursor-pointer ${
              selectedSyrup.id === cat.id
                ? "bg-mysecondary text-white"
                : "bg-white text-mysecondary"
            }`}
          >
            <h3 className="font-black pt-1">{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    <div className="w-full h-screen flex flex-col justify-between bg-myback fixed inset-0 z-[999] py-5">
      <SecNavbar title={"اطلاعات محصول"} onClose={onClose} invert />
      <div className="w-full bg-myprimary h-60 rounded-b-[40px] absolute top-0 -z-10">
        <div
          style={StyledEllipse5}
          className="w-full max-w-[200px] drop-shadow-[0px_0px_2px_#000] bg-white rounded-full p-2 absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/4"
        >
          <img className="" src={product.img} alt="" />
        </div>
      </div>
      <div className="mt-56"> {/* Space */}</div>
      <div className="flex flex-col justify-end items-end px-10 gap-2 ">
        <h2 className="text-myhardbrown text-4xl font-black">
          {product.title}
        </h2>
        <h5>{product.detail}</h5>
        <div className="text-xs text-gray-500 flex flex-col items-end gap-0.5 mt-2">
          <span>سایز: {selectedSize.name}</span>
          <span>لاین: {selectedLine.name}</span>
          <span>سیروپ: {selectedSyrup.name}</span>
        </div>
      </div>
      <SizeCoffee />
      <LineCoffee />
      <SyrupCoffee />
      <div className="flex justify-between items-center w-full px-10 pt-6">
        {" "}
        <div className="flex justify-center items-center">
          <Toman size={30} />
          <h3 className="text-4xl font-black text-myhardbrown pt-1">
            {formatPersianPrice(selectedSize.price)}
          </h3>
        </div>
        <InputNumber
          value={quantity}
          setValue={setQuantity}
          product={{
            ...product,
            size: selectedSize,
            line: selectedLine,
            syrup: selectedSyrup,
            price: selectedSize.price,
          }}
        />
      </div>
      <div className="flex items-center justify-center gap-2 p-5 drop-shadow-lg">
        <Link className="w-full flex gap-2" to="/shopcart">
          <div className="relative w-14 aspect-square flex justify-center items-center rounded-full bg-mysecondary drop-shadow-lg">
            <FiShoppingCart className="pr-[2px]" size={28} color="white" />{" "}
            {totalQuantity > 0 && (
              <div className="absolute top-3 right-2 w-5 h-5 text-sm pt-[3px] bg-white text-myhardbrown border-2 border-myhardbrown flex justify-center items-center rounded-full font-[700]">
                {toPersianDigits(totalQuantity)}
              </div>
            )}
          </div>
          <Button>مشاهده سبد خرید</Button>
        </Link>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ProductInfo;
