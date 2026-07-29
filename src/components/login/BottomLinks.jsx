import React from 'react'

export default function BottomLinks() {
    const loginLinks = ['Contact', 'About Us', 'Privacy Policy', 'Terms of Service', 'Email', 'Twitter', 'Linkedin', 'Instagram']

    return (
        <div className='flex text-muted-text text-xs dark:text-muted-text gap-2 relative z-99 pb-4'>
            {loginLinks.map((item, i) => (
                <div className='flex items-center gap-2' key={item}>
                    <p className='cursor-pointer hover:text-[#ffcc00] transition-all ease-in-out duration-200'>{item}</p>
                    {i !== loginLinks.length - 1 && (
                        <div className='w-1 h-1 rounded-full bg-sec-bg dark:bg-sec-bg'></div>
                    )}
                </div>
            ))}
        </div>
    )
}
