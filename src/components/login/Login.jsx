import { BorderTrail } from '@/components/motion-primitives/border-trail';
import LogoAni from '@/components/ui/LogoAni';
import TextPing from '@/components/login/TextPing';
import BottomLinks from '@/components/login/BottomLinks';
import LoginForm from './LoginForm';


export default function Login() {
    const imgs = [1, 2, 3, 4, 5]

    return (
        <div className='w-full h-screen fixed top-0 left-0 inset-0 bg-bg/60 backdrop-blur-3xl md:bg-black/60 z-9999999 flex items-en items-center justify-center md:pt-10'>
            <div className='flex items-center md:gap-8 md:p-16 md:py-14 md:border border-border-10 rounded-4xl md:rounded-[4vh] md:bg-bg/70 z-99 md:backdrop-blur-3xl'>
                <LoginForm />
                <img src='/trail-images/1.png' className='w-[70vh] h-[70vh] hidden md:block aspect-square scale-x-[1] borde p-6' />
            </div>

            <TextPing />
        </div>

    )
}