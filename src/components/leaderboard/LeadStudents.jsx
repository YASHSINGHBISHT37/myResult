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

    return (
        <div className='md:w-6xl flex flex-col gap-3'>
            <div className=" flex items-center gap-3">
                {/* Search */}
                <div className='border border-border-10 rounded-full bg-muted-bg h-12 items-center flex px-5 w-full gap-2'>
                    <i className="ph ph-magnifying-glass text-lg"></i>
                    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className='text-text text-sm dark:text-text w-full outline-0' placeholder='Search by Name / Enrollment Number' />
                </div>

                <div className='flex items-center justify-center gap-3 border border-border-10 h-12 rounded-2xl px-4 bg-bg-20'>
                    <div className='flex items-center gap-1'>
                        <GradText text={filteredLeaderboard.length} size={1.6} />
                        <h1 className='text-muted-text text-sm'>Students</h1>
                    </div>

                    <div className='flex items-center gap-1 border-l border-border-20 pl-3'>
                        <GradText text={leaderboard.length} size={1.6} />
                        <h1 className='text-muted-text text-sm'>Total</h1>
                    </div>
                </div>
            </div>

            {filteredLeaderboard.length === 0 && (
                <div className='flex flex-col items-center mt-20 gap-3'>
                    <Error size='11' />
                    <h1 className="font-bold text-4xl text-center bg-linear-to-tr to-white from-[#333] bg-clip-text text-transparent">No Studend Found.</h1>
                </div>
            )}

            <Accordion className='flex w-full flex-col gap-2'>
                {filteredLeaderboard.map((student, i) => (
                    <AccordionItem
                        key={student.enrollmentNo}
                        value={student.enrollmentNo}
                        className='border rounded-3xl border-border-10 bg-bg-20 w-full p-4 pb-0 pr-5 text-text flex flex-col cursor-pointer '>

                        <AccordionTrigger className='w-full h-full flex items-center justify-between cursor-pointer mb-4'>
                            <div className='flex items-center gap-3 md:gap-4'>
                                <div className='flex items-center gap-2'>
                                    <div className='h-9 w-9 md:h-10 md:w-10 font-bold text-2xl text-muted-text flex items-center justify-center borde border-border rounded-full shrink-0'>
                                        {student.rank}
                                    </div>
                                    <div className='h-10 w-10 md:h-12 md:w-12 flex items-center justify-center borde border-border rounded-full overflow-hidden shrink-0'>
                                        <LogoAni size={5} />
                                    </div>
                                </div>
                                <div className='w-full text-left'>
                                    <div className='flex items-center gap-3'>
                                        <h1 className='text-base md:text-xl font-bold'>{student.name}</h1>
                                        {/* <GradText size={2.5} text={student.name} /> */}

                                        <div className='flex items-center gap-1 p-0.5 px-2 bg-bg text-xs text-muted-text border border-border-10 rounded-full'>
                                            <p className='text-xs text-muted-text'>Batch 2024-28</p>
                                        </div>

                                    </div>

                                    <div className='flex items-center gap-3 md:gap-4 mt-1'>
                                        <div className='flex items-center gap-1 text-xs text-muted-text'>
                                            <i className="ph ph-building-apartment"></i>
                                            <p className='text-xs text-muted-text'>IITM</p>
                                        </div>

                                        <div className='flex items-center gap-1 text-xs text-muted-text'>
                                            <i className="ph ph-graduation-cap"></i>
                                            <p className='text-xs text-muted-text'>BCA</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='text-right shrink-0'>
                                <GradText size={4.3} text={student.gpa} />
                                <p className='text-xs text-muted-text'>SGPA</p>
                            </div>
                        </AccordionTrigger>

                        <AccordionContent>
                            <div className='w-full border-t border-border-10 grid grid-cols-2 md:grid-cols-4 gap-4 py-4 pl-10'>
                                {stdDetail(student).map((item, j) => (
                                    <div key={j} className='flex flex-col gap- text-muted-text'>
                                        <p className='text-xs text-muted-text uppercase'>{item.name}</p>
                                        <p className='text-sm md:text-md text-text uppercase'>
                                            {item.name === 'Rank' ? `#${item.sub} of ${leaderboard.length}` : item.sub}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}