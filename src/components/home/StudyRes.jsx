import React from 'react'
import { fancyImgs } from "@/data/FancyImgs"
import useScreenSize from "@/hooks/use-screen-size"
import CirclingElements from '../fancy/blocks/circling-elements'
import LogoAni from '../ui/LogoAni';


export default function StudyRes() {
    const screenSize = useScreenSize()
    return (
        <div className="relative w-full min-h-330 flex flex-col p-6 py-30 bg-black overflow-hidden">

            <div className="flex flex-col w-full relative z-99">
                <div className="text-text w-7xl pl-30 text-[16vh] uppercase tracking-tighter font-bold flex flex-col items-center">
                    <h2 className="text-xl tracking-normal text-[#32CB65] capitalize pb-10 pr-200">[ FAST & EASY ]</h2>
                    <h2 className="leading-34 pr-100 flex items-center gap-10">Everything
                    </h2>

                    <h2 className="leading-34 text-right flex items-center pl-60">
                        <LogoAni size={14} />
                        you need,</h2>
                    <h2 className="leading-34 text-right flex items-center pl-20">in one place</h2>
                </div>

                <div className="w-full flex flex-col items-end justify- gap-4 px-10 pt-10">
                    <p className=" text-2xl tracking-tighter w-2xl leading-6.5 text-right text-[#32CB65]">
                        No more digging through scattered links for syllabus, previous year question papers, and notes.
                        Everything is pulled directly from the IPU cluster and organized in one place, so you can focus on studying instead of searching.
                    </p>
                </div>
            </div>

            <div className='border border-border-20 rounded-full flex p-3 px-5 hover:bg-[#32CB65] bg-white absolute z-99 bottom-35 cursor-pointer active:scale-90 transition-all duration-300 ease-in-out left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                <h2 className="text-right flex text-black items-center text-lg font-bold">See Study Resource</h2>
            </div>


            <div className='absolute -bottom-90 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1'>
                <CirclingElements
                    radius={screenSize.lessThan(`md`) ? 100 : 870}
                    duration={8}
                    direction="reverse"
                    easing="0.944, 0.008, 0.147, 1.002"
                    className="absolute right-0 bottom-0 -translate-x-"
                >
                    {[...fancyImgs, ...fancyImgs, ...fancyImgs].map((image, index) => (
                        <div key={index} className="w-20 h-20 md:w-56 md:h-56 cursor-pointer hover:scale-125 duration-200 ease-out overflow-hidden">
                            <img src={image.url} alt="image" className="w-full h-full object-cover shadow-2xl" />
                        </div>
                    ))}
                </CirclingElements>

            </div>

            <div className='absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 z-1'>
                <CirclingElements
                    radius={screenSize.lessThan(`md`) ? 100 : 370}
                    duration={8}
                    direction="reverse"
                    easing="0.944, 0.008, 0.147, 1.002"
                    className="absolute right-0 bottom-0 -translate-x-"
                >
                    {[...fancyImgs, ...fancyImgs, ...fancyImgs].map((image, index) => (
                        <div key={index} className="w-20 h-20 md:w-40 md:h-40 cursor-pointer hover:scale-125 duration-200 ease-out overflow-hidden">
                            <img src={image.url} alt="image" className="w-full h-full object-cover shadow-2xl" />
                        </div>
                    ))}
                </CirclingElements>

            </div>
        </div>

    )
}