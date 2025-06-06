import React from 'react'
import esp from '/images/esp.png'
import Button from '../utils/buttons/Button'



const ProductBox = ({ title, detil, img, price }) => {
    return (
        <div className='bg-mysecondary p-1 rounded-[32px] relative'>
            <div className='flex flex-col justify-center items-center bg-myprimary round p-4 text-center'>
                <div className='w-3/5 drop-shadow-[0px_0px_2px_#000] bg-white rounded-full p-2 absolute -top-10'>
                    <img className='aspect-square' src={img} alt="" />
                </div>
                <div className='pt-[6vh]'> {/* Space */} </div>
                <div>
                    <h2 className='text-mybase font-black text-2xl'>{title}</h2>
                    <h4 className='text-white/60 text-sm'>{detil}</h4>
                </div>
                <div className='w-full'>
                    <h3 className='text-mybase font-semibold text-2xl'>{price}</h3>
                    <Button className='!py-1'>Add to cart</Button>
                </div>
            </div>
        </div>
    )
}


const Product = () => {
    return (
        <div className='grid grid-cols-2 gap-5 gap-y-12 p-5 pt-20'>
            {[0, 1, 2, 3].map((item, index) => {
                return (
                    <ProductBox
                        title={"item1"}
                        detil={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                        price={90000}
                        img={'/images/esp.png'}
                    />
                )
            })}
        </div>
    )
}

export default Product