import React from 'react'

export default function Loading() {
    return (
        <div className='w-screen h-screen bg-black z-9999999 fixed top-0 left-0'>

            <div className='w-full h-full flex items-center justify-center'>
                <div className='w-full h-full border-r border-border-10'></div>
                <div className='w-full h-full border-r border-border-10'></div>
                <div className='w-full h-full border-r border-border-10'></div>
                <div className='w-full h-full border-r border-border-10'></div>
                <div className='w-full h-full border-r border-border-10'></div>
            </div>

            <div className="flex flex-col justify-between absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 ">
                    <h1 className="borde w-7xl text-right text-[16vh] uppercase tracking-tighter font-bold text-text">about us
                    </h1>

                </div>
        </div>
    )
}
