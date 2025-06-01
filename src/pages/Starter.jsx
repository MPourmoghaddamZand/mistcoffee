import React from 'react'

const NameSection = () => {
    return (
        <div className='relative'>
            <h1 className='font-[Pinar] font-black text-myprimary text-[54px] leading-[50px] text-center'>
                کافـــه
                <br />
                میست
            </h1>
            <h1 className='font-trajan font-black absolute -top-2 left-1/2 -translate-x-1/2 text-myprimary opacity-30 leading-[50px] text-[54px]'>
                Mist
                <br />
                Cafe
            </h1>
        </div>
    )
}

const Starter = () => {
    return (
        <div className='w-full h-screen bg-myaccent'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <NameSection />
            </div>
        </div>
    )
}

export default Starter