import about from '@/data/about'
import LogoAni from '@/components/ui/LogoAni'
import GradText from '@/components/ui/GradText'
import PageTemplate from '@/components/ui/PageTemplate'

export default function About() {
    document.title = "About - myResult®";

    return (
        <PageTemplate>
            <div className='flex flex-col md:px-50'>

                <div className='w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-10 h-full relative pt-10 md:p-0'>
                    <div className='flex flex-col gap-8 items-start md:items-end text-left h-full w-full md:w-3xl'>

                        <div>
                            <GradText text='About' size={15} />
                            <p className='text-muted-text text-xs leading-3.5 md:leading-5 md:text-sm mt-2'>{about.intro}</p>
                        </div>

                        <div className='pt-4 border-t border-border-20 w-full'>
                            <h1 className='text-text font-bold tracking-tight text-xl uppercase pb-1 md:pb-2'>{about.story.head}</h1>
                            <p className='text-muted-text text-xs md:text-sm leading-4 md:leading-5 whitespace-pre-line'>{about.story.body}</p>
                        </div>

                        <div className='pt-6 border-t border-border-20 w-full'>
                            <h1 className='text-text font-bold tracking-tight text-xl uppercase pb-1 md:pb-2'>{about.mission.head}</h1>
                            <p className='text-muted-text text-xs md:text-sm leading-4 md:leading-5 whitespace-pre-line'>{about.mission.body}</p>

                            <div className='pt-2'>
                                {about.mission.points.map((point, i) => (
                                    <div key={i} className='flex items-center gap-2 pl-6'>
                                        <div className='w-1 h-1 bg-text/50 rounded-full'></div>
                                        <p className='text-muted-text text-xs md:text-sm leading-5 md:leading-6'>{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className='hidden md:block sticky top-50'>
                        <LogoAni size={70} />
                    </div>
                </div>

            </div>
        </PageTemplate>
    )
}