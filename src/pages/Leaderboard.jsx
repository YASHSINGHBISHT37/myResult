import LogoAni from '@/components/ui/LogoAni'
import LeadStudents from '@/components/leaderboard/LeadStudents'
import React from 'react'
import GradText from '@/components/ui/GradText'
import PageTemplate from '@/components/ui/PageTemplate'

export default function Leaderboard() {
    const gridCols = "grid-cols-[170px_1fr_100px_80px_120px_90px_90px]"

    const options = [
        { name: 'Course', select: 'BCA' },
        { name: 'Branch', select: 'English' },
        { name: 'Batch', select: '2024-2028' },
        { name: 'Semester', select: 'Sem 1' },
    ]

    return (
        <PageTemplate>
            <div className='flex flex-col gap-2 text-center'>
                <span className='relative'>
                    <span className='text-3xl absolute top-4 right-8 tracking-tighter font-bold text-center bg-linear-to-br from-white via-[#ffcc00] to-[#ffcc00] bg-clip-text text-transparent'>#Rank</span>
                    <h1 style={{ fontSize: '18vh' }} className="font-bold tracking-tighter bg-linear-to-tr leading-46 to-white from-[#333] bg-clip-text text-transparent">Leaderboard</h1>
                </span>

                <p className='text-xs text-muted-text text-center leading-3.5 md:leading-4'>
                    We only take your data when you allow us to take it and <br className='hidden md:block' />
                    this leaderboard show only those student marks who allowed it to show on leaderboard.
                </p>
            </div>


            <div className="flex flex-col items-center gap-4 mt-12 md:mt-20 w-full">

                {/* Select Course, Branch, Batch and Semester. */}
                <div className='w-full md:w-auto flex flex-col gap-6 md:gap-8 border border-border-10 mb-4 rounded-3xl p-4 md:px-10 bg-muted-bg'>

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
                </div>


                <LeadStudents />

            </div>
        </PageTemplate>
    )
}