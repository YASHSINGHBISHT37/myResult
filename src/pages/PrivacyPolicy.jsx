import React from 'react'
import privacy from '@/data/privacy'
import GradText from '@/components/ui/GradText'
import PageTemplate from '@/components/ui/PageTemplate'

export default function PrivacyPolicy() {
    return (
        <PageTemplate>
            <div className="md:w-6xl w-full flex flex-col">

                <div className='flex flex-col gap-2 pb-10 md:pb-26'>
                    <GradText text='Privacy Policy' size={15} />
                    <p className='text-text text-xs md:text-sm w-full md:w-3xl leading-3.5 md:leading-snug'>{privacy.subHead}</p>
                </div>

                {privacy.points.map((item, i) => (
                    <div key={i} className='flex flex-col gap-1 md:flex-row md:gap-24 items-start w-full border-b last:border-0 py-8 px-4 border-border-10 round'>
                        <h1 className='text-text font-bold w-full md:w-64 shrink-0'>{i + 1}. {item.head}</h1>
                        <p className='text-muted-text text-xs md:text-sm text-left leading-4 md:leading-snug'>{item.subHead}</p>
                    </div>
                ))}
            </div>
        </PageTemplate>
    )
}