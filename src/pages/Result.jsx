import { useState } from "react";
import Marksheet from "@/components/result/semester/Marksheet";
import MainTop from "@/components/result/MainTop";
import SemDetail from "@/components/result/semester/SemDetail";
import OverAll from "@/components/result/OverAll";
import SemStates from "@/components/result/semester/SemStates";
import GradeAnalsis from "@/components/result/semester/GradeAnalsis";
import { ResultProvider } from '@/context/ResultContext'

export default function Result() {

    const [selected, setSelected] = useState('Over all')
    const isOverall = selected === 'Over all'
    const semNum = isOverall ? null : Number(selected.replace('Sem ', ''))

    return (
        <ResultProvider>
            <div className="w-full h-full flex items-center justify-center border border-border rounded-4xl relative z-99 rounded-b-4xl dark:bg-muted-bg bg-muted-bg md:pt-20 dark:text-text text-text">

                <div className="md:w-6xl w-full flex flex-col gap-10 pt-18 pb-10">
                    <MainTop selected={selected} onSemesterChange={setSelected} />
                            <div className="flex items-center justify-between">
                                <SemStates selected={selected}/>
                                <GradeAnalsis selected={selected} />
                            </div>
                            <Marksheet sem={semNum} />
                        </div>

                    )}

                </div>
            </div>
        </ResultProvider>
    )
}