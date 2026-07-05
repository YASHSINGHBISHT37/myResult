import React from 'react'

export default function Login() {
  return (
    <div className="w-full h-full flex items-center justify-center ">

      <div className="w-xl border border-white/20 rounded-xl p-6 px-10">
        <div className='flex flex-col items-center justify-center mb-5'>
          <img src="/favicon/logo.png" className='w-80 aspect-square p-10' />
          <h1 className='text-4xl tracking-tight font-extrabold'>IPU Result Portal</h1>
          <h1 className='text-md'>Check IPU results, download PDFs, and calculate SGPA/CGPA</h1>
        </div>

        <div className='flex flex-col gap-5 w-full mt-16'>

          <div className='flex flex-col gap-1'>
            <h1 className='text-md'>Enrollment Number</h1>
            <input className='border border-white/20 rounded-full px-4 w-full p-2' type="text" placeholder='Enter Enrollment Number' />
          </div>

          <div className='flex flex-col gap-1'>
            <h1 className='text-md'>Password</h1>
            <input className='border border-white/20 rounded-full px-4 w-full p-2' type="text" placeholder='Enter Password' />
          </div>

          <div className='flex flex-col gap-1'>
            <h1 className='text-md'>Captcha</h1>
            <div className='flex gap-2'>
              <input className='border border-white/20 rounded-full px-4 w-full p-2' type="text" placeholder='Enter Captcha' />
              <div className='bg-white/10 rounded-full border border-black/40 px-5 w-40 p-2 flex items-center justify-center'></div>
              <div className='bg-white/10 rounded-full border border-black/40 px-5 w-10 p-2 flex items-center justify-center cursor-pointer'>
                {/* <i className="ph ph-arrows-counter-clockwise"></i> */}
              </div>
            </div>
          </div>

          <button className='rounded-full border bg-[#1b1b1b] cursor-pointer border-black/40 p-2 w-full text-white'>Result</button>
          <h1 className='text-center text-white/60 text-sm'>Data is fetched directly from GGSIPU Exam Portal.</h1>
        </div>
      </div>
    </div>
  )
}
