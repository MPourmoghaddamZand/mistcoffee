import React, { useState } from 'react'
import category from '../../data/categorys.json'
import Spliter from '../utils/Spliter'

const CategoryItems = ({ title, icon, active , onclick }) => {
    return (
        <div onClick={onclick} className={`flex justify-center items-center gap-2 min-w-36 py-2 rounded-full drop-shadow-md cursor-pointer ${active ? "bg-mysecondary text-white" : "bg-white text-mysecondary"}`}>
            <div>
                <img src={icon} className={`w-6 h-6 ${active && 'invert'}`} alt="" />
            </div>
            <h3 className='font-black pt-1'>
                {title}
            </h3>
        </div>
    )
}


const Category = () => {
    const [activeCat, setActiveCat] = useState(0);
    return (
        <div className=' mt-8 '>
            <Spliter title={"دسته بندی"} />
            <div className='overflow-x-auto touch-auto no-scrollbar  py-2 flex gap-3 px-6'>
                {category.map((cat, index) => {
                    return (
                        <CategoryItems onclick={()=> setActiveCat(index)} title={cat.name} icon={cat.icon} active={index === activeCat} />
                    )
                })}
            </div>
        </div>
    )
}

export default Category