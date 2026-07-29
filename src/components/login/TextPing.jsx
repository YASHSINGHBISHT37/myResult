import React from 'react'

export default function TextPing() {
    return (
        <div className='absolute left-0 top-0 w-full h-full md:flex items-center justify-center hidden overflow-hidden'>
            <span className='text-[50vh] font-bold leading-[40vh] opacity-50 bg-linear-to-tr to-white from-[#333] bg-clip-text text-transparent animate-ping'>RES <br />ULT</span>
            {/* <div className='backdrop-blur-3xl absolute w-full h-full bg-bg/80'></div> */}
        </div>
    )
}
