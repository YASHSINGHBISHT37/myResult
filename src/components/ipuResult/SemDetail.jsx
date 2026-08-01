import { useResult } from '@/context/ResultContext'
import { calculateOverallStats } from '../cal/calculateOverallStats'
import { calculateSemesterStats } from '../cal/calculateSemesterStats'

export default function SemDetail({ selected = 'Over all' }) {

    const { semesterData, loading, error } = useResult()

    const isOverall = selected === 'Over all'

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    if (!semesterData) return null

    let stats, heading

    if (isOverall) {
        const { totalCredits, totalMarks, maxMarks, percentage, cgpa } = calculateOverallStats(semesterData)
        stats = { totalCredits, totalMarks, maxMarks, percentage, gpa: cgpa }
        heading = 'Overall'
    } else {
        const semNum = Number(selected.replace('Sem ', ''))
        const semester = semesterData.find((s) => s.sem === semNum)
        if (!semester) return null
        const { totalCredits, totalMarks, maxMarks, percentage, sgpa } = calculateSemesterStats(semester)
        stats = { totalCredits, totalMarks, maxMarks, percentage, gpa: sgpa }
        heading = `Semester ${semNum}`
    }

    const semMarks = [
        { label: "marks", value: stats.totalMarks, subHead: `Total Marks Obtained in ${heading}` },
        { label: isOverall ? "cgpa" : "sgpa", value: stats.gpa.toFixed(2), subHead: isOverall ? 'Cumulative Grade Point Average' : 'Semester Grade Point Average' },
        { label: "percentage", value: `${stats.percentage.toFixed(2)}%`, subHead: 'Percentage of Marks Obtained' },
        { label: "total credits", value: stats.totalCredits, subHead: `Total Credits ${isOverall ? 'Overall' : 'for the Semester'}` },
    ]

    return (
        <div className="gap-3 flex w-full">
            {semMarks.map((item) => (
                <div key={item.label} className="w-full flex flex-col justify-center rounded-3xl border border-border gap-1 bg-white/2 items-center h-30">
                    <p className="text-muted-text dark:text-muted-text text-xs uppercase">{item.label}</p>
                    <h1 className="text-5xl font-bold uppercase bg-linear-to-t dark:bg-linear-to-tb to-[#eee] from-text dark:to-text dark:from-sec-bg bg-clip-text text-transparent">
                        {item.value}
                        {item.label === 'marks' && (
                            <span className="text-[1.8vh] dark:text-white/0"> / {stats.maxMarks}</span>
                        )}
                    </h1>
                    <p className="text-muted-text text-xs leading-">{item.subHead}</p>
                </div>
            ))}
        </div>
    )
}