import React from 'react'
import privacy from '@/data/privacy'

export default function PrivacyPolicy() {
    document.title = "Privacy Policy - myResult®";

    return (
        <div className="w-full flex flex-col items-center p-20 py-40">

            {/* Heading */}
            <div className="borde text-[17vh] uppercase tracking-tighter font-bold text-[#ECF1F0] pb-30">
                <h2 className="leading-36 pr-80">Privacy </h2>
                <h2 className="leading-33 pl-80">Policy</h2>
            </div>

            <div className='w-6xl'>
                {privacy.points.map((item, i) => (
                    <div key={i} className='flex flex-col gap-1 md:flex-row md:gap-24 text-3xl items-start w-full border-b last:border-0 py-8 px-4 border-border-10 round'>
                        <h1 className='text-text font-bold tracking-tight w-full md:w-64 text-2xl shrink-0'>{i + 1}. {item.head}</h1>
                        <p className='text-muted-text text-xs md:text-sm text-left leading-4 md:leading-snug'>{item.subHead}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}