import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import LogoAni from "../ui/LogoAni";
import { Magnetic } from '../motion-primitives/magnetic';
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { TextMorph } from '@/components/motion-primitives/text-morph';

const navItems = [
    { name: "Home", href: "/" },
    { name: "IPU Result", href: "/ipu-result" },
    { name: "Study Resource", href: "/study-resources" },
    { name: "Leaderboard", href: "/leaderboard" },
    { name: "About Us", href: "/about" },
    // { name: "Privacy Policy", href: "/privacy-policy" },
    // { name: "Terms of Use", href: "/terms-of-use" },
]

const social = [
    { name: "Email", href: "mailto:yashbisht0007@gmail.com" },
    { name: "Github", href: "https://github.com/yourusername" },
    { name: "Linkedin", href: "https://linkedin.com/in/yourusername" },
    { name: "Instagram", href: "https://instagram.com/yourusername" },
]

export default function Nav() {
    const location = useLocation();
    const pathname = location.pathname;
    const [isOpen, setIsOpen] = useState(false)
    const [text, setText] = useState('Menu')
    const [icon, setIcon] = useState('ph ph-list')

    const toggleMenu = () => {
        setIsOpen((prev) => !prev)
        setText((prev) => (prev === 'Menu' ? 'Close' : 'Menu'))
        setIcon((prev) => (prev === 'ph ph-list' ? 'ph ph-x' : 'ph ph-list'))
    }

    const closeMenu = () => {
        setIsOpen(false)
        setText('Menu')
        setIcon('ph ph-list')
    }

    const contVar = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.04 },
        }
    }

    const textVar = {
        hidden: { y: '100%' },
        visible: {
            y: '0%',
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
        },
    }

    const menuOverlay = (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                    animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
                    exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ WebkitBackdropFilter: 'blur(24px)' }}
                    className='flex flex-col justify-between w-full fixed top-0 left-0 bg-black/70 z-999999 p-5 pt-24 pb-8 h-screen text-[#EFEAE3]/80'>
                    <motion.div
                        variants={contVar}
                        initial="hidden"
                        animate="visible"
                    >
                        {navItems.map((item) => (
                            <div key={item.href} className="overflow-hidden text-right">
                                <motion.div variants={textVar}>
                                    <Link to={item.href} onClick={closeMenu} className={`text-4xl md:text-7xl tracking-tighter cursor-pointer leading-10 md:leading-18 pr-2 font-bold  ${pathname === item.href ? "text-text" : "text-muted-text"}`}>
                                        {item.name}
                                    </Link>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={contVar}
                        initial="hidden"
                        animate="visible"
                        className="pb-10"
                    >
                        {social.map((item) => (
                            <div key={item.href} className="overflow-hidden">
                                <motion.div variants={textVar}>
                                    <a
                                        href={item.href}
                                        target={item.href.startsWith('mailto:yashbisht0007@gmail.com') ? undefined : '_blank'}
                                        rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                                        className={`text-4xl md:text-6xl tracking-tighter leading-10 md:leading-15 font-bold cursor-pointer`}>
                                        {item.name}
                                    </a>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )

    return (
        <>
            <nav className="w-full fixed left-0 top-0 flex items-center justify-between p-4 md:p-5 md:px-7 z-9999999999 backdrop-blur-xs">
                <div className="flex items-center gap-2 cursor-pointer">
                    <LogoAni size={4.4} />
                    {/* <h1 style={{ fontSize: `2.6vh` }} className="font-bold mix-blend-difference tracking-tighter bg-linear-to-tr to-white from-[#333] bg-clip-text text-transparent">myResult
                        <span className="font-normal">®</span>
                    </h1> */}

                    <h1 style={{ fontSize: `2.6vh` }} className="font-bold mix-blend-difference tracking-tighter">myResult
                        <span className="font-normal">®</span>
                    </h1>
                </div>

                <div className="hidden md:flex items-center justify-center gap-4 text-lg">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={`text-sm transition-all duration-250 ease-in-out ${pathname === item.href ? "text-text" : "text-muted-text"}`}>
                            <Magnetic>
                                <button type='button' className='transition-all duration-300 cursor-pointer flex items-center gap-3 '>
                                    {item.name}
                                </button>
                            </Magnetic>
                        </Link>
                    ))}
                </div>

                <div className="hidden md:block cursor-pointer">
                    <h1 className="text-2xl tracking-tighter">Connect With Us</h1>
                </div>

                <div onClick={toggleMenu} className="flex md:hidden items-center justify-end gap-2 border border-border-20 rounded-full p-1.5 pr-4 cursor-pointer bg-bg/60 backdrop-blur-md w-25">
                    <i className={`${icon} text-lg`}></i>
                    <TextMorph>{text}</TextMorph>
                </div>
            </nav>

            {createPortal(menuOverlay, document.body)}
        </>
    )
}