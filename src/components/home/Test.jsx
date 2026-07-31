import React from 'react'

export default function Test() {
    return (
        <div className='w-full min-h-screen bg-black relative z-99 px-20 flex items-cente justify-center pt-40'>

            <div className='borde min-h-screen w-7xl'>

                <div className='flex items-center justify-between'>
                    <div className='border border-border-10 rounded-2xl px-3 pr-4 flex items-center p-2 bg-blue-800 gap-2'>
                        <i className="ph ph-arrow-left text-xl"></i>
                        <h1 className="text-md font-bold">Logout</h1>
                    </div>

                    <div className='border border-border-10 rounded-2xl px-3 pr-4 flex items-center p-2 bg-blue-800 gap-2'>
                        <i className="ph ph-arrow-left text-xl"></i>
                        <h1 className="text-md font-bold">Logout</h1>
                        <i className="ph ph-caret-down text-muted-text"></i>
                    </div>
                </div>

            </div>
        </div>
    )
}
