import { useEffect, useRef } from 'react'
import { BorderTrail } from '@/components/motion-primitives/border-trail';
import LogoAni from '@/components/ui/LogoAni';
import TextPing from '@/components/login/TextPing';
import BottomLinks from '@/components/login/BottomLinks';
import LoginForm from './LoginForm';


export default function Login() {
    const imgs = [1, 2, 3, 4, 5]
    const lockedPosition = useRef({ x: 0, y: 0 })

    useEffect(() => {
        lockedPosition.current = { x: window.scrollX, y: window.scrollY }

        const html = document.documentElement
        const body = document.body
        const originalHtmlOverflow = html.style.overflow
        const originalBodyOverflow = body.style.overflow

        html.style.overflow = 'hidden'
        body.style.overflow = 'hidden'

        const forceScrollBack = () => {
            window.scrollTo(lockedPosition.current.x, lockedPosition.current.y)
        }

        const preventScroll = (e) => {
            e.preventDefault()
            e.stopPropagation()
        }

        const preventScrollKeys = (e) => {
            const scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ']
            if (scrollKeys.includes(e.key)) e.preventDefault()
        }

        window.addEventListener('wheel', preventScroll, { passive: false })
        window.addEventListener('touchmove', preventScroll, { passive: false })
        window.addEventListener('keydown', preventScrollKeys, { passive: false })
        window.addEventListener('scroll', forceScrollBack, { passive: true })

        return () => {
            html.style.overflow = originalHtmlOverflow
            body.style.overflow = originalBodyOverflow
            window.removeEventListener('wheel', preventScroll)
            window.removeEventListener('touchmove', preventScroll)
            window.removeEventListener('keydown', preventScrollKeys)
            window.removeEventListener('scroll', forceScrollBack)
        }
    }, [])

    return (
        <div className='w-full h-screen fixed top-0 left-0 inset-0 bg-bg/60 backdrop-blur-3xl md:bg-black/60 z-9999999 flex items-en items-center justify-center md:pt-10'>
            <div className='flex items-center md:gap-8 md:p-16 md:py-14 md:border border-border-10 rounded-4xl md:rounded-[4vh] md:bg-bg/70 z-99 md:backdrop-blur-3xl'>
                <LoginForm />
                <img src='/trail-images/7.png' className='w-[70vh] h-[70vh] hidden md:block aspect-square scale-x-[1] p-6' />
            </div>

            {/* <TextPing /> */}
        </div>

    )
}