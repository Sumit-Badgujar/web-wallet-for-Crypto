import React from 'react'
import { FaInfinity } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";

function Navbar() {
    return (
        <div className='px-10 py-5 bg-gradient-to-r from-gray-900 via-purple-900 to-violet-600 w-full h-25 shadow-lg'>
            <div className='flex justify-between items-center gap-4'>
                <div className='flex gap-5 items-center justify-center'>
                    <FaInfinity className='text-white text-5xl p-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-md' />
                    <div className='text-white font-bold italic text-4xl'>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white  via-pink-500 to-purple-500">
                            Crypto-Wallet
                        </span>
                    </div>
                </div>
                <TfiMenu className='text-white text-5xl p-2 hover:text-gray-300 transition duration-300 ease-in-out cursor-pointer' />
            </div>
        </div>
    )
}

export default Navbar;
