import React from 'react'

function MyButton({ txt, onClick }) {
    return (
        <div>
            <button onClick={onClick}
                className='bg-purple-500 hover:bg-purple-600 px-8 py-4 rounded-[50px] text-xl font-medium text-white select-none'>
                {txt}
            </button>
        </div>
    )
}

export default MyButton