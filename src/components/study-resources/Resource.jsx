import GradText from '@/components/ui/GradText'
import { Tilt } from '@/components/motion-primitives/tilt'
import { useMemo, useState } from 'react'
import { motion } from "motion/react";
import Error from '../ui/Error';


export default function Resource() {
    const Programs = [
        {
            name: 'Allied Health',
            program: [
                { code: "BPO", name: "Bachelor in Prosthetics and Orthotics" },
                { code: "BASLP", name: "Bachelor of Audiology & Speech Language Pathology" },
                { code: "BOT", name: "Bachelor of Occupational Therapy" },
            ]
        },
        {
            name: 'Architecture',
            program: [
                { code: "BARCH", name: "Bachelor of Architecture" },
                { code: "MARCH", name: "Master of Architecture" },
            ]
        },
        {
            name: 'Arts',
            program: [
                { code: "BA", name: "Bachelor of Arts" },
                { code: "BA-JMC", name: "Bachelor of Arts (Journalism & Mass Communication)" },
                { code: "BA-LLB", name: "Integrated Bachelor of Arts - Bachelor of Laws (Honours)" },
                { code: "MA", name: "Master of Arts" },
                { code: "MA-ENG", name: "Master of Arts (English)" },
            ]
        },
        {
            name: 'Business Administration',
            program: [
                { code: "BBA", name: "Bachelor of Business Administration" },
                { code: "BBA-TTM", name: "Bachelor of Business Administration (Tour & Travel Management)" },
                { code: "BBA-LLB", name: "Integrated BBA LLB (Hons)" },
                { code: "MBA", name: "Master of Business Administration" },
            ]
        },
        {
            name: 'Certificate',
            program: [
                { code: "CERT-ENV", name: "Certificate Courses under School of Environment Management" },
            ]
        },
        {
            name: 'Commerce',
            program: [
                { code: "BCOM", name: "Bachelor of Commerce" },
            ]
        },
        {
            name: 'Computer Applications',
            program: [
                { code: "BCA", name: "Bachelor of Computer Applications" },
                { code: "MCA", name: "Master of Computer Applications" },
            ]
        },
        {
            name: 'Education',
            program: [
                { code: "ITEP", name: "B.A. B.Ed. (Integrated Teacher Education Programme)" },
                { code: "BED", name: "Bachelor of Education" },
                { code: "MED", name: "Master of Education" },
                { code: "PHD-EDU", name: "PhD Education" },
            ]
        },
        {
            name: 'Law',
            program: [
                { code: "LLB", name: "Bachelor of Laws, Three-Year Programme" },
                { code: "LLM-WKD", name: "Master of Laws - Weekend Programme" },
                { code: "LLM", name: "Master of Laws" },
            ]
        },
        {
            name: 'Medicine',
            program: [
                { code: "MBBS", name: "Bachelor of Medicine and Bachelor of Surgery" },
                { code: "MD", name: "Doctor of Medicine" },
                { code: "DM", name: "Doctorate of Medicine" },
            ]
        },
        {
            name: 'Nursing',
            program: [
                { code: "BSC-NUR", name: "Bachelor of Science (Hons) Nursing" },
                { code: "MSC-NUR", name: "M.Sc. Nursing (Medical-Surgical)" },
                { code: "PB-NUR", name: "Post Basic B.Sc. Nursing" },
            ]
        },
        {
            name: 'Pharmacy',
            program: [
                { code: "BPHARM", name: "Bachelor of Pharmacy" },
                { code: "DPHARM", name: "Diploma in Pharmacy" },
                { code: "MPHARM", name: "Master of Pharmacy" },
            ]
        },
        {
            name: 'Research',
            program: [
                { code: "PHD-ITCSE", name: "PhD in IT/CSE/CA/ECE/MAE" },
                { code: "MPHIL", name: "Master of Philosophy" },
                { code: "PHD-CW", name: "Ph.D. Course Work" },
                { code: "PHD-ARCH", name: "PhD Architecture and Planning" },
                { code: "PHD-CHE", name: "PhD Chemical Engineering" },
                { code: "PHD-CHEM", name: "PhD Chemistry" },
                { code: "PHD-DM", name: "PhD Disaster Management" },
                { code: "PHD-ENG", name: "PhD English" },
                { code: "PHD-LAW", name: "PhD Law and Legal Studies" },
                { code: "PHD-MGMT", name: "PhD Management Studies" },
                { code: "PHD-MC", name: "PhD Mass Communication" },
                { code: "PHD-MATH", name: "PhD Mathematics" },
                { code: "PHD-PCHEM", name: "PhD Pharmaceutical Chemistry" },
                { code: "PHD-PHY", name: "PhD Physics" },
            ]
        },
        {
            name: 'Planning',
            program: [
                { code: "MPLAN", name: "Master of Planning" },
            ]
        },
        {
            name: 'Post Graduate Diploma',
            program: [
                { code: "PGD-DA", name: "Post Graduate Diploma in Data Analytics" },
                { code: "PGD-ESU", name: "Post Graduate Diploma in Entrepreneurship and Start-Up" },
                { code: "PGD-ER", name: "Post Graduate Diploma in Equity Research" },
                { code: "PGD-FLSA", name: "Post Graduate Diploma in Fire and Life Safety Audit" },
                { code: "PGD-HCM", name: "Post Graduate Diploma in Health Care Management" },
            ]
        },
        {
            name: 'Diploma',
            program: [
                { code: "ADCGC", name: "Advanced Diploma in Child Guidance and Counselling" },
                { code: "DIP-FR", name: "Diploma in French" },
                { code: "DIP-JP", name: "Diploma in Japanese" },
            ]
        },
        {
            name: 'Science',
            program: [
                { code: "BSC", name: "Bachelor of Science" },
                { code: "BSC-MSC", name: "Bachelor of Science / Master of Science" },
                { code: "MSC", name: "Master of Science" },
                { code: "PHD-ENV", name: "PhD Environmental Sciences" },
            ]
        },
        {
            name: 'Surgery',
            program: [
                { code: "BDS", name: "Bachelor of Dental Surgery" },
                { code: "MCH-PRS", name: "Magister Chirurgiae - Plastic and Reconstructive Surgery" },
                { code: "MS", name: "Master of Surgery" },
            ]
        },
        {
            name: 'Technology',
            program: [
                { code: "BTECH", name: "Bachelor of Technology" },
                { code: "BTECH-MTECH", name: "Bachelor of Technology / Master of Technology" },
                { code: "MTECH", name: "Master of Technology" },
                { code: "PHD-BIOTECH", name: "PhD Biotechnology" },
            ]
        },
        {
            name: 'Vocation',
            program: [
                { code: "MVOC", name: "Master of Vocation" },
            ]
        },
        {
            name: 'Other',
            program: [
                { code: "MCH", name: "Master of Chirurgiae" },
            ]
        },
    ]

    const [query, setQuery] = useState('')
    const filteredPrograms = useMemo(() => {
        const q = query.trim().toLowerCase()
        if (!q) return Programs

        return Programs
            .map((item) => ({
                ...item,
                program: item.program.filter(
                    (p) =>
                        p.code.toLowerCase().includes(q) ||
                        p.name.toLowerCase().includes(q)
                ),
            }))
            .filter((item) => item.program.length > 0)
    }, [query])

    const totalPrograms = useMemo(
        () => filteredPrograms.reduce((sum, item) => sum + item.program.length, 0),
        [filteredPrograms]
    )


    return (
        <div className='flex flex-col gap-10 md:w-7xl items-center'>
            <div className=" flex items-center gap-3 w-3xl">
                {/* Search */}
                <div className='border-2 text-bg border-bg rounded-full bg-muted-bg h-12 items-center flex px-5 w-full gap-2'>
                    <i className="ph ph-magnifying-glass text-xl"></i>
                    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className='text-md w-full outline-0' placeholder='Search your Program...' />
                </div>

                <div className='flex items-center justify-center gap-3 h-12 rounded-2xl px-4 bg-bg'>
                    <div className='flex items-center gap-1'>
                        <GradText text='70' size={2} />
                        <h1 className='text-muted-text text-sm'>Programs</h1>
                    </div>

                    <div className='flex items-center gap-1 border-l border-border-20 pl-3'>
                        <GradText text='21' size={2} />
                        <h1 className='text-muted-text text-sm'>Groups</h1>
                    </div>
                </div>
            </div>

            {filteredPrograms.length === 0 && (
                <div className='flex flex-col items-center mt-20 gap-3'>
                    <Error size='11' />
                    <h1 className="font-bold text-4xl text-center bg-linear-to-tr to-white from-[#333] bg-clip-text text-transparent">No Program Found.</h1>
                </div>
            )}

            <div className='flex flex-col gap-12 w-6xl'>
                {filteredPrograms.map((item, i) => (
                    <div key={i}>
                        <div className='border-b border-border-10 py-2 flex items-center justify-between mb-2'>
                            <h1 className='text-4xl tracking-tight text-bg font-bold'>{item.name}</h1>

                            <div className='flex items-center gap-1 border border-border-10 rounded-full p-3 py-1'>
                                <GradText text={item.program.length} size={1.6} />
                                <h1 className='text-muted-text text-sm'>Programs</h1>
                            </div>
                        </div>

                        <div className='grid grid-cols-4 gap-4 border w-full'>
                            {item.program.map((p, j) => (
                                <Tilt key={j} rotationFactor={8} isRevese className=' border-2 h-40 border-bg rounded-2xl p-4 pb-3 bg-blue-400 cursor-pointer flex flex-col justify-between' >
                                    <i className="ph ph-arrow-up-right text-md text-muted-text/50 absolute top-3 right-3 "></i>
                                    {/* <h1 className="font-bold text-4xl tracking-tighter bg-linear-to-tr to-white from-[#333] bg-clip-text text-transparent">{p.code}</h1> */}
                                    <h1 className="font-bold text-4xl tracking-tighter text-amber-100">{p.code}</h1>
                                    <h1 className='text-muted-text text-sm leading-4.5 line-clamp h-10 flex items-center mt-5'>{p.name}</h1>
                                </Tilt>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}