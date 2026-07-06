import React from 'react'

export default function Login() {

  const login = [
    {
      name: 'Enrollment Number',
      placeholder: 'Enter Enrollment Number'
    },
    {
      name: 'Password',
      placeholder: 'Enter Password'
    }
  ]
  return (
    <div className='w-screen h-screen p-2 md:pt-16'>
      <div className='flex w-full h-full border-white/10 borde rounded-2xl overflow-hidden items-center justify-center'>

        {/* <div className=' w-1/2 h-full flex items-center justify-center relative overflow-hidden'>
          <h1 className='text-[50vh] font-bold leading-[40vh] opacity-10 bg-linear-to-tr to-white from-[#333] bg-clip-text text-transparent animate-ping'>RES <br />ULT</h1>

          <div className=' backdrop-blur-lg absolute w-full h-full '></div>
        </div> */}

        <div className='w-full h-full flex items-center justify-center p-4'>

          <div className='flex flex-col gap-4'>
            {login.map((item, i) => (
              <div>
                <h1 className='text-md pb-1'>{item.name}</h1>
                <input className='border p-2 rounded-full border-white/20 px-4 w-full' type="text" placeholder={item.placeholder} />
              </div>
            ))}
            <div>
              <h1 className='text-sm pb-1'>Captcha</h1>
              <div className='flex items-center gap-2'>
                <input className='border p-1 rounded-full border-white/20 px-4 w-full' type="text" placeholder='Enter CAPTCHA' />
                <input className='border p-1 rounded-full border-white/20 px-4 w-full' type="text" placeholder='Enter CAPTCHA' />
                <div></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
