import React from 'react'
import { fancyImgs } from "@/data/FancyImgs"
import useScreenSize from "@/hooks/use-screen-size"
import CirclingElements from '../fancy/blocks/circling-elements'

export default function HeroSection() {
    const screenSize = useScreenSize()

    return (
        <div className="relative w-full h-screen bg-transparent flex p-6  pt-10">

            <div className='flex flex-col justify-between'>
                <h1 style={{ fontSize: `30vh` }} className="font-bold tracking-tighter w-7xl leading-80 bg-linear-to-tr to-white from-[#333] bg-clip-text text-transparent">myResult
                    <span className="font-normal">®</span>
                </h1>

                <div className="borde w-2xl ml-4">
                    <h1 className="text-xl text-[#ffcc00] pl-80 pb-6 uppercase tracking-tighter">[ what we do ]</h1>
                    <p className="text-4xl tracking-tight text-right">myResult® specializes</p>

                    <p className="text-4xl tracking-tight">
                        in fast result retrieval, visual performance tracking, and student-first tools — built for GGSIPU students, by one.
                    </p>
                </div>
            </div>

            <div className='fixed bottom-10 right-10 -z-1'>
                <CirclingElements
                    radius={screenSize.lessThan(`md`) ? 100 : 470}
                    duration={8}
                    direction="reverse"
                    easing="0.944, 0.008, 0.147, 1.002"
                    className=" absolute right-20 bottom-20"
                >
                    {[...fancyImgs, ...fancyImgs].map((image, index) => (
                        <div key={index} className="w-20 h-20 md:w-56 md:h-56 cursor-pointer hover:scale-125 duration-200 ease-out overflow-hidden">
                            <img src={image.url} alt="image" className="w-full h-full object-cover shadow-2xl" />
                        </div>
                    ))}
                </CirclingElements>

                <CirclingElements
                    radius={screenSize.lessThan(`md`) ? 100 : 238}
                    duration={8}
                    // direction="reverse"
                    easing="0.944, 0.008, 0.147, 1.002"
                    className=" absolute right-20 bottom-20"
                >
                    {[...fancyImgs, ...fancyImgs].map((image, index) => (
                        <div key={index} className="w-20 h-20 md:w-34 md:h-34 cursor-pointer hover:scale-125 duration-200 ease-out overflow-hidden">
                            <img src={image.url} alt="image" className="w-full h-full object-cover shadow-2xl" />
                        </div>
                    ))}
                </CirclingElements>

                <CirclingElements
                    radius={screenSize.lessThan(`md`) ? 100 : 90}
                    duration={8}
                    direction="reverse"
                    easing="0.944, 0.008, 0.147, 1.002"
                    className=" absolute right-20 bottom-20"
                >
                    {[...fancyImgs, ...fancyImgs].map((image, index) => (
                        <div key={index} className="w-20 h-20 md:w-18 md:h-18 cursor-pointer hover:scale-125 duration-200 ease-out overflow-hidden">
                            <img src={image.url} alt="image" className="w-full h-full object-cover shadow-2xl" />
                        </div>
                    ))}
                </CirclingElements>


            </div>
        </div>

    )
}
