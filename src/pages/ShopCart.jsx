// مسیر: pages/ShopCart.jsx (یا مسیر دلخواه)
import React from 'react';
import SecNavbar from '../components/navbar/SecNavbar';
import InputLable from '../components/utils/inputs/InputLable';
import { useCartContext } from '../context/CartProvider';
import { FaShoppingCart } from 'react-icons/fa';
import Button from '../components/utils/buttons/Button';
import CartItem from '../components/Layout/CartItems';



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
                    <div className='flex flex-col gap-2 h-full overflow-y-auto'>
                        {cart.map((product, index) => (
                            <CartItem key={index} product={product} cart={cart} />
                        ))}
                    </div>
                    <div className='fixed bottom-0 w-full bg-myback'>
                        
                        <Button>پرداخت و تکمیل سفارش</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShopCart;
