import MainTop from '@/components/ipuResult/MainTop'
import PageTemplate from '@/components/ui/PageTemplate'
import React from 'react'

export default function IpuResult() {
    document.title = "Ipu Result - myResult®";

    return (
        <PageTemplate>
            <div className='md:w-6xl'>
                <MainTop />
            </div>
        </PageTemplate>
    )
}
