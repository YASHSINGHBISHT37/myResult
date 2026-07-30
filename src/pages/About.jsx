import about from '@/data/about'
import LogoAni from '@/components/ui/LogoAni'
import GradText from '@/components/ui/GradText'
import PageTemplate from '@/components/ui/PageTemplate'

export default function About() {
    document.title = "About - myResult®";

    return (
        <div className='w-full relative bg-black'>
            <div className="w-full min-h-screen rounded-4xl bg-[#ECF1F0 p-20 py-40 flex flex-col justify-between gap-20">

                {/* Heading */}
                <div className="flex flex-col justify-between pb-20 px-30">
                    <div className="text-[#ECF1F0] text-[20vh] uppercase tracking-tighter font-bold ml-10">
                        <h2 className="text-xl tracking-normal text-pink-300 capitalize pb-10 pl-30">[ About ]</h2>

                        <div className='flex items-center gap-8'>
                            <h2 className="leading-38">Get to</h2>
                            <LogoAni size={16} />
                        </div>
                        <h2 className="leading-44 pl-50">know us</h2>
                    </div>

                    <div className="w-full flex flex-col items-end justify- gap-4 px-10">
                        <p className=" text-xl tracking-tight text-muted-text w-md leading-6 text-right">
                            myResult® specializes
                            in fast result retrieval, visual performance tracking, and student-first tools — built for GGSIPU students, by one.
                        </p>
                    </div>
                </div>

                <div className='text-left w-4xl ml-70'>
                    <p className=' text-sm md:text-2xl leading-4 tracking-tight md:leading-7 whitespace-pre-line'>{about.story.body}</p>
                </div>

                <div className='w-2xl ml-230'>
                    <h1 className='font-bold tracking-tight text-3xl text-pink-300 uppercase pb-1 md:pb-2'>{about.mission.head}</h1>
                    <p className=' text-sm md:text-2xl leading-4 tracking-tight md:leading-7 whitespace-pre-line'>{about.mission.body}</p>
                    <div className='pt-2 tracking-tight'>
                            {about.mission.points.map((point, i) => (
                                <div key={i} className='flex items-center gap-2 pl-16'>
                                    <div className='w-1.5 h-1.5 bg-pink-300 rounded-full'></div>
                                    <p className='text-xs md:text-xl text-muted-text leading-5 md:leading-7'>{point}</p>
                                </div>
                            ))}
                        </div>
                </div>

            </div>
        </div>
    )
}