import React from 'react'
import LogoAni from '@/components/ui/LogoAni'
import { Link, useLocation } from "react-router-dom";
import LineAni from '../ui/LineAni'
import GradText from '../ui/GradText';
import { fancyImgs } from "@/data/FancyImgs"
import ImageTrail, { ImageTrailItem, } from "@/components/fancy/image/image-trail"

export default function F() {
    const location = useLocation();
    const pathname = location.pathname;

    const footerLinks = [
        {
            header: 'Navigation',
            links: [
                { name: 'Home', href: '/' },
                { name: 'Ipu Result', href: '/ipu-result' },
                { name: 'Study Resurces', href: '/study-resources' },
                { name: 'Leaderboard', href: '/leaderboard' },
            ]
        },
        {
            header: 'Support',
            links: [
                { name: 'Contact', href: '/Contact' },
                { name: 'About Us', href: '/About' },
                { name: 'Privacy Policy', href: '/Privacy' },
                { name: 'Terms of Service', href: '/Terms' },
            ]
        },
        {
            header: 'Connect',
            links: [
                { name: 'Email', href: 'mailto:yashbisht0007@gamail.com' },
                { name: 'Github', href: 'https://github.com/yourusername' },
                { name: 'Linkedin', href: 'https://linkedin.com/in/yourusername' },
                { name: 'Instagram', href: 'https://instagram.com/yourusername' },
            ]
        },

    ]

    return (
        <div className='w-screen h-screen sticky bottom-0 left-0 z-0 flex items-end bg-muted-bg'>
            <div className='w-200 aspect-square rounded-full bg-white/70 absolute -top-160 left-140 backdrop-blur-3xl -z-999'></div>

            <div className='w-full h-full flex items-end bg-muted-bg backdrop-blur-[20vh]'>

                <div className="fixed inset-0 z-40 pointer-events-auto">
                    <ImageTrail
                        threshold={80}
                        keyframes={{ opacity: [0, 1, 1, 0], scale: [1, 1, 2] }}
                        keyframesOptions={{
                            opacity: { duration: 2, times: [0, 0.001, 0.9, 1] },
                            scale: { duration: 2, times: [0, 0.8, 1] },
                        }}
                        repeatChildren={1}>
                        {[...fancyImgs, ...fancyImgs].map((image, index) => (
                            <ImageTrailItem key={index}>
                                <div className="h-100 w-100 sm:w-50 sm:h-50 relative overflow-hidden">
                                    <img src={image.url} alt="image" className="w-full h-full object-cover" />
                                </div>
                            </ImageTrailItem>
                        ))}
                    </ImageTrail>
                </div>
                
                <div className='w-full flex flex-col items-center'>

                    <div className=' w-6xl relative z-9999 border border-border-10 rounded-4xl p-8 bg-bg/90 backdrop-blur-2xl pointer-events-none'>
                    
                        <div className='flex justify-between md:pb-40'>

                            {/* Links */}
                            <div className="flex items-start gap-14 text-md md:text-xl">
                                {footerLinks.map((item, i) => (
                                    <div key={i}>
                                        <h1 className="pb-2 text-text">{item.header}</h1>
                                        <div className="flex flex-col">
                                            {item.links.map((link, j) => (
                                                <Link key={j} to={link.href}
                                                    className={`cursor-pointer pointer-events-auto leading-5.5 hover:text-text transition-all duration-200 ease-in-out ${pathname === link.href ? "text-muted-text" : "text-muted-text"}`}>
                                                    <LineAni data={link.name} color="white" />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Email Address */}
                            <div className="w-sm hidden md:block text-text">
                                <p className="leading-5.5 pb-8 text-xl">Keep in the loop with the myResult® newsletter.</p>
                                <input className="outline-0 border-b border-border-20 w-full pb-2 pointer-events-auto" type="text" placeholder="Email Address" />
                            </div>
                        </div>

                        <div className="w-sm flex flex-col gap-2">
                            <div className="flex items-center gap-1">
                                <LogoAni size={4} />
                                <h1 className="text-lg text-text">myResult</h1>
                            </div>
                            <p className="text-xs leading-4.5 text-muted-text pl-1">
                                Transform passive learning into active remembering. Smriti AI helps you retain knowledge faster with AI-powered study tools and spaced repetition.
                            </p>
                        </div>

                    </div>

                    <div className='md:h-70 h-23 w-full overflow-hidden relative'>
                        <h1 className='text-center w-full font-bold md:text-[36vh] text-[11vh] pointer-events-none z-99 -bottom-12 md:-bottom-70 tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-linear-to-tr from-white to-black bg-clip-text text-transparent'>
                            myResult<span className="font-normal ">®</span>
                        </h1>
                    </div>

                    <div className='w-full px-10 z-9999 relative bg-black'>
                        <div className='hidden md:flex border-t border-border-10 items-center justify-between text-sm text-text px-6 p-4'>
                            <h1>© 2026 myResult</h1>
                            <h1>All rights reserved.</h1>
                            <h1>Location: Delhi, India</h1>
                            <h1>Devloped by Yash Singh Bisht</h1>
                        </div>

                    </div>
                </div>
            </div>

            
        </div>
    )
}