
import React, { useState } from 'react';
import { FaInfinity } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
function CryptoCard({ mnemonic, showcard, setShowcard }) {
    const words = mnemonic.split(" "); // Split the mnemonic string into an array of words
    return (
        <>
            {
                showcard ? (
                    <div className='bg-gradient-to-r from-blue-500 to-purple-600 w-96 h-56 rounded-xl p-6 pt-4 shadow-lg relative text-white select-none'>

                        <div className='flex justify-between '>
                            <div className='flex justify-between text-black  items-center m-0 '>

                                <div>
                                    <FaInfinity />
                                </div>

                                <div className=' text-lg font-semibold ml-2'>
                                    CryptoCard
                                </div>

                            </div>

                            <div className='text-black text-2xl flex justify-center items-center   w-10 h-6 bg-yellow-300 rounded-sm' onClick={() => setShowcard(prev => !prev)}>
                                <IoIosEye />
                            </div>
                        </div>

                        <div className='grid grid-cols-4 gap-4 mt-5 '>
                            {words.map((word, index) => (
                                <div key={index} className='bg-black bg-opacity-20 p-2 rounded-md text-center text-xs'>
                                    {word}
                                </div>
                            ))}
                        </div>

                        <div className=' text-xs italic font-mono text-black flex flex-row-reverse mt-1 '>
                            VALID FOR LIFETIME
                        </div>
                    </div>
                ) : (
                    <div className='bg-gradient-to-r from-blue-500 to-purple-600 w-96 h-56 rounded-xl p-6 pt-4 shadow-lg relative text-white select-none'>

                        <div className='flex justify-between '>
                            <div className='flex justify-between text-black  items-center m-0 '>

                                <div>
                                    <FaInfinity />
                                </div>

                                <div className=' text-lg font-semibold ml-2'>
                                    CryptoCard
                                </div>

                            </div>

                            <div className='text-black text-2xl flex justify-center items-center  w-10 h-6 bg-yellow-300 rounded-sm' onClick={() => setShowcard(prev => !prev)}>
                                <IoIosEyeOff />
                            </div>
                        </div>

                        <div className=' text-xs text-black font-mono font-thin my-5 p-2 leading-5 rounded-xl'>
                            keep this 12 word somewhere safe, it can be used to backup all your crypto wallets!
                        </div>

                        <div className='bg-black h-10 my-4 mx-0 px-0 mt-5'>

                        </div>

                        <div className=' text-xs italic font-mono text-black flex flex-row-reverse mt-1 '>
                            VALID FOR LIFETIME
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default CryptoCard;
