import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <div className='bg-black text-white font-poppins flex justify-between px-20 p-4'>
        <div className="flex">
          <img src="/images/logo.png" alt="" className='h-12' />
        </div>
        <div className="flex items-center  gap-x-36 font-medium text-[18px] ">
          <span>HOME</span>
          <span>TEAM</span>
          <span>CATEGORIES</span>
          <span>NEW LAUCNES</span>
        </div>
        <div className="flex font-poppins">
          <button className='rounded-full border-2 border-white px-6'><ShoppingCartIcon/> BUY WATCH</button>
        </div>
    </div>
  )
}

export default Navbar