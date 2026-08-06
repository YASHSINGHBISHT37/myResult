import React, { useMemo, useState } from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/motion-primitives/accordion'
import LogoAni from '@/components/ui/LogoAni'
import GradText from '@/components/ui/GradText'
import Error from '../ui/Error'

const leaderboard = [
    { enrollmentNo: "03990302024", name: "Yash Singh Bisht", marks: "8202 / 8600", gpa: 8.43, percentage: "95.37%", total: 8202, rank: 1 },
    { enrollmentNo: "03990302018", name: "Aarav Sharma", marks: "8168 / 8600", gpa: 8.39, percentage: "94.98%", total: 8168, rank: 2 },
    { enrollmentNo: "03990302011", name: "Priya Verma", marks: "8145 / 8600", gpa: 8.36, percentage: "94.71%", total: 8145, rank: 3 },
    { enrollmentNo: "03990302005", name: "Rohan Gupta", marks: "8096 / 8600", gpa: 8.31, percentage: "94.14%", total: 8096, rank: 4 },
    { enrollmentNo: "03990302033", name: "Ananya Singh", marks: "8048 / 8600", gpa: 8.26, percentage: "93.58%", total: 8048, rank: 5 },
    { enrollmentNo: "03990302041", name: "Harsh Mehta", marks: "8012 / 8600", gpa: 8.22, percentage: "93.16%", total: 8012, rank: 6 },
    { enrollmentNo: "03990302007", name: "Neha Kapoor", marks: "7975 / 8600", gpa: 8.18, percentage: "92.73%", total: 7975, rank: 7 },
    { enrollmentNo: "03990302029", name: "Aditya Kumar", marks: "7928 / 8600", gpa: 8.13, percentage: "92.19%", total: 7928, rank: 8 },
    { enrollmentNo: "03990302015", name: "Simran Kaur", marks: "7885 / 8600", gpa: 8.08, percentage: "91.69%", total: 7885, rank: 9 },
    { enrollmentNo: "03990302038", name: "Rahul Yadav", marks: "7836 / 8600", gpa: 8.02, percentage: "91.12%", total: 7836, rank: 10 },
]

const stdDetail = (student) => [
    { name: 'Enrollment', sub: student.enrollmentNo },
    { name: 'College', sub: 'IITM' },
    { name: 'Branch', sub: 'BCA' },
    { name: 'Marks', sub: student.marks },
    { name: 'Percentage', sub: student.percentage },
    { name: 'Rank', sub: student.rank },
]

export default function LeadStudents() {
    const [query, setQuery] = useState('')

    const filteredLeaderboard = useMemo(() => {
        const q = query.trim().toLowerCase()
        if (!q) return leaderboard

        return leaderboard.filter(
            (student) =>
                student.name.toLowerCase().includes(q) ||
                student.enrollmentNo.toLowerCase().includes(q)
        )
    }, [query])

    const profileImg = {
        boy: [1, 2, 3, 4, 5, 6],
        girl: [1, 2, 3, 4, 5],
    }

    const [profile, setProfile] = useState()

    return (
        <div className='md:w-6xl w-full flex flex-col gap-3'>

            {/* Search */}
            <div className=" flex items-center gap-3 h-10">
                <div className='border border-border-10 rounded-full h-12 items-center flex px-4 w-full gap-2 backdrop-blur-xs bg-bg/20 mb-4'>
                    <i className="ph ph-magnifying-glass text-xl"></i>
                    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className='text-text text-xs dark:text-text w-full outline-0' placeholder='Search by Name / Enrollment Number' />
                </div>
            </div>

            <div onClick={() => setProfile(false)} className=' border border-border-10 fixed bg-bg backdrop-blur-xs bottom-2 z-9 right-2 rounded-3xl px-3 p-2'>
                <h1 className='text-xs font-dot'>Change Profile</h1>
            </div>

            <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg/80 w-full h-full z-9 flex items-end justify-center p-4
                ${profile === false ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

                <div className={`border border-border-20 rounded-4xl backdrop-blur-3xl w-full p-5 px-6 flex flex-col gap-3 relative
                ${profile === true ? 'bottom-100' : 'bottom-0'}`}>
                    <i onClick={() => setProfile(false)} className="ph ph-x text-muted-text text-2xl absolute top-4 right-4 active:scale-80 transition-all ease-in-out duration-200" />
                    <div>
                        <h1 className='font-dot font-bold text-3xl'>Change Profile</h1>
                        <p className='text-righ text-xs text-muted-text tracking-tight'>You can Change it Once.</p>
                    </div>
                    <div>
                        <h1 className='text-xl font-dot uppercase pb-1'>boy</h1>
                        <div className='grid grid-cols-6'>
                            {profileImg.boy.map((item, i) => (
                                <div key={i} className='border border-border-20 bg-white p-1 rounded-full w-11 h-11 flex items-center justify-center active:scale-80 transition-all ease-in-out duration-200'>
                                    <img className='w-full h-full' src={`/profile/boy-${item}.png`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h1 className='text-xl font-dot uppercase pb-1'>Girl</h1>
                        <div className='grid grid-cols-6'>
                            {profileImg.girl.map((item, i) => (
                                <div key={i} className='border border-border-20 bg-white p-1 rounded-full w-11 h-11 flex items-center justify-center active:scale-80 transition-all ease-in-out duration-200'>
                                    <img className='w-full h-full' src={`/profile/girl-${item}.png`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <Accordion className='flex w-full flex-col gap-1'>
                {filteredLeaderboard.map((student, i) => (
                    <AccordionItem
                        key={student.enrollmentNo}
                        value={student.enrollmentNo}
                        className='border border-border-10 flex flex-col justify-center w-full h-full backdrop-blur-xs bg-bg/40 rounded-3xl px-4 py-3 pb-0 pl-5'>

                        <AccordionTrigger className='w-full h-full flex items-center justify-between cursor-pointer mb-3'>
                            <div className='flex items-center gap-3'>

                                {/* Rank + Profile */}
                                <div className='flex items-center gap-4'>
                                    <h1 className='text-lg font-dot font-bold bor'> {i + 1}</h1>
                                    <div className='border border-border-20 bg-white p-1 rounded-full w-11 h-11 flex items-center justify-center'>
                                        <img className='w-full h-full' src="/profile/boy-1.png" />
                                    </div>
                                </div>

                                {/* Name */}
                                <div className='flex flex-col '>
                                    <div>
                                        <h1 className='font-bold uppercase font-dot text-md'>{student.name}</h1>
                                    </div>

                                    <div className='flex gap-2 items-center'>
                                        <h1 className='text-xs text-muted-text tracking-tighter'>IITM</h1>
                                        <div className='border-r border-muted-text h-3'></div>
                                        <h1 className='text-xs text-muted-text tracking-tighter'>BCA</h1>
                                    </div>
                                </div>
                            </div>

                            {/* SGPA */}
                            <div>
                                <h1 className='text-xl md:text-3xl font-dot font-bold '>9.39</h1>
                                <p className='text-xs tracking-tighter text-muted-text'>SGPA</p>
                            </div>
                        </AccordionTrigger>

                        <AccordionContent>
                            <div className='w-full border-t border-border-10 grid grid-cols-3 md:grid-cols-4 gap-4 pl-4 md:gap-2 py-4 md:pl-10'>
                                {stdDetail(student).map((item, j) => (
                                    <div key={j} className='flex flex-col gap- text-muted-text'>
                                        <p className='text-xs text-muted-text uppercase font-dot'>{item.name}</p>
                                        <p className='text-sm md:text-md text-text uppercase tracking-tighter'>
                                            {item.name === 'Rank' ? `#${item.sub} of ${leaderboard.length}` : item.sub}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </AccordionContent>

                    </AccordionItem>
                ))}
            </Accordion>
        </div >
    )
}