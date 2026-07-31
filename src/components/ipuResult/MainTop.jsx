import { TextShimmer } from '@/components/motion-primitives/text-shimmer';
import { Tilt } from '../motion-primitives/tilt';
import ChooseSem from './ChooseSem';

function LogoutButton() {
    return (
        <div className="flex items-center gap-2 border rounded-2xl border-border-20 p-2 px-3 pr-3 bg-bg-20 backdrop-blur-2xl cursor-pointer">
            <i className="ph ph-arrow-left"></i>
            <h1 className="text-sm font-bold">Logout</h1>
        </div>
    )
}

function PDFExport() {
    return (
        <div className="flex items-center gap-2 border rounded-2xl border-border-20 p-2 px-3 backdrop-blur-2xl cursor-pointer">
            <i className="ph ph-download-simple text-text"></i>
            <h1 className="text-sm font-bold pr-1 text-text">Export PDF</h1>
            <i className="ph ph-caret-down text-muted-text"></i>
        </div>
    )
}

export default function MainTop() {
    const details = [
        { label: "Enrollment No.", value: '03990302024' },
        { label: "Program", value: 'BACHELOR OF COMPUTER APPLICATIONS' ?? "—" },
        { label: "Institute", value: 'INSTITUTE OF INNOVATION IN TECHNOLOGY & MANAGEMENT' ?? "—" },
        { label: "Year of admission", value: 2024 ?? "—" },
    ]

    return (
        <div className='flex flex-col gap-4 w-full h-full'>

            {/* Logout and PDF */}
            <div className="flex items-center justify-between">
                <LogoutButton />
                <PDFExport />
            </div>

            <div className="w-full h-full backdrop-blur-2xl rounded-xl flex flex-col gap-2">


                <h1 className='text-5xl tracking-tighter font-bold text-text px-3 uppercase'>yash singh bisht</h1>

                
                
                <div className='flex justify-between h-full border p-8 border-border-20 rounded-4xl bg-[#ECF1F0]'>
                    <div className="flex flex-col gap-4 h-full">
                        <h1 className='text-5xl font-bold text-text px-3 uppercase'>yash singh bisht</h1>

                        <div className="w-full items justify-between grid grid-cols-2 gap-3 h-38">
                            {details.map((detail) => (
                                <Tilt key={detail.label} rotationFactor={8} isRevese className='w-full flex flex-col justify-center rounded-2xl border border-border-10 px-4 bg-bg-20' >
                                    <h1 className="text-muted-text text-xs uppercase">{detail.label}</h1>
                                    <p className="font-extrabold truncate text-sm bg-linear-to-tl from-white to-text bg-clip-text text-transparent">{detail.value}</p>
                                </Tilt>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col w-80 gap-4 items-center justify-center self-stretch'>
                        <div className="w-80 flex flex-col justify-end items-center">
                            <p className="text-sec-text text-md font-bold uppercase pb-3">Cumulative GPA</p>
                            <TextShimmer className="text-9xl tracking-tight font-bold" duration={1}>9.39</TextShimmer>
                            <p className="text-muted-text text-xs">Out of 10.00</p>
                        </div>
                    </div>
                </div>

                {/* Semester selector — single source of truth */}
                <ChooseSem />
            </div>
        </div>
    )
}