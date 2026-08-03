import { TextShimmer } from '@/components/motion-primitives/text-shimmer'
import React, { useState } from 'react'

export default function IpuResult() {
    const sem = ['Over all', 'Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'sem 5', 'sem 6', 'sem 7', 'sem 8', 'sem 9']

    const details = [
        { label: "Enrollment No.", value: '03990302024' },
        { label: "Year of admission", value: 2024 ?? "—" },
        { label: "Institute", value: 'INSTITUTE OF INNOVATION IN TECHNOLOGY & MANAGEMENT' ?? "—", code: '903' },
        { label: "Program", value: 'BACHELOR OF COMPUTER APPLICATIONS' ?? "—", code: '020' },
    ]

    const semMarks = [
        { label: "marks", value: 8972, outOf: '/9000', subHead: "Total Marks Obtained in Sem - 3" },
        { label: "sgpa", value: "8.75", subHead: "Semester Grade Point Average" },
        { label: "percentage", value: "87.20", outOf: '%', subHead: "Percentage of Marks Obtained" },
        { label: "total credits", value: 24, subHead: "Total Credits for the Semester" },
    ]

    const subjects = [
        { code: 'BCA-101T', name: 'PROGRAMMING FOR PROBLEM SOLVING USING C', credits: 4, internal: 35, external: 28, total: 63, grade: 'B+' },
        { code: 'BCA-103T', name: 'FUNDAMENTAL OF INFORMATION TECHNOLOGY', credits: 4, internal: 31, external: 37, total: 68, grade: 'A' },
        { code: 'BCA-105T', name: 'WEB TECHNOLOGIES', credits: 4, internal: 38, external: 45, total: 83, grade: 'A+' },
        { code: 'BCA-107T', name: 'MATHEMATICAL FOUNDATION FOR COMPUTER SCIENCE', credits: 4, internal: 37, external: 39, total: 76, grade: 'A+' },
        { code: 'BCA-141T', name: 'WRITING SKILLS', credits: 3, internal: 34, external: 32, total: 66, grade: 'A' },
        { code: 'BCA-191T', name: 'UNDERSTANDING INDIA', credits: 2, internal: '-', external: 75, total: 75, grade: 'A+' },
        { code: 'BCA-101P', name: 'PROGRAMMING FOR PROBLEM SOLVING USING C LAB', credits: 2, internal: 38, external: 56, total: 94, grade: 'O' },
        { code: 'BCA-103P', name: 'FUNDAMENTAL OF INFORMATION TECHNOLOGY LAB', credits: 2, internal: 32, external: 52, total: 84, grade: 'A+' },
        { code: 'BCA-105P', name: 'WEB TECHNOLOGIES LAB', credits: 1, internal: 39, external: 51, total: 90, grade: 'O' },
    ]

    const gridCols = "grid-cols-[140px_1fr_90px_95px_95px_90px_90px]"
    const gradeColor = (g) => "text-white/70"

    const theme = ['#000', '#EC61AC', '#4DA2FF', '#55DB9C', '#FFD731', '#42152D']

    const [bg, setBg] = useState('#000')

    return (
        <div className='w-full px-4 min-h-full flex md:items-center md:justify-center bg-bg'>

            <div className='borde fixed top-20 right-2 md:right-4 z-99999999 flex flex-col gap-1'>
                {theme.map((item, i) => (
                    <div on onClick={() => setBg(item)} key={i} style={{ backgroundColor: item }} className='border nth-[1]:border-white/30 border-black rounded-full h-4 w-4 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'></div>
                ))}
            </div>

            <div className="fixed w-full h-full top-0 left-0 transition-all ease-in-out duration-700" style={{ background: `linear-gradient(to bottom, ${bg || '#333'}, #333)` }}></div>
            <div className='fixed w-full h-full top-0 left-0 backdrop-blur-xl z-9999'></div>


            <div className="md:w-7xl py-30 flex flex-col gap-8 md:gap-10 relative z-99999 borde w-full">

                <div className='flex justify-between items-center w-full md:hidden'>
                    <div className='border justify-center rounded-full backdrop-blur-xs p-3 pr-4 py-1 border-border-20 bg-muted-bg font-dot flex items-center gap-2 md:-3'>
                        <i class="ph ph-arrow-left text-md"></i>
                        <h1 className='text-sm'>Logout</h1>
                    </div>

                    <div className='border justify-center rounded-full backdrop-blur-xs p-3 pl-4 py-1 border-border-20 bg-muted-bg font-dot flex items-center gap-2 md:gap-3'>
                        <h1 className='text-sm'>Export PDF</h1>
                        <i className="ph ph-caret-down text-md"></i>
                    </div>
                </div>

                <div className='flex md:items-center md:justify-between'>
                    <h1 className='text-5xl md:text-6xl font-dot font-bold uppercase'>Yash Singh Bisht</h1>

                    <div className='md:flex items-center gap-2 flex-col w-36 hidden mr-16'>
                        <div className='border w-full justify-center rounded-full p-3 pr-4 py-1 border-border-10 bg-muted-bg font-dot flex items-center gap-3'>
                            <i class="ph ph-arrow-left text-lg"></i>
                            <h1>Logout</h1>
                        </div>

                        <div className='border w-full justify-center rounded-full p-3 pl-4 py-1 border-border-10 bg-muted-bg font-dot flex items-center gap-3'>
                            <h1>Export PDF</h1>
                            <i className="ph ph-caret-down text-lg"></i>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-between gap-6 w-full'>

                    <div className='flex flex-col justify-between gap-6 md:gap-10 w-full'>
                        <div className='w-full grid grid-cols-2 gap-4 md:gap-3'>
                            {details.map((item, i) => (
                                <div key={item.label ?? i} className='flex flex-col gap-1 md:gap-0.5'>
                                    <h1 className='text-sm md:text-md font-dot text-muted-text uppercase'>{item.label}</h1>
                                    <div className='flex'>
                                        <span className='text-sm leading-3.5 md:text-lg tracking-tight md:leading-5 uppercase'>{item.value}
                                            {item.code && (
                                                <span className='text-[1vh] backdrop-blur-xs md:text-xs ml-2 md:ml-3 rounded-full border-border-10 md:border-border-20 tracking-wider font-dot text-muted-text uppercase border p-1.5 py-0.5 md:p-2 md:py-1'>
                                                    {item.code}
                                                </span>
                                            )}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='flex gap-2 flex-wrap w-full mt-3 md:mt-0'>
                            {sem.map((item, i) => (
                                <div className='border w-fit border-border-10 p-1 px-2 md:p-1.5 rounded-xl backdrop-blur-xs md:px-3 cursor-pointer relative z-9999999 bg-muted-bg hover:scale-106 transition-all ease-in-out duration-300'>
                                    <h1 className='text-xs md:text-sm font-dot uppercase tracking-wide whitespace-nowrap'>{item}</h1>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='borde lg:flex flex-col items-center w-80 hidden'>
                        <h1 className='text-2xl font-dot pb-3'>Cumulative GPA</h1>
                        <TextShimmer className="text-9xl font-bold font-dot" duration={2}>9.39</TextShimmer>
                        <h1 className='text-sm font-dot pb-3'>Out of 10.00</h1>
                    </div>
                </div>

                <div className='borde flex flex-col items-center w-full md:hidden '>
                    <h1 className='text-xl font-dot pb-3'>Cumulative GPA</h1>
                    <TextShimmer className="text-9xl font-bold font-dot" duration={2}>9.39</TextShimmer>
                    <h1 className='text-md font-dot pb-3'>Out of 10.00</h1>
                </div>

                {/* details */}
                <div className='md:flex grid grid-cols-2 md:gap-4 gap-2 md:mt-6 relative'>
                    {/* <img className="w-12 sm:w-16 md:w-24 lg:w-40 aspect-square shrink-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden" src="/trail-images/3.png" /> */}
                    {/* <div className="w-5 backdrop-blur-xs sm:w-16 md:w-24 lg:w-40 aspect-square shrink-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden bg-white/10 rounded-full" ></div> */}
                    {semMarks.map((item) => (
                        <div
                            key={item.label}
                            className="nth-[2]:rounded-tr-none nth-[3]:rounded-bl-none nth-[4]:rounded-br-none nth-[1]:rounded-tl-none w-full flex flex-col p-4 justify-center gap-1 items-center border border-border-10 rounded-3xl backdrop-blur-xs py-4 bg-muted-bg overflow-hidden">
                            <p className="text-muted-text text-xs md:text-sm uppercase pb-2">{item.label}</p>
                            <h1 className="text-5xl md:text-7xl font-bold uppercase font-dot">
                                {item.value}
                                {item.outOf && (
                                    <span className='text-sm md:text-2xl text-muted-text font-normal'>{item.outOf}</span>
                                )}
                            </h1>
                            <p className="text-muted-text text-xs md:text-sm pt-2 leading-3.5">{item.subHead}</p>
                        </div>
                    ))}
                </div>

                {/* 
                <div className='border'>
                    <div className='flex items-center justify-between pb-6'>
                        <div className='w-full flex items-center justify-between px-4'>
                            <h1 className="font-bold text-3xl">Semester - Detailed Results</h1>
                            <p className="text-white/50 text-xs pt-1 leading-3">Showing all {subjects.length} subjects</p>
                        </div>
                    </div>
                    <div className="w-full h-full overflow-hidden rounded-3xl border border-border-10">
                        <div className={`grid  ${gridCols} border-b border-border-10 text-text w-full font-bold text-sm uppercase`}>
                            <div className="text-left py-3 px-6">PAPER CODE</div>
                            <div className="text-left py-3 px-4">SUBJECT</div>
                            <div className="text-center py-3 px-2">CREDITS</div>
                            <div className="text-center py-3 px-2">INTERNAL</div>
                            <div className="text-center py-3 px-2">EXTERNAL</div>
                            <div className="text-center py-3 px-2">TOTAL</div>
                            <div className="text-center py-3 px-2">GRADE</div>
                        </div>

                        {subjects.map((item) => (
                            <div key={item.code} className={`grid ${gridCols} group w-full text-sm text-muted-text border-b last:border-0 border-border-10 hover:bg-border/50`}>
                                <div className="text-left py-3 px-8 text-white/70">{item.code}</div>
                                <div className="text-left py-3 px-4 truncate text-white uppercase group-hover:font-bold">{item.name}</div>
                                <div className="text-center py-3 px-2">{item.credits}</div>
                                <div className="text-center py-3 px-2">{item.internal}</div>
                                <div className="text-center py-3 px-2">{item.external}</div>
                                <div className="text-center py-3 px-2 font-semibold text-white">{item.total}</div>
                                <div className={`text-center py-3 px-2 font-bold ${gradeColor(item.grade)}`}>{item.grade}</div>
                            </div>
                        ))}
                    </div>
                </div>
 */}






                {/* MArksheet */}
                {/* <div className='border border-border-10 rounded-4xl p-8 bg-muted-bg'>
                    <div className='flex items-center justify-between pb-6'>
                        <div className='w-full flex items-center justify-between px-4'>
                            <h1 className="font-bold text-3xl">Semester - Detailed Results</h1>
                            <p className="text-white/50 text-xs pt-1 leading-3">Showing all {subjects.length} subjects</p>
                        </div>
                    </div>
                    <div className="w-full h-full overflow-hidden rounded-3xl border border-border-10">
                        <div className={`grid  ${gridCols} border-b border-border-10 text-text w-full font-bold text-sm uppercase`}>
                            <div className="text-left py-3 px-6">PAPER CODE</div>
                            <div className="text-left py-3 px-4">SUBJECT</div>
                            <div className="text-center py-3 px-2">CREDITS</div>
                            <div className="text-center py-3 px-2">INTERNAL</div>
                            <div className="text-center py-3 px-2">EXTERNAL</div>
                            <div className="text-center py-3 px-2">TOTAL</div>
                            <div className="text-center py-3 px-2">GRADE</div>
                        </div>

                        {subjects.map((item) => (
                            <div key={item.code} className={`grid ${gridCols} group w-full text-sm text-muted-text border-b last:border-0 border-border-10 hover:bg-border/50`}>
                                <div className="text-left py-3 px-8 text-white/70">{item.code}</div>
                                <div className="text-left py-3 px-4 truncate text-white uppercase group-hover:font-bold">{item.name}</div>
                                <div className="text-center py-3 px-2">{item.credits}</div>
                                <div className="text-center py-3 px-2">{item.internal}</div>
                                <div className="text-center py-3 px-2">{item.external}</div>
                                <div className="text-center py-3 px-2 font-semibold text-white">{item.total}</div>
                                <div className={`text-center py-3 px-2 font-bold ${gradeColor(item.grade)}`}>{item.grade}</div>
                            </div>
                        ))}
                    </div>
                </div> */}

                <div className='flex flex-col gap-2'>

                    <div className='flex items-center justify-between pb-4'>
                        <div className='w-full flex flex-col'>
                            <h1 className="font-bold text-3xl">Semester - Detailed Results</h1>
                            <p className="text-white/50 text-xs leading-3">Showing all {subjects.length} subjects</p>
                        </div>
                    </div>

                    {subjects.map((item) => (

                        <div className='border border-border-10 rounded-2xl p-3 px-4 bg-muted-bg backdrop-blur-xs'>
                            <div className='flex justify-between gap-4'>
                                <h1 className="text-sm text-text leading-4">{item.name}</h1>
                                <h1 className="text-[1.2vh] h-5 mb-1 shrink-0 flex items-center justify-center text-muted-text border border-border-10 w-fit rounded-full px-2 p-0.5 backdrop-blur-xs ">{item.code}</h1>
                            </div>

                            <div className='flex gap-4 pt-2'>
                                <div className='flex items-center gap-1'>
                                    <h1 className="text-xs text-muted-text uppercase">INT:</h1>
                                    <h1 className="text-xs text-text leading-4">{item.internal}</h1>
                                </div>

                                <div className='flex items-center gap-1'>
                                    <h1 className="text-xs text-muted-text uppercase">Ext:</h1>
                                    <h1 className="text-xs text-text leading-4">{item.external}</h1>
                                </div>

                                <div className='flex items-center gap-1'>
                                    <h1 className="text-xs text-muted-text uppercase">Total:</h1>
                                    <h1 className="text-xs text-text leading-4">{item.total}</h1>
                                </div>

                                <div className='flex items-center gap-1'>
                                    <h1 className="text-xs text-muted-text uppercase">Credits:</h1>
                                    <h1 className="text-xs text-text leading-4">{item.credits}</h1>
                                </div>

                                <div className='flex items-center gap-1'>
                                    <h1 className="text-xs text-muted-text uppercase">Grade:</h1>
                                    <h1 className="text-xs text-text leading-4">{item.grade}</h1>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}
