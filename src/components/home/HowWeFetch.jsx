import { color } from 'motion'
import React from 'react'

export default function HowWeFetch() {
    const steps = [
        {
            number: "1",
            color: '#E9CCFF',
            title: "You Enter Your Details",
            point: "Enrollment number, password, and CAPTCHA — the same credentials you'd use on the official GGSIPU portal.",
        },
        {
            number: "2",
            color: '#4DA2FF',
            title: "We Connect Directly to IPU",
            point: "Your request is sent straight to the official GGSIPU exam server — no middleman database, no cached guesses.",
        },
        {
            number: "3",
            color: '#55DB9C',
            title: "We Parse the Raw Result",
            point: "The official response is parsed in real time, structured cleanly, and formatted for you — errors and all removed.",
        },
        {
            number: "4",
            color: '#FFD731',
            title: "You Get It, Instantly",
            point: "Your result, SGPA/CGPA, and semester breakdown — delivered in seconds, not after 20 failed refreshes.",
        },
    ]

    return (
        <div className="w-full z-999999 relative bg-black">
            <div className="w-full min-h-screen rounded-4xl bg-[#ECF1F0] p-20 py-30 flex flex-col justify-between gap-20">

                {/* Heading */}
                <div className="flex flex-col justify-between">
                    <div className="borde w-7xl text-right text-bg text-[16vh] uppercase tracking-tighter font-bold ml-10">
                        <h2 className="leading-30">How we fetch</h2>
                        <h2 className="leading-33">your IPU result ?</h2>
                    </div>

                    <div className="w-full flex flex-col items-end justify- gap-4 px-10">
                        <h1 className='text-bg font-bold tracking-tighter uppercase text-2xl'>* Important *</h1>
                        <p className=" text-2xl tracking-tighter text-bg/70 font- w-lg leading-6.5 text-right">
                            We do not have access to any IPU database. We cannot see or
                            modify any data that isn't already available to you on the
                            official portal. We're simply a better interface for
                            viewing your own results.
                        </p>
                    </div>
                </div>

                {/* Main */}
                <div className="w-full flex flex-col gap-4 items-">
                    {steps.map((item, i) => (
                        <div className={`borde rounded-full bg-[${item.color}] text-bg p-1  flex items-center justify-between gap-30 w-8xl nth-[3]:ml-40 nth-[2]:ml-80 nth-[1]:ml-120 hover:scale-105 transition-all duration-500 ease-in-out`}>
                            <div className={`flex border-3 bg-[${item.color}] w-full h-full p-4 pr-10 rounded-full`}>

                                <div className='flex items-center gap-10'>
                                    <div className="rounded-full border-3 border-bg w-40 h-40 overflow-clip flex items-center justify-center bg-[#ECF1F0] shrink-0">
                                        <h1 className="text-[25vh] tracking-tighter text-bg">{item.number}</h1>
                                    </div>
                                    <h1 className=" tracking-tighter font-bold text-6xl uppercase w-116">{item.title}</h1>
                                </div>

                                <div className="flex items-center justify-between">
                                    <p className=" tracking-tight font-bold text-2xl text-right">{item.point}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
