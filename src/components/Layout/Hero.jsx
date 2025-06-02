import React from 'react'
import cup from '/images/cup.png'; // Adjusted image path

const Hero = () => {
    return (
        <div className='mt-8'>
            <div className='w-10/12 m-auto bg-myhardbrown h-48 rounded-3xl relative'>
                <div className='absolute -top-5 -right-8'>
                    <img className='' src={cup} alt="Cup" />
                </div>
            </div>
        </div>
    )
}

export default Hero