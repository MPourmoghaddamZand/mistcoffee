// مسیر: components/utils/CartItem.jsx
import React, { useEffect, useState } from 'react';
import InputNumber from '../utils/inputs/InputNumber';

const CartItem = ({ product, cart }) => {
    const initialQuantity = cart.find((item) => item.id === product.id)?.quantity || 0;
    const [quantity, setQuantity] = useState(initialQuantity);

    useEffect(() => {
        const updatedQty = cart.find((item) => item.id === product.id)?.quantity || 0;
        setQuantity(updatedQty);
    }, [cart, product.id]);

    return (
        <div className="flex bg-white rounded-lg p-4 text-center shadow">
            <div className='flex gap-2 justify-between'>
                <div>
                    <img src={product.img} alt={product.title} />
                </div>
                <p>{product.price}</p>
            </div>
            <div>
                <h2>{product.title}</h2>
                <InputNumber value={quantity} setValue={setQuantity} product={product} />
            </div>
        </div>
    );
};

export default CartItem;
