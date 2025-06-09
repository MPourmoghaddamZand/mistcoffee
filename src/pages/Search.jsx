import React from 'react'
import SecNavbar from '../components/navbar/SecNavbar'
import Input from '../components/utils/Inputs/Input'
import { BiSearch } from 'react-icons/bi'
import { FaFilter } from 'react-icons/fa'
import Product, { ProductSearch } from '../components/Layout/Product'



const SearchInput = () => {
    return (
        <div className='flex flex-row-reverse justify-center items-center px-5'>
            <Input className='h-12' icon={<BiSearch size={30} />} />
            <div className='w-12 h-12 flex justify-center items-center rounded-full bg-mysecondary'>
                <FaFilter color='white' size={20} />
            </div>
        </div>
    )
}


const Search = () => {
    return (
        <div className='w-full h-full flex flex-col gap-5 min-h-screen py-5 bg-myback'>
            <SecNavbar title={'جستوجو'} path={'/menu'} />
            <SearchInput />
            <ProductSearch/>
        </div>
    )
}

export default Search