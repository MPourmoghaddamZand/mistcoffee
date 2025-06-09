import React from 'react'
import { CiCoffeeCup } from 'react-icons/ci'
import { TiTick } from 'react-icons/ti'


const Item = ({ active, key }) => {
    return (
        <>
            <div key={key} className={`w-10 h-10 center bg-myneutral rounded-full relative ${active ? "" : "opacity-20"}`}>
                <CiCoffeeCup size={30} />
                {active &&
                    <div className='absolute w-4 h-4 flex justify-center items-center bg-green-500 rounded-full bottom-0 right-0'>
                        <TiTick size={14} />
                    </div>
                }
            </div>
        </>
    )
}

const Reward = () => {
    return (
        <div className='w-full'>
            <div className='w-11/12 flex bg-myprimary m-auto rounded-3xl drop-shadow-lg'>
                <div className='flex gap-3 p-2'>
                    {
                        [1, 2, 3, 4].map((index) => {
                            return (
                                <Item active={index === 1} key={index} />
                            )
                        })
                    }

                </div>
                <div className='w-full grid place-content-center rounded-3xl bg-mysecondary' >
                    <h3 className='text-white font-black text-lg'>جایزتو پر کن</h3>
                </div>
            </div>
        </div>
    )
}

export default Reward