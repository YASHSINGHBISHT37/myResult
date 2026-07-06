import React from 'react'

export default function Footer() {

    const footerLinks = [
        {
            header: 'Social Media',
            links: ['Email', 'Twitter', 'Linkedin', 'Instagram']
        },
        {
            header: 'Support',
            links: ['Contact', 'About Us', 'Privacy Policy', 'Terms of Service']
        },
    ]
    return (
        <div className='w-full fixed bottom-0 left-0 dark:bg-bg bg-bg z-10 flex items-end justify-center md:pb-58 pb-20 '>

            <div className='md:w-7xl w-[96%] flex flex-col gap-8 border p-6 md:p-8 dark:bg-muted-bg z-9 rounded-2xl border-border dark:border-border pointer-events-none bg-muted-bg'>

                {/* Top */}
                <div className='flex justify-between md:pb-20 pb-10 '>

                    {/* Links */}
                    <div className='flex items-center gap-10 text-md md:text-xl '>
                        {footerLinks.map((item, i) => (
                            <div key={i}>
                                <h1 className='pb-2 text-text'>{item.header}</h1>
                                <div className='text-md font-normal text-muted-text leading-5 md:leading-6'>
                                    {item.links.map((link, j) => (
                                        <p key={j} className='cursor-pointer'>{link}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Email Address */}
                    <div className='w-80 hidden md:block dark:text-text'>
                        <p className='leading-5.5 pb-8 text-xl '>Get industry insights and creative inspiration straight to your inbox.</p>
                        <input className='outline-0 border-b border-border dark:border-border w-full' type="text" placeholder='Email Address' />
                    </div>
                </div>

                <div className='w-80 md:hidden'>
                    <p className='md:leading-5.5 pb-8 md:text-xl text-sm leading-4'>Get industry insights and creative
                        inspiration straight to your inbox.</p>
                    <input className='outline-0 border-b border-white/70 w-full ' type="text" placeholder='Email Address' />
                </div>

                <div className='w-80 mb-6'>
                    <h1 className='text-xl pb-1.5 dark:text-text'>myResult</h1>
                    <p className='text-xs leading-4.5 dark:text-muted-text text-muted-text'>Transform passive learning into active remembering. Smriti AI helps you retain knowledge faster with AI-powered study tools and spaced repetition.</p>
                </div>

                <div className='hidden md:flex items-center justify-between text-sm text-text dark:text-text'>
                    <h1>© 2026 myResult. All rights reserved.</h1>
                    <h1>Location: Delhi, India</h1>
                    <h1>Made by Yash Singh Bisht</h1>
                </div>

                <div className='flex items-center gap-10 justify-between text-xs text-white/60 md:hidden'>
                    <h1>© 2026 myResult. <br /> All rights reserved.</h1>
                    <h1 className='text-right'>Made by <br /> Yash Singh Bisht</h1>
                </div>

            </div>

            <div className='md:h-70 h-23 w-full  overflow-hidden absolute bottom-0 '>
                <h1 className='text-center font-bold md:text-[32vh] text-[11vh] -bottom-12 md:-bottom-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-linear-to-tr to-white from-[#333]  dark:from-white dark:to-[#333] bg-clip-text text-transparent'>
                    myResult
                </h1>
            </div>

        </div>
    )
}