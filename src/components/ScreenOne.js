import React from 'react'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const ScreenOne = () => {
    return (
        <div className='flex bg-slate-800 text-white px-20 items-center justify-between h-[99vh] border-2' >
            <div className="flex flex-col font-poppins gap-y-5">
                <span className='text-[50px]'>Classic Watch Series</span>
                <span className='text-[35px]'>Explore World's best Watches</span>
                <div className="flex gap-x-3">
                    <button className='rounded-full px-7 border-2 border-white p-2'><RocketLaunchIcon/>Explore</button>
                    <button className='rounded-full px-7 border-2 border-white p-2'><LocalMallIcon/>Buy Now</button>

                </div>
            </div>
            <div className=" relative">
                <img src="/images/watchone.png" alt="" className='h-[470px] w-auto  border-2 border-red-700 watch absolute' />
            </div>


        </div>
    )
}

export default ScreenOne