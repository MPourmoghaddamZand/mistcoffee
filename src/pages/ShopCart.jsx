import React, { useEffect, useState } from 'react'
import SecNavbar from '../components/navbar/SecNavbar'
import InputLable from '../components/utils/inputs/InputLable'
import { CartContext, useCartContext } from '../context/CartProvider'
import { FaShoppingCart } from 'react-icons/fa'
import InputNumber from '../components/utils/inputs/InputNumber'
import Button from '../components/utils/buttons/Button'


const InputForm = () => {
    return (
        <div className='flex flex-col gap-2'>
            <InputLable className='!py-2' title={'شماره میز'} placeholder={'شماره میز را وارد کنید'} />
            <InputLable className='!py-2' title={'نام و نام خانوادگی'} placeholder={'نام و نام خانوادگی خود را وارد کنید'} />
            <InputLable className='!py-2' title={'توضیحات (اختیاری)'} placeholder={'توضیحات سفارش'} />
        </div>
    )
}


const ShopCart = () => {
    const { cart, totalQuantity } = useCartContext();
    return (
        <div className='flex flex-col justify-between py-5 w-full h-screen max-h-full'>
            <SecNavbar title={'سبد خرید'} />
            {cart.length === 0 ? (
                <>
                    <div className='w-full flex gap-5 flex-col justify-center items-center h-full'>
                        <FaShoppingCart size={108} />
                        <p className='text-3xl'>سبد خرید شما خالی است</p>
                    </div>
                </>
            ) : (
                <div className="flex flex-col gap-4 p-4 h-full">
                    <InputForm />
                    <div className='flex flex-col gap-2 h-full overflow-y-auto'>
                        {cart.map((product, index) => {
                            const initialQuantity =
                                cart.find((item) => item.id === product.id)?.quantity || 0;
                            const [quantity, setQuantity] = useState(initialQuantity);
                            useEffect(() => {
                                const updatedQty =
                                    cart.find((item) => item.id === product.id)?.quantity || 0;
                                setQuantity(updatedQty);
                            }, [cart, product.id]);
                            return (
                                <div key={index} className="flex bg-white rounded-lg p-4 text-center shadow">
                                    <div className='flex gap-2 justify-between'>
                                        <div>
                                            <img src={product.img} alt="" />
                                        </div>
                                        <p>{product.price}</p>
                                    </div>
                                    <div>
                                        <h2>{product.title}</h2>
                                        <InputNumber value={quantity} setValue={setQuantity} product={product} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='fixed bottom-0 w-full  bg-myback'>
                        <div className='flex p-5 justify-between px-10 items-center'>
                            <h4>{totalQuantity}</h4>
                            <h4>{totalQuantity}</h4>
                        </div>
                        <Button>پرداخت و تکمیل سفازش</Button>
                    </div>

                </div>
            )}
        </div>
    )
}

export default ShopCart