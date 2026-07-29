import React from "react";
import { motion } from "motion/react";

const features = [
    {
        img: "/key.png",
        title: "Always Improving",
        point: "New features like leaderboards, PDF grade sheets, and study resources added regularly.",
    },
    {
        title: "Instant Access",
        point: "Get your result in seconds, without waiting on slow or crashing government portals.",
    },
    {
        img: "/light.png",
        title: "Visual Performance Insights",
        point: "Track your SGPA/CGPA trends across semesters with clean, interactive charts.",
    },
    {
        img: "/flash.png",
        title: "Accurate & Verified Results",
        point: "Data directly parsed from official IPU result records — no manual entry errors.",
    },
    {
        img: "/light.png",
        title: "Built by Students, for Students",
        point: "Made by someone who's been through the same GGSIPU result struggles.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="w-full min-h-screen py-20 px-6 sm:px-10 md:px-16 relative flex flex-col items-center z-99">

            <div className="w-full text-center mb-16">
                <h2 className="w-full tracking-tighter text-[10vh] md:text-[12vh] font-bold bg-linear-to-tr from-[#EFEAE3] to-bg bg-clip-text text-transparent">Why Choose Us ?</h2>
                <p className="text-muted-text -mt-3">Everything you need to check, track, and understand your IPU results — in one place.</p>
            </div>

            <div className="h-140 gap-3 flex w-6xl">

                {/* Big left card */}
                <motion.div
                    initial={{ x: -40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="w-[30%] h-full border bg-bg border-border-10 rounded-4xl p-6 flex flex-col justify-between"
                >
                    <div className="flex flex-col justify-between h-full gap-4">
                        <h1 className="font-bold text-5xl tracking-tight">{features[0].title}</h1>
                        {features[0].img && <img src={features[0].img} className="w-20" />}
                        <p className="text-muted-text text-md tracking-tight leading-5">{features[0].point}</p>
                    </div>
                </motion.div>

                <div className="grid grid-rows-2 gap-3 h-full w-[70%]">

                    {/* Top row */}
                    <div className="flex gap-3 h-full">
                        <motion.div
                            initial={{ y: -40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                            className="w-[40%] h-auto bg-bg border border-border-10 rounded-4xl p-4 flex flex-col justify-between"
                        >
                            <div className="flex flex-col justify-between h-full gap-4">
                                <h1 className="font-bold text-3xl tracking-tight">{features[1].title}</h1>
                                <p className="text-muted-text text-md tracking-tight leading-5">{features[1].point}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 40, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
                            className="w-[60%] h-auto bg-bg border border-border-10 rounded-4xl p-4 flex flex-col justify-between"
                        >
                            <div className="flex flex-col justify-between h-full gap-4">
                                <h1 className="font-bold text-3xl tracking-tight">{features[2].title}</h1>
                                {features[2].img && <img src={features[2].img} className="w-20" />}
                                <p className="text-muted-text text-md tracking-tight leading-5">{features[2].point}</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom row */}
                    <div className="flex gap-3 h-full">
                        <motion.div
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                            className="w-[60%] h-auto bg-bg border border-border-10 rounded-4xl p-4 flex flex-col justify-between"
                        >
                            <div className="flex flex-col justify-between h-full gap-4">
                                <h1 className="font-bold text-3xl tracking-tight">{features[3].title}</h1>
                                {features[3].img && <img src={features[3].img} className="w-20" />}
                                <p className="text-muted-text text-md tracking-tight leading-5">{features[3].point}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 40, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
                            className="w-[40%] h-auto bg-bg border border-border-10 rounded-4xl p-4 flex flex-col justify-between items-center"
                        >
                            <div className="flex flex-col justify-between h-full gap-4 items-center">
                                <h1 className="font-bold text-3xl tracking-tight text-center">{features[4].title}</h1>
                                {features[4].img && <img src={features[4].img} className="w-20" />}
                                <p className="text-muted-text text-md tracking-tight leading-5 text-center">{features[4].point}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    )
}