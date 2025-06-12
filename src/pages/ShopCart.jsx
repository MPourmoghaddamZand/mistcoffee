// مسیر: pages/ShopCart.jsx (یا مسیر دلخواه)
import React from 'react';
import SecNavbar from '../components/navbar/SecNavbar';
import InputLable from '../components/utils/inputs/InputLable';
import { useCartContext } from '../context/CartProvider';
import { FaShoppingCart } from 'react-icons/fa';
import Button from '../components/utils/buttons/Button';
import CartItem from '../components/Layout/CartItems';

const InputForm = () => {
    return (
        <div className='flex flex-col gap-2'>
            <InputLable className='!py-2' title={'شماره میز'} placeholder={'شماره میز را وارد کنید'} />
            <InputLable className='!py-2' title={'نام و نام خانوادگی'} placeholder={'نام و نام خانوادگی خود را وارد کنید'} />
            <InputLable className='!py-2' title={'توضیحات (اختیاری)'} placeholder={'توضیحات سفارش'} />
        </div>
    );
};

const ShopCart = () => {
    const { cart, totalQuantity } = useCartContext();

    return (
        <div className='flex flex-col justify-between py-5 w-full h-screen max-h-full'>
            <SecNavbar title={'سبد خرید'} />

            {cart.length === 0 ? (
                <div className='w-full flex gap-5 flex-col justify-center items-center h-full'>
                    <FaShoppingCart size={108} />
                    <p className='text-3xl'>سبد خرید شما خالی است</p>
                </div>
            ) : (
                <div className="flex flex-col gap-4 p-4 h-full">
                    <InputForm />
                    <div className='flex flex-col gap-2 h-full overflow-y-auto'>
                        {cart.map((product, index) => (
                            <CartItem key={index} product={product} cart={cart} />
                        ))}
                    </div>
                    <div className='fixed bottom-0 w-full bg-myback'>
                        <div className='flex p-5 justify-between px-10 items-center'>
                            <h4>{totalQuantity}</h4>
                            <h4>{totalQuantity}</h4>
                        </div>
                        <Button>پرداخت و تکمیل سفارش</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShopCart;
