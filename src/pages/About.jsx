import about from '@/data/about'

export default function About() {
    document.title = "About - myResult®";

    return (
        <div className="w-full relative bg-black overflow-x-hidden">
            <div className="w-full min-h-screen rounded-4xl px-6 py-24 sm:py-28 md:py-32 lg:py-40 flex flex-col justify-between gap-14 sm:gap-16 md:gap-20">

                {/* Heading */}
                <div className="flex flex-col justify-between md:pb-16 lg:pb-20 md:px-10 lg:px-30">
                    <div className="text-[#ECF1F0] text-[clamp(2.75rem,14vw,9rem)] lg:text-[clamp(10rem,20vh,18rem)] uppercase tracking-tighter font-bold md:ml-4 lg:ml-10">
                        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl tracking-normal text-pink-300 capitalize pl-14 sm:pl-8 md:pl-16 lg:pl-30 pb-2 md:pb-6 lg:pb-10">[ About ]</h2>

                        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                            <h2 className="leading-none md:leading-tight lg:leading-38">Get to</h2>
                            <img className="w-12 sm:w-16 md:w-24 lg:w-40 aspect-square shrink-0" src="/trail-images/6.png" />
                        </div>
                        <h2 className="leading-none md:leading-tight lg:leading-44 pl-14 md:text-left md:pl-10 lg:pl-50">know us</h2>
                    </div>

                    <div className="w-full flex flex-col items-end md:gap-4 md:px-4 lg:px-10">
                        <p className="text-xs sm:text-sm md:text-base lg:text-xl tracking-tight text-muted-text w-full max-w-[16rem] sm:max-w-xs md:max-w-sm lg:max-w-md mt-4 leading-3.5 md:leading-5 lg:leading-6 text-right">
                            myResult® specializes in fast result retrieval, visual
                            performance tracking, and student-first tools — built for
                            GGSIPU students, by one.
                        </p>
                    </div>
                </div>

                {/* Story */}
                <div className="text-left w-full max-w-full md:max-w-2xl lg:max-w-4xl mx-auto md:mx-0 lg:ml-auto lg:mr-[40%]">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-5 md:leading-6 lg:leading-7 tracking-tight whitespace-pre-line">{about.story.body}</p>
                </div>

                {/* Mission */}
                <div className="w-full max-w-full md:max-w-xl lg:max-w-2xl mx-auto md:mx-0 lg:ml-auto lg:mr-[4%]">
                    <h1 className="font-bold tracking-tight text-lg sm:text-xl md:text-2xl lg:text-3xl text-pink-300 uppercase pb-1 md:pb-2">{about.mission.head}</h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-2xl leading-5 md:leading-6 lg:leading-7 tracking-tight whitespace-pre-line">{about.mission.body}</p>
                    <div className="pt-2 tracking-tight space-y-1">
                        {about.mission.points.map((point, i) => (
                            <div key={i} className="flex items-center gap-2 pl-3 sm:pl-8 md:pl-12 lg:pl-16">
                                <div className="w-1.5 h-1.5 bg-pink-300 rounded-full shrink-0" />
                                <p className="text-xs sm:text-sm md:text-base lg:text-xl text-muted-text leading-5 md:leading-6 lg:leading-7">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}