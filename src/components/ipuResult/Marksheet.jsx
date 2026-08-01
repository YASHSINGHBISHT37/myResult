import { gradePoints } from '../cal/gradePoints'
import { useResult } from '@/context/ResultContext'

export default function Marksheet({ sem = 4 }) {

    const { semesterData, loading, error } = useResult()

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    const semester = semesterData ? semesterData.find((s) => s.sem === sem) : null
    const subjects = semester?.subjects ?? []

    const gridCols = "grid-cols-[140px_1fr_90px_95px_95px_90px_90px]"
    const gradeColor = (g) => gradePoints[g]?.color ?? "text-white/70"

    return (
        <div className="w-full flex flex-col gap-2">

            {/* Header */}
            <div className='flex items-center justify-between'>
                <div className='w-full flex items-center justify-between px-4'>
                    <h1 className="font-bold text-2xl">{semester?.name ?? "Semester"} - Detailed Results</h1>
                    <p className="text-white/50 text-xs pt-1 leading-3">Showing all {subjects.length} subjects</p>
                </div>
            </div>

            <div className="w-full h-full border border-border overflow-hidden rounded-2xl">
                <div className={`grid  ${gridCols} divide-x divide-border text-text w-full border-b border-border font-bold text-sm bg-white/10 uppercase`}>
                    <div className="text-left py-3 px-5">PAPER CODE</div>
                    <div className="text-left py-3 px-4">SUBJECT</div>
                    <div className="text-center py-3 px-2">CREDITS</div>
                    <div className="text-center py-3 px-2">INTERNAL</div>
                    <div className="text-center py-3 px-2">EXTERNAL</div>
                    <div className="text-center py-3 px-2">TOTAL</div>
                    <div className="text-center py-3 px-2">GRADE</div>
                </div>

                {subjects.map((item) => (
                    <div key={item.code} className={`grid ${gridCols} divide-x divide-border group w-full text-sm text-muted-text border-b last:border-0 border-border hover:bg-border/50`}>
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
    )
}