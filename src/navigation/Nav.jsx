import React, { useState, useEffect } from 'react'

export default function Nav() {

    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('theme')
        return saved || 'dark'
    })

    useEffect(() => {
        const root = document.documentElement
        if (theme === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    }

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Login', href: '/login' },
        { name: 'Register', href: '/register' }
    ]

    const handleEnter = (e) => {
        const line = e.currentTarget.querySelector('.underline-el')
        line.style.transformOrigin = 'left'
        line.style.transform = 'scaleX(1)'
    }

    const handleLeave = (e) => {
        const line = e.currentTarget.querySelector('.underline-el')
        line.style.transformOrigin = 'right'
        line.style.transform = 'scaleX(0)'
    }

    return (
        <div className="border-b border-white/0 w-full h-16 z-999999 flex items-center justify-center fixed top-0 left-0 dark:bg-black dark:text-black ">
            <div className='flex items-center justify-between w-full p-4 px-6'>
                <div>
                    <h1 className='text-xl dark:text-text'>myResult</h1>
                </div>

                <div className="md:flex items-center justify-center gap-2 text-xs md:gap-3 md:text-lg hidden md:block">
                    {navItems.map((item) => (
                        <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className='relative inline-block overflow-hidden' >
                            <a href={item.href} className="dark:text-text text-sm"> {item.name} </a>
                            <div className='underline-el absolute bottom-0 left-0 w-full h-[1px] bg-text dark:bg-text transition-transform duration-250 ease-in-out' style={{ transform: 'scaleX(0)', transformOrigin: 'right' }} ></div>
                        </div>
                    ))}
                </div>



                <div className='flex items-center gap-3'>
                    <div onClick={toggleTheme} className='border dark:border-border border-border rounded-md w-8 h-8 flex items-center justify-center cursor-pointer bg-muted-bg dark:bg-muted-bg relative overflow-hidden'>
                        <i className={`ph ph-sun absolute transition-all duration-250 ${theme === 'dark' ? 'opacity-100 rotate-0 text-text' : 'opacity-0 rotate-90'}`}></i>
                        <i className={`ph ph-moon absolute transition-all duration-250 ${theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}></i>
                    </div>

                    <div className='group p-1 px-1 pl-1.5 h-9 rounded-lg cursor-pointer flex items-center gap-2 overflow-hidden border border-border dark:border-border backdrop-blur-lg'>
                        <div className='flex flex-col h-5 overflow-hidden'>
                            <div className='flex flex-col transition-transform duration-250 ease-out group-hover:-translate-y-1/2 font-semibo text-sm dark:text-text'>
                                <h1 className='h-full flex items-center'>Connect With Us</h1>
                                <h1 className='h-full flex items-center'>Connect With Us</h1>
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center h-full overflow-hidden relative w-7 bg-sec-bg dark:bg-sec-bg border border-border dark:border-border rounded-sm text-md dark:text-text'>
                            <i className="ph ph-arrow-up-right absolute transition-transform duration-250 ease-out group-hover:translate-x-5 group-hover:-translate-y-5"></i>
                            <i className="ph ph-arrow-up-right absolute -translate-x-5 translate-y-5 transition-transform duration-250 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
