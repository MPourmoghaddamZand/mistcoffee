import React from 'react'


const Navbar = () => {
  return (
    <nav className='w-full h-24 flex items-center justify-between px-4'>
        <div></div>
        <div></div>
        <div></div>
    </nav>
  )
}

const Menu = () => {
  return (
    <div className='w-full min-h-screen h-full bg-myback'>
      <Navbar />
    </div>
  )
}

export default Menu