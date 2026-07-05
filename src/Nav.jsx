import React from 'react'

export default function Nav() {

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Login', href: '/login' },
        { name: 'Register', href: '/register' }
    ]

    return (
        <div className="border-b border-white/10 w-full h-14 z-999999 flex items-center justify-center fixed top-0 left-0 backdrop-blur-[1vh]">
            <div className='flex items-center justify-between w-full p-4'>
                <div>
                    <h1 className='font-bold text-xl'>myResult</h1>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs md:gap-3 md:text-lg">
                    {navItems.map((item) => (
                        <a key={item.name} href={item.href} className="text-white text-md">
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
