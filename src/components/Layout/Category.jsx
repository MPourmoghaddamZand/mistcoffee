import React from 'react'
import { BsCupHotFill } from 'react-icons/bs'
const Line = () => {
    return (
        <div className='h-[1px] w-full bg-myhardbrown' />
    )
}
const Spliter = ({ title }) => {
    return (
        <div className='flex w-full justify-center items-center'>
            <Line />
            <div className='px-3'>
                <h2 className='text-myhardbrown text-lg text-nowrap font-black'>{title}</h2>
            </div>
            <Line />
        </div>
    )
}
const CategoryItems = ({ title, Icon, active }) => {
    return (
        <div className={`flex justify-center items-center gap-2 min-w-36 py-2 rounded-full drop-shadow-md ${active ? "bg-mysecondary text-white" : "bg-white text-mysecondary"}`}>
            <div>
                {Icon}
            </div>
            <h3 className='font-black pt-1'>
                {title}
            </h3>
        </div>
    )
}


const Category = () => {
    return (
        <div className=' mt-8 '>
            <Spliter title={"دسته بندی"} />
            <div className='overflow-x-auto touch-auto no-scrollbar  py-2 flex gap-3 px-6'>
                <CategoryItems title={"اسپرسو"} Icon={<BsCupHotFill size={30} />} active />
                <CategoryItems title={"اسپرسو"} Icon={<BsCupHotFill size={30} />} />
                <CategoryItems title={"اسپرسو"} Icon={<BsCupHotFill size={30} />} />
                <CategoryItems title={"اسپرسو"} Icon={<BsCupHotFill size={30} />} />
            </div>
        </div>
    )
}

export default Category