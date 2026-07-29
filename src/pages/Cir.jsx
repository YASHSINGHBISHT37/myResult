import React from "react"
import { fancyImgs } from "@/data/FancyImgs"
import useScreenSize from "@/hooks/use-screen-size"
import CirclingElements from "@/components/fancy/blocks/circling-elements"

const Cir = () => {
    const screenSize = useScreenSize()
    return (
        <div className="relative w-full h-screen bg-black flex justify-center z-99999 p-4 ">


            <div className="flex flex-col gap-10 items- w-full z-100 pointer-events-none pt-20 justify-between">

                <h1 style={{ fontSize: `30vh` }} className="font-bold tracking-tighter w-7xl leading-80 bg-linear-to-tr to-white from-[#333] bg-clip-text text-transparent">myResult
                    <span className="font-normal">®</span>
                </h1>


                <div className="flex gap-10 pl-4">
                    <div className="w-md">
                        <p>Transform passive learning into active remembering. Smriti AI helps you retain knowledge faster with AI-powered study tools and spaced repetition.</p>
                    </div>
                    <div className="flex items-center justify-end rounded-full p-1 h-12 py-1 w-50 bg-white text-bg gap-3 ">
                        <h1 className="font-semibold tracking-tight text-lg">See Your Result</h1>
                        <div className="bg-bg text-white flex items-center justify-center rounded-full aspect-square w-10">
                            <i className="ph ph-arrow-right"></i>
                        </div>
                    </div>
                </div>



            </div>

            <CirclingElements
                radius={screenSize.lessThan(`md`) ? 100 : 470}
                duration={8}
                direction="reverse"
                easing="0.944, 0.008, 0.147, 1.002"
                className=" absolute right-20 bottom-20"
            >
                {[...fancyImgs, ...fancyImgs].map((image, index) => (
                    <div key={index} className="w-20 h-20 md:w-56 md:h-56 absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-125 duration-200 ease-out overflow-hidden">
                        <img src={image.url} alt="image" className="w-full h-full object-cover shadow-2xl" />
                    </div>
                ))}
            </CirclingElements>

            <CirclingElements
                radius={screenSize.lessThan(`md`) ? 100 : 230}
                duration={8}
                easing="0.944, 0.008, 0.147, 1.002"
                className=" absolute right-20 bottom-20"
            >
                {[...fancyImgs, ...fancyImgs].map((image, index) => (
                    <div key={index} className="w-20 h-20 md:w-40 md:h-40 absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-125 duration-200 ease-out overflow-hidden">
                        <img src={image.url} alt="image" className="w-full h-full object-cover shadow-2xl" />
                    </div>
                ))}
            </CirclingElements>

            <CirclingElements
                radius={screenSize.lessThan(`md`) ? 100 : 75}
                duration={8}
                direction="reverse"
                easing="0.944, 0.008, 0.147, 1.002"
                className=" absolute right-20 bottom-20"
            >
                {[...fancyImgs, ...fancyImgs].map((image, index) => (
                    <div key={index} className="w-20 h-20 md:w-16 md:h-16 absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-125 duration-200 ease-out overflow-hidden">
                        <img src={image.url} alt="image" className="w-full h-full object-cover shadow-2xl" />
                    </div>
                ))}
            </CirclingElements>


            <CirclingElements
                radius={screenSize.lessThan(`md`) ? 100 : 15}
                duration={8}
                easing="0.944, 0.008, 0.147, 1.002"
                className=" absolute right-20 bottom-20"
            >
                {[...fancyImgs, ...fancyImgs].map((image, index) => (
                    <div key={index} className="w-20 h-20 md:w-3 md:h-3 absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-125 duration-200 ease-out overflow-hidden">
                        <img src={image.url} alt="image" className="w-full h-full object-cover shadow-2xl" />
                    </div>
                ))}
            </CirclingElements>

        </div>
    )
}

export default Cir