import ReactDOM from "react-dom";
import SecNavbar from "../navbar/SecNavbar";
import Spliter from "../utils/Spliter";
import { useState } from "react";
import Toman from "../utils/Toman";

const StyledEllipse5 = {
    boxShadow: "0px 0px 13px rgba(0, 0, 0, 0.60) inset",
};

const size = [
    {
        id: 1,
        name: 'کوچک',
        icon: '/svg/esp.svg'
    },
    {
        id: 2,
        name: 'متوسط',
        icon: '/svg/esp.svg'
    },
    {
        id: 3,
        name: 'بزرگ',
        icon: '/svg/esp.svg'
    }
]

const SizeCoffeeItems = ({ title, icon, active, onclick }) => {
    return (
        <div onClick={onclick} className={`flex flex-1 justify-center items-center gap-2 py-2 rounded-full drop-shadow-md cursor-pointer ${active ? "bg-mysecondary text-white" : "bg-white text-mysecondary"}`}>
            <div>
                <img src={icon} className={`w-6 h-6 ${active && 'invert'}`} alt="" />
            </div>
            <h3 className='font-black pt-1'>
                {title}
            </h3>
        </div>
    )
}

const SizeCoffee = () => {
    const [activeCat, setActiveCat] = useState(0);
    return (
        <div className=' mt-2 '>
            <Spliter title={"اندازه کاپ"} />
            <div className='overflow-x-auto touch-auto no-scrollbar py-2 flex gap-3 px-6 w-full'>
                {size.map((cat, index) => {
                    return (
                        <SizeCoffeeItems onclick={() => setActiveCat(index)} title={cat.name} icon={cat.icon} active={index === activeCat} />
                    )
                })}
            </div>
        </div>
    )
}

const lines = [
    {
        id: 1,
        name: '60/40 عربیکا',
        icon: '/svg/esp.svg'
    },
    {
        id: 2,
        name: '70/30',
        icon: '/svg/esp.svg'
    },
    {
        id: 3,
        name: '50/50',
        icon: '/svg/esp.svg'
    },
    {
        id: 3,
        name: '80/20',
        icon: '/svg/esp.svg'
    }

]

const LineCoffeeItems = ({ title, icon, active, onclick }) => {
    return (
        <div onClick={onclick} className={`flex justify-center items-center gap-2 py-2 min-w-32 rounded-full drop-shadow-md cursor-pointer ${active ? "bg-mysecondary text-white" : "bg-white text-mysecondary"}`}>
            <h3 className='font-black pt-1'>
                {title}
            </h3>
        </div>
    )
}

const LineCoffee = () => {
    const [activeCat, setActiveCat] = useState(0);
    return (
        <div className=' mt-2 '>
            <Spliter title={"لاین قهوه"} />
            <div className='overflow-x-auto touch-auto no-scrollbar py-2 flex gap-3 px-6'>
                {lines.map((cat, index) => {
                    return (
                        <LineCoffeeItems onclick={() => setActiveCat(index)} title={cat.name} icon={cat.icon} active={index === activeCat} />
                    )
                })}
            </div>
        </div>
    )
}




const ProductInfo = ({ product, onClose }) => {
    return ReactDOM.createPortal(
        <div className="w-full h-screen bg-myback fixed inset-0 z-50 py-5">
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
                <h2 className="text-myhardbrown text-4xl font-black">{product.title}</h2>
                <h5>{product.detail}</h5>
            </div>
            <SizeCoffee />
            <LineCoffee />
            <div className="flex justify-between items-center w-full px-10 pt-6">
                <div className="flex justify-center items-center">
                    <Toman size={30}/>
                    <h3 className="text-4xl font-black text-myhardbrown pt-1">{product.price}</h3>
                </div>

            </div>
        </div>
        , document.getElementById("modal-root")
    );
};


export default ProductInfo