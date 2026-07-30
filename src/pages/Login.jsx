import { useNavigate } from 'react-router-dom'
import { BorderTrail } from '@/components/motion-primitives/border-trail';
import Logo from '@/components/home/Logo';
import AuthFlow from '@/components/login/auth/AuthFlow';
import TextPing from '@/components/login/TextPing';
import BottomLinks from '@/components/login/BottomLinks';


export default function Login() {
  document.title = "Login - myResult®";

  const navigate = useNavigate()

  const handleLoginSuccess = (sessionId) => {
    if (sessionId) {
      localStorage.setItem('sessionId', sessionId)
    }
    navigate('/Result')
  }

  return (
    <div className='w-screen h-screen md:pt-16 flex flex-col items-center justify-end dark:bg-bg bg-bg z-9999 relative'>
      <div className='flex h-full flex-col items-center justify-center overflow-hidden p-4 relative z-10 gap-10'>
        <div className='flex w-full h-200 gap-20 dark:bg-muted-bg/70 dark:border-border border-border border rounded-3xl px-20 pr-10 backdrop-blur-3xl overflow-hidden items-center  '>
          <AuthFlow onLoginSuccess={handleLoginSuccess}/>
          <Logo size={700} />
          
          <BorderTrail style={{ boxShadow: '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)', }} size={100} transition={{ duration: 10, repeat: Infinity, ease: 'linear', }}/>
        </div>
      </div>

      <BottomLinks/>
      <TextPing/>
    </div>
  )
}