import { useState } from "react";

export default function Result() {
    const gradeStyles = {
        O: "bg-lime-900/60 text-lime-300",
        "A+": "bg-emerald-800/70 text-emerald-300",
    };

    const details = [
        { label: "Enrollment No.", value: "03990302024" },
        { label: "Program", value: "BCA" },
        { label: "Institute", value: "INSTITUTE OF INNOVATION IN TECHNOLOGY & MANAGEMENT" },
        { label: "Year of admission", value: "2024" },
    ]

    const courses = [
        "BA. B.Ed",
        "B.A. Liberal Arts",
        "BA (MC)",
        "M.Sc (MC & DD)",
        "B.Pharma",
        "M.Sc (Bio-Informat)",
        "B.Sc (ES)",
        "M.SC (EM)",
        "B.Tech (CSE)",
        "B.Tech (IT)",
        "B.Tech (ECE)",
        "B.Tech (CSE-AI)",
        "B.Tech (CSE-DS)",
        "LE-B.Tech (CSE)",
        "LE-B.Tech (ECE)",
        "LE-B.Tech (IT)",
        "MCA (SE)",
        "M.Tech (R & A)",
        "M.Tech (CSE)",
        "M.Tech (IT)",
        "M.Tech (ECE)",
        "M.Tech (ECE-W)",
        "M.Tech (CSE) (W)",
        "M.Tech (CE)",
        "MA (Eng)",
        "BA (Eng)-4 Year",
        "BA (Eco)-4 Year",
        "MA (Eco)",
        "MBA",
        "MBA (Analytics)",
        "MBA (FA)",
        "MBA (Weekend)",
        "BBA",
        "B.Com (H)",
        "B.Tech (Bio-Tech)",
        "M.Tech (Bio-Tech)",
        "M.Tech (FPT)",
        "M.Tech (IBT)",
        "B.Sc (Phyiscs)",
        "B.Sc (Chemistry)",
        "B.Sc (Mathematics)",
        "B.Arch",
        "M.Arch",
        "M.Plan",
        "B.Design",
        "LE-B.Design",
        "M.Design",
        "B.Tech (AI & DS)",
        "B.Tech (AI & ML)",
        "B.Tech (A & R)",
        "B.Tech (IIOT)",
        "LE-B.Tech (AI & DS)",
        "LE-B.Tech (AI & ML)",
        "LE-B.Tech (A & R)",
        "LE-B.Tech (IIOT)",
        "B.Tech (CE)",
        "B.Tech (Energy)",
        "LE-B.Tech (CE)",
        "MBA (DM)",
        "MBA (FIS)",
        "LE-MBA (FIS)",
        "PGDFLSA",
        "BA LLB",
        "BBA LLB",
        "LLM (ADR)",
        "LLM (CJS)",
        "LLM (IPR)",
        "LLM (II PL)",
        "LLM (CL CC)",
        "LLM (CL)",
        "MA (MC)",
        "M.Ed",
    ]

    const semesters = ['Over all', 'Sem 1', 'Sem 2', 'Sem 3', 'Sem 4']

    const semMarks = [
        { label: "marks", value: "768", subHead: 'Total Marks Obtained in Semester 1' },
        { label: "sgpa", value: "9.39", subHead: 'Semester Grade Point Average' },
        { label: "percentage", value: "85.33%", subHead: 'Percentage of Marks Obtained' },
        { label: "total credits", value: "23", subHead: 'Total Credits for the Semester' },
    ]

    const subjects = [
        { code: "BCA-202T", name: "OPERATING SYSTEMS", credits: 4, internal: 37, external: 51, total: 88, grade: "A+" },
        { code: "BCA-204T", name: "SOFTWARE TESTING", credits: 4, internal: 40, external: 52, total: 92, grade: "O" },
        { code: "BCA-212T", name: "INTRODUCTION TO DATA SCIENCE", credits: 4, internal: 32, external: 51, total: 83, grade: "A+" },
        { code: "BCA-222T", name: "DIGITAL MARKETING", credits: 3, internal: 35, external: 57, total: 92, grade: "O" },
        { code: "BCA-232", name: "INTRODUCTION TO LOGIC AND CRITICAL THINKING", credits: 2, internal: 38, external: 43, total: 81, grade: "A+" },
        { code: "BCA-234", name: "HEALTH AND WELLNESS, YOGA EDUCATION AND SPORTS AND FITNESS", credits: 2, internal: "-", external: 92, total: 92, grade: "O" },
        { code: "BCA-202P", name: "OPERATING SYSTEMS LAB", credits: 1, internal: 36, external: 44, total: 80, grade: "A+" },
        { code: "BCA-204P", name: "SOFTWARE TESTING LAB", credits: 1, internal: 37, external: 47, total: 84, grade: "A+" },
        { code: "BCA-212P", name: "DATA SCIENCE LAB", credits: 2, internal: 30, external: 46, total: 76, grade: "A+" },
    ]
    const gridCols = "grid-cols-[130px_1fr_85px_85px_85px_70px_70px]"

    const gradeColor = (g) => g === "O" ? "text-lime-300" : "text-emerald-300"

    return (
        <div className="w-full p-2 flex flex-col gap-6 py-4 md:py-4 relative z-99 rounded-b-2xl backdrop-blur-3xl bg-black/40">

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 border rounded-xl border-white/10 p-2 px-2 pr-3 bg-white/7 backdrop-blur-2xl cursor-pointer">
                    <i class="ph ph-arrow-left"></i>
                    <h1 className="text-xs font-bold">Logout</h1>

                </div>

                <div className="flex items-center gap-2 border rounded-xl border-white/10 p-2 px-2 bg-white/7 backdrop-blur-2xl cursor-pointer">
                    <i class="ph ph-download-simple"></i>
                    <h1 className="text-xs font-bold">Export PDF</h1>
                    <i class="ph ph-caret-down"></i>
                </div>
            </div>

            <div className="w-full bg-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 flex flex-col gap-6">

                {/* Details */}
                <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold tracking-tight bg-linear-to-tr to-[#eee] from-[#333] bg-clip-text text-transparent">YASH SINGH BISHT</h1>

                    <div className="flex gap-4 h-full">
                        <div className="w-full items-center justify-between grid grid-cols-2 gap-3">
                            {details.map((detail) => (
                                <div className="w-full flex flex-col rounded-xl border border-white/20 p-3 bg-white/10">
                                    <h1 className="text-white/50 font- text-xs uppercase">{detail.label}</h1>
                                    <p className="font-extrabold truncate text-md">{detail.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="border border-white/20 rounded-xl w-80 h-auto hidden md:flex flex-col justify-center px-5">
                            <p className="font-bold text-white/50 text-xs pb-3 uppercase">Cumulative GPA</p>
                            <h1 className="font-semibold text-6xl">8.81</h1>
                            <p className="font-extrabold text-white/50 text-xs">Out of 10.00</p>
                        </div>
                    </div>
                </div>

                {/* Semesters */}
                <div className="flex flex-col gap-3">
                    <p className="text-xs text-white/50">SELECT SEMESTER</p>

                    <div className="w-full gap-3 flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-2 w-full flex-wrap">
                            {semesters.map((item, i) => (
                                <p key={i} className="text-center cursor-pointer border p-1.5 text-xs rounded-lg px-2.5 border-white/20">{item}</p>
                            ))}
                        </div>

                        <div className="border border-white/20 rounded-xl h-36 p-6 flex flex-col justify-center md:hidden">
                            <p className="font-bold text-white/50 text-xs uppercase pb-2">CUMULATIVE GPA</p>
                            <h1 className="font-semibold text-6xl bg-linear-to-tr from-[#eee] to-[#464545] bg-clip-text text-transparent">8.81</h1>
                            <p className="font-bold text-white/50 text-xs">Out of 10.00</p>
                        </div>

                        <button className="border border-white/20 bg-white/7 rounded-full  p-3 md:p-1.5 md:rounded-lg md:w-80 font-extrabold text-sm cursor-pointer">Internal Marks</button>
                    </div>
                </div>
            </div>

            {/* Semester Details */}
            <div className="w-full md:bg-white/5 backdrop-blur-2xl  md:border md:border-white/20 rounded-2xl md:p-4 md:px-8 flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-3 md:flex">
                    {semMarks.map((item) => (
                        <div className="w-full flex flex-col justify-center rounded-xl border border-white/20 md:border-0 md:p-0 p-4 gap-1 bg-white/7 md:bg-transparent h-30">
                            <p className="text-white/40 text-xs uppercase">{item.label}</p>
                            <h1 className="text-3xl font-bold uppercase bg-linear-to-tr from-[#eee] to-[#464545] bg-clip-text text-transparent">{item.value}
                                {item.label === 'marks' && (
                                    <span className="text-sm text-white/50"> / 900</span>
                                )}
                            </h1>
                            <p className="text-white/70 text-xs leading-">{item.subHead}</p>
                        </div>
                    ))}
                </div>

            </div>

            <div className="w-full bg-white/5 backdrop-blur-2xl  border border-white/20 rounded-2xl p-4 flex flex-col gap-6">
                <div>
                    <h1 className="font-bold text-2xl leading-6.5">Semester 4 - Detailed Results</h1>
                    <p className="text-white/50 text-xs pt-1">
                        Showing all {subjects.length} subjects across all semesters
                    </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-white/20 hidden md:block">
                    <div className="min-w-[640px]">
                        <div className={`grid ${gridCols} divide-x divide-white/10 w-full font-bold text-sm bg-white/7 uppercase border-b border-white/10`}>
                            <div className="text-left py-2 px-4">Paper Code</div>
                            <div className="text-left py-2 px-4">Subject Name</div>
                            <div className="text-center py-2 px-2">Credits</div>
                            <div className="text-center py-2 px-2">Internal</div>
                            <div className="text-center py-2 px-2">External</div>
                            <div className="text-center py-2 px-2">Total</div>
                            <div className="text-center py-2 px-2">Grade</div>
                        </div>

                        {subjects.map((item) => (
                            <div
                                key={item.code}
                                className={`grid ${gridCols} divide-x divide-white/5 w-full text-sm text-white/60 border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors`}
                            >
                                <div className="text-left py-3 px-4 text-white/70">{item.code}</div>
                                <div className="text-left py-3 px-4 truncate capitalize text-white">{item.name}</div>
                                <div className="text-center py-3 px-2">{item.credits}</div>
                                <div className="text-center py-3 px-2">{item.internal}</div>
                                <div className="text-center py-3 px-2">{item.external}</div>
                                <div className="text-center py-3 px-2 font-semibold text-white">{item.total}</div>
                                <div className={`text-center py-3 px-2 font-bold ${gradeColor(item.grade)}`}>{item.grade}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-white/20 md:hidden">
                    <div className="min-w-[740px]">
                        <div className={`grid grid-cols-[1fr_80px_90px_90px_70px_70px] divide-x divide-white/10 w-full font-bold text-sm bg-white/7 uppercase border-b border-white/10`}>
                            <div className="text-left py-3 px-4">Subject Name</div>
                            <div className="text-center py-3 px-2">Credits</div>
                            <div className="text-center py-3 px-2">Internal</div>
                            <div className="text-center py-3 px-2">External</div>
                            <div className="text-center py-3 px-2">Total</div>
                            <div className="text-center py-3 px-2">Grade</div>
                        </div>

                        {subjects.map((item) => (
                            <div
                                key={item.code}
                                className={`grid grid-cols-[1fr_80px_90px_90px_70px_70px] divide-x divide-white/10 w-full text-sm text-white/70 border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors`}
                            >
                                <div className="flex flex-col justify-center gap-0 p-2 px-4">
                                    <div className="text-white/30 text-xs">{item.code}</div>
                                    <div className=" text-white capitalize leading-4.5 text-sm ">{item.name}</div>
                                </div>
                                <div className="text-center py-2 px-2 flex items-center justify-center">{item.credits}</div>
                                <div className="text-center py-2 px-2 flex items-center justify-center">{item.internal}</div>
                                <div className="text-center py-2 px-2 flex items-center justify-center">{item.external}</div>
                                <div className="text-center py-2 px-2 flex items-center justify-center font-semibold text-white">{item.total}</div>
                                <div className={`text-center py-2 px-2 flex items-center justify-center ${gradeColor(item.grade)}`}>{item.grade}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3 backdrop-blur-2xl  text-xs border p-4 rounded-2xl border-white/20 bg-white/5">
                <i className="ph ph-exclamation-mark rotate-180 border rounded-full text-xl p-1 border-white/30"></i>
                <p>In case of any discrepancies found in the above data, please contact Examination Division, GGSIP University.</p>
            </div>


            <div className="w-full bg-white/5 backdrop-blur-2xl  border border-white/20 rounded-2xl p-5 px-4 flex flex-col gap-6">
                <div>
                    <h1 className="font-bold text-2xl leading-6 pb-2">Result Available For All GGSIPU Programmes</h1>
                    <p className="text-xs text-white/60">We support result checking for the following GGSIPU programs:</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 text-xs gap-3">
                    {courses.map((item, i) => (
                        <div className="flex items-center gap-2 border rounded-lg border-white/10 bg-white/4 hover:border-white/20 hover:bg-white/7 transition-all duration-250 ease-in-out p-2 px-3">
                            <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                            <p className="">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
