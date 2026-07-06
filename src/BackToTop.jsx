import React from 'react'

export default function BackToTop() {
    return (
        <div className='fixed bottom-4 right-4'>
            <div className='rounded-full z-999 border border-white/40 p-4 w-12 h-12 flex items-center justify-center cursor-pointer text-black shadow-lg hover:scale-110 transition-transform ease-in-out duration-200 bg-linear-to-tr from-black to-white'>
                <i className="ph ph-arrow-up text-xl text-white"></i>
            </div>
        </div>
    )
}