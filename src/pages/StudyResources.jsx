import GradText from '@/components/ui/GradText'
import Resource from '@/components/study-resources/Resource';
import { motion } from "motion/react";


export default function StudyResources() {
    document.title = "Study Resources - myResult®";

    const Programs = [
        {
            code: "BCA",
            name: "Bachelor of Computer Applications",
        },
        {
            code: "BBA",
            name: "Bachelor of Business Administration",
        },
        {
            code: "BTECH",
            name: "Bachelor of Technology",
        },
        {
            code: "MBA",
            name: "Master of Business Administration",
        },
    ]

    return (
        <div className='w-full min-h-screen flex flex-col items-center  relative bg-amber-100 md:p-10 md:py-30 p-4 pt-20 '>

            <div className="flex flex-col w-full justify-between px-60 pb-40">
                <div className="w-4xl text-bg text-3xl md:text-[20vh] uppercase tracking-tighter font-bold flex flex-col">
                    <h2 className="md:text-xl text-xs tracking-normal text-pink-300 capitalize md:pb-10 md:pl-130">[ GGSIPU ]</h2>
                    <h2 className="md:leading-40 text-right">Study</h2>

                    <h2 className="md:leading-30 text-right flex items-center justify-end gap-1 md:gap-1">Res
                        <motion.img className="w-10 h-10 md:w-36 md:h-36" src="/trail-images/2.png"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }} />
                        urce
                    </h2>

                </div>

                <div className="w-full flex flex-col items-end justify- gap-4 px-10 pt-10 ">
                    <p className=" text-2xl tracking-tighter w-lg leading-6.5 text-right text-bg">
                        from Guru Gobind Singh Indraprastha University
                    </p>
                </div>
            </div>

            <Resource />
        </div>
    )
}