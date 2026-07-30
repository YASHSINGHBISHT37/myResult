import GradText from '@/components/ui/GradText'
import Resource from '@/components/study-resources/Resource';
import PageTemplate from '@/components/ui/PageTemplate';

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
        <PageTemplate>
            <div className='flex w-full flex-col gap-2 pb-10 md:pb-26 text-center'>
                <h1 style={{ fontSize: '18vh' }} className="font-bold tracking-tighter bg-linear-to-tr leading-46 to-white from-[#333] bg-clip-text text-transparent">Study Resources</h1>
                <p className='text-sm text-muted-text text-center leading-3.5 md:leading-4'>
                    from Guru Gobind Singh Indraprastha University. <br className='hidden md:block' />
                </p>
            </div>

            <Resource />
        </PageTemplate>
    )
}