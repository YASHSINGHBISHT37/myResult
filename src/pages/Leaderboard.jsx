import LogoAni from '@/components/ui/LogoAni'
import LeadStudents from '@/components/leaderboard/LeadStudents'
import React, { useState } from 'react'
import GradText from '@/components/ui/GradText'
import PageTemplate from '@/components/ui/PageTemplate'

export default function Leaderboard() {
    document.title = "Leaderboard - myResult®";

    const gridCols = "grid-cols-[170px_1fr_100px_80px_120px_90px_90px]"

    const options = [
        { name: 'Course', select: 'BCA' },
        { name: 'Branch', select: 'English' },
        { name: 'Batch', select: '2024-2028' },
        { name: 'Semester', select: 'Sem 1' },
    ]


    return (
        <div className='w-full bg-amber-00 h-full py-20 px-4'>
            <div className="fixed w-full h-full top-0 left-0 transition-all ease-in-out duration-700 bg-linear-to-t to-black from-[#333] bg-transparent"></div>

            {/* Heading */}
            <div className="flex flex-col justify-between md:mb-16 lg:mb-20 md:px-10 lg:px-30 z-1 relative mb-20">
                <div className="text-[#ECF1F0] text-[clamp(2.75rem,14vw,9rem)] lg:text-[clamp(10rem,20vh,18rem)] uppercase tracking-tighter font-bold md:ml-4 lg:ml-10">
                    {/* <h2 className="text-sm sm:text-base md:text-lg lg:text-xl tracking-normal text-yellow-500 font-bold capitalize pl-14 sm:pl-8 md:pl-16 lg:pl-30 pb-2 md:pb-6 lg:pb-10">[ # ]</h2> */}

                    <h2 className="leading-none md:leading-tight lg:leading-38">Rank</h2>
                    <h2 className="leading-none md:leading-tight lg:leading-44 tracking-wide md:text-left md:pl-10 lg:pl-50 font-dot text-yellow-500">Leaderboard</h2>
                </div>

                <div className="w-full flex flex-col items-end md:gap-4 md:px-4 lg:px-10">
                    <p className="text-xs sm:text-sm md:text-base lg:text-xl tracking-tight text-muted-text w-full max-w-[20rem] sm:max-w-xs md:max-w-sm lg:max-w-md mt-4 leading-3.5 md:leading-5 lg:leading-6 text-right">
                        We only take your data when you allow us to take it and this leaderboard show only those student marks who allowed it to show on leaderboard.
                    </p>
                </div>
            </div>


            <div className="flex flex-col items-center gap-4 mt-12 md:mt-20 w-full z-1 relative">

                {/* Select Course, Branch, Batch and Semester. */}
                {/* <div className='w-full md:w-auto flex flex-col gap-6 md:gap-8 border border-border-10 mb-4 rounded-3xl p-4 md:px-10 bg-muted-bg'>

                    <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                        <span className='text-lg md:text-xl text-text font-bold'>Bachelor of Computer Science</span>

                        <div className='flex items-center gap-2 text-xs text-muted-text flex-wrap justify-center md:justify-start'>
                            <span>English</span>
                            <div className='w-1 h-1 rounded-full dark:bg-sec-bg'></div>
                            <span>2024-2028</span>
                            <div className='w-1 h-1 rounded-full dark:bg-sec-bg'></div>
                            <span>Sem 1</span>
                        </div>
                    </div>

                    <div className='w-full flex flex-wrap items-center justify-center gap-4'>

                        {options.map((item, i) => (
                            <div key={i} className='flex flex-col gap-1 cursor-pointer'>
                                <p className='text-muted-text text-xs'>{item.name}:</p>
                                <div className='border-border-10 border p-1 px-3 rounded-lg bg-bg flex items-center gap-4 justify-between'>
                                    <h1 className='text-text text-sm'>{item.select}</h1>
                                    <i className="ph ph-caret-down text-muted-text"></i>
                                </div>
                            </div>
                        ))}

                        <div className='flex items-center gap-2 border-border-20 border px-3 pr-4 p-2 rounded-3xl bg-muted-bg cursor-pointer group'>
                            <LogoAni size={3} />
                            <span className="text-md text-muted-text group-hover:text-[#ffcc00] tracking-tighter transition-all duration-250 ease-in-out">Show</span>
                        </div>
                    </div>
                </div> */}


                <LeadStudents />

            </div>
        </div>
    )
}