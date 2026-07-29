import React from 'react'

export default function ChooseSem() {

    const semesterTabs = ['Over all','Sem 1','Sem 2','Sem 3','Sem 4']

    return (
        <div className="flex flex-col gap-2 border border-border-20 p-5 rounded-3xl bg-white/2">
            <p className="text-sm text-white/50 uppercase">Select Semester</p>

            <div className="w-full gap-3 flex items-center justify-between">
                <div className="flex items-center gap-2 w-full">
                    {semesterTabs.map((item) => (
                        <p key={item} className='text-center cursor-pointer border border-border-20 p-1.5 text-sm rounded-xl px-3 transition-colors'>{item}</p>
                    ))}
                </div>

                <button className="border border-border bg-white text-black transition-all ease-in-out duration-250 hover:bg-[#ffcc00] font-bold rounded-full p-2 w-80 text-md cursor-pointer">Internal Marks</button>
            </div>
        </div>
    )
}