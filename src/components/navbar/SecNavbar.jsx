import React from 'react'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const SecNavbar = ({ title, path = '/menu', onClose ,invert}) => {
    return (
        <nav className='grid grid-cols-3 place-items-center' onClick={(onClose ? onClose : undefined)}>
            <div>
                <Link to={path}>
                    <IoArrowBackCircleOutline size={50} color={(invert ? 'white' : undefined)}/>
                </Link>
            </div>
            <div>
                <h2 className={`text-2xl font-black pt-1 text-nowrap ${(invert ? 'text-white' : undefined) }`}>
                    {title}
                </h2>
            </div>
            <div className='flex-grow'>{ /* Grow */}</div>
        </nav>
    )
}

export default SecNavbar