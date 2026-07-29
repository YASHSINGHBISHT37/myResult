import { useEffect } from "react"
import { fancyImgs } from "@/data/FancyImgs"
import { motion, stagger, useAnimate } from "motion/react"
import Floating, { FloatingElement, } from "@/components/fancy/image/parallax-floating"
import GradText from "@/components/ui/GradText"

const Sd = () => {
    const [scope, animate] = useAnimate()

    const mdSize = 54;

    useEffect(() => {
        animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) })
    }, [])

    return (
        <div className="flex w-dvw h-dvh justify-center items-center bg-black overflow-hidden relative z-99999" ref={scope}>
            <div className="flex gap-10 items-center absolute bottom-0 w-full z-100 pointer-events-none px-10">
                <h1 style={{ fontSize: `30vh` }} className="font-bold tracking-tighter w-7xl leading-80 bg-linear-to-tr to-white from-[#333] bg-clip-text text-transparent">myResult
                    <span className="font-normal">®</span>
                </h1>

                <div className="w-sm flex flex-col gap-10">
                    <div>
                        <p>Transform passive learning into active remembering. Smriti AI helps you retain knowledge faster with AI-powered study tools and spaced repetition.</p>
                    </div>
                    <div className="flex items-center justify-end rounded-full p-1  py-1 w-50 bg-white text-bg gap-3 ">
                        <h1 className="font-semibold tracking-tight text-lg">See Your Result</h1>
                        <div className="bg-bg text-white flex items-center justify-center rounded-full aspect-square w-10">
                            <i className="ph ph-arrow-right"></i>
                        </div>
                    </div>
                </div>

            </div>

            <Floating sensitivity={-1} className="overflow-hidden">
                <FloatingElement depth={0.5} className="top-[10%] left-[21%]">
                    <motion.img initial={{ opacity: 0 }} src={fancyImgs[0].url} className="w-16 h-16 md:w-58 md:h-58 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform" />
                </FloatingElement>

                <FloatingElement depth={1} className="top-[10%] left-[42%]">
                    <motion.img initial={{ opacity: 0 }} src={fancyImgs[1].url} className="w-20 h-20 md:w-58 md:h-58 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform" />
                </FloatingElement>
                
                <FloatingElement depth={2} className="top-[10%] left-[63%]">
                    <motion.img initial={{ opacity: 0 }} src={fancyImgs[2].url} className="w-28 h-40 md:w-58 md:h-58 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform" />
                </FloatingElement>

                <FloatingElement depth={1} className="top-[10%] left-[80%]">
                    <motion.img initial={{ opacity: 0 }} src={fancyImgs[3].url} className="w-24 rotate-20 h-24 md:w-58 md:h-58 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform" />
                </FloatingElement>

                <FloatingElement depth={1} className="top-[40%] left-[7%]">
                    <motion.img initial={{ opacity: 0 }} src={fancyImgs[4].url} className="w-28 h-28 md:w-58 md:h-58 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform" />
                </FloatingElement>

                <FloatingElement depth={2} className="top-[50%] left-[80%]">
                    <motion.img initial={{ opacity: 0 }} src={fancyImgs[7].url} className="w-28 h-28 md:w-58 md:h-58 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform" />
                </FloatingElement>

                <FloatingElement depth={4} className="top-[67%] left-[25%]">
                    <motion.img initial={{ opacity: 0 }} src={fancyImgs[5].url} className="w-40 md:w-58 h-58 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform" />
                </FloatingElement>

                <FloatingElement depth={1} className="top-[50%] left-[60%]">
                    <motion.img initial={{ opacity: 0 }} src={fancyImgs[6].url} className="w-24 h-24 md:w-58 md:h-58 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform" />
                </FloatingElement>

                <FloatingElement depth={1} className="top-[50%] left-[40%]">
                    <motion.img initial={{ opacity: 0 }} src={fancyImgs[8].url} className="w-24 h-24 md:w-58 md:h-58 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform" />
                </FloatingElement>


            </Floating>
        </div>
    )
}

export default Sd
