import React from 'react'
import { FiSearch, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
    return (
        <nav className='w-full h-24 flex items-center justify-between px-7 text-myprimary'>
            <div>
                <FiShoppingCart size={30} />
            </div>
            <div className=''>
                <h1 className=' font-trajan text-4xl font-semibold'>Mist Cafe</h1>
            </div>
            <div>
                <FiSearch size={30} />
            </div>
        </nav>
    )
}

export default Navbar