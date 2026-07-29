import { useState, useEffect, useCallback } from 'react'

function FloatingInput({ label, type = 'text', showToggle = false, value, onChange }) {
    const [focused, setFocused] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const isFloating = focused || value.length > 0

    return (
        <div className='border flex items-center gap-2 md:w-md px-4 h-12 rounded-2xl border-border-20 overflow-hidden relative bg-muted-bg'>
            <p className={`absolute left-4 text-muted-text transition-all duration-200 pointer-events-none ease-in-out ${isFloating ? 'top-1 text-[1.2vh]' : 'top-1/2 -translate-y-1/2 text-sm'}`}>
                {label}
            </p>
            <input
                type={showToggle ? (showPassword ? 'text' : 'password') : type}
                value={value}
                onChange={onChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className='w-full h-full outline-0 bg-transparent pt-4 text-text'
            />
            {showToggle && (
                <i onClick={() => setShowPassword((prev) => !prev)}
                    className={`ph ${showPassword ? 'ph-eye' : 'ph-eye-closed'} text-muted-text cursor-pointer hover:text-text/90 transition-all duration-250 ease-in-out`}></i>
            )}
        </div>
    )
}

const API_BASE = import.meta.env.VITE_API_BASE_URL || ''

export default function LoginForm({ onLoginSuccess }) {
    const [sessionId, setSessionId] = useState(null)
    const [captchaImage, setCaptchaImage] = useState(null)
    const [captchaLoading, setCaptchaLoading] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [captchaText, setCaptchaText] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    return (
        <div className='flex flex-col relative text-text'>

            <div className='flex flex-col items-center justify-center gap-6 pb-10'>
                <h1 className='text-[6vh] leading-12 md:leading-16 md:text-[8vh] tracking-tighter font-bold text-left bg-linear-to-tr from-white to-bg bg-clip-text text-transparent'>
                    One Click Away <br />
                    from Your Result.
                </h1>
            </div>



            <div className='flex flex-col gap-4 md:items-center '>
                <FloatingInput label='Enter Enrollment Number' value={username} onChange={(e) => setUsername(e.target.value)} />
                <FloatingInput label='Enter Password' showToggle value={password} onChange={(e) => setPassword(e.target.value)} />
                <FloatingInput label='Enter CAPTCHA' value={captchaText} onChange={(e) => setCaptchaText(e.target.value)} />

                <div className='md:w-md gap-4 flex items-center relative'>
                    <div className='flex-1 h-13 border border-border-20 rounded-xl bg-muted-bg animate-pulse overflow-hidden'></div>
                    <button
                        type="button"
                        className='border h-13 px-4 p-2.5 bg-muted-bg rounded-2xl border-border-20 text-muted-text cursor-pointer flex gap-2 items-center justify-center disabled:opacity-50'>
                        <i className={`ph ph-arrows-clockwise text-2xl text-muted-text animate-spin`}></i>
                        <h1 className='text-muted-text text-sm font-bold'>New CAPTCHA</h1>
                    </button>
                    {/* {error && <p className='text-red-400 text-xs w-sm text-center absolute -bottom-10'>{error}</p>} */}
                </div>

                <button type="button"
                    className='border mt-14 md:w-md px-5 h-12 rounded-full border-border transition-all ease-in-out duration-500 bg-white hover:bg-[#ffcc00] cursor-pointer text-bg font-bold text-md disabled:opacity-50'>
                    {loading ? 'Logging in...' : 'See Result'}
                </button>

                <p className='text-xs text-muted-text text-center'>Data is fetched directly from GGSIPU Exam Portal.</p>
            </div>
        </div>
    )
}