import { useRef, useEffect } from 'react'
import { motion, useAnimationFrame, useMotionValue, useTransform, wrap } from 'motion/react'

const trailImages = [1, 2, 3, 4, 5, 6, 7]

export default function Marquee({
    baseVelocity = 3,
    boostVelocity = 40,
    decay = 0.94,
    direction = 'left', // 'left' | 'right'
}) {
    const baseX = useMotionValue(0)
    const initialDirection = direction === 'right' ? 1 : -1
    const directionFactor = useRef(initialDirection)
    const boost = useRef(0)
    const touchStartY = useRef(0)

    const x = useTransform(baseX, (v) => `${wrap(-33.333, 0, v)}%`)

    useEffect(() => {
        directionFactor.current = direction === 'right' ? 1 : -1
    }, [direction])

    useEffect(() => {
        const applyScroll = (deltaY) => {
            // scroll flips relative to THIS marquee's own base direction,
            // instead of overwriting it with a global absolute direction
            const scrollSign = deltaY > 0 ? -1 : 1
            directionFactor.current = initialDirection * scrollSign
            boost.current = Math.min(boost.current + Math.abs(deltaY) * 0.15, boostVelocity)
        }

        const handleWheel = (e) => applyScroll(e.deltaY)
        const handleTouchStart = (e) => { touchStartY.current = e.touches[0].clientY }
        const handleTouchMove = (e) => {
            const currentY = e.touches[0].clientY
            applyScroll(touchStartY.current - currentY)
            touchStartY.current = currentY
        }

        window.addEventListener('wheel', handleWheel, { passive: true })
        window.addEventListener('touchstart', handleTouchStart, { passive: true })
        window.addEventListener('touchmove', handleTouchMove, { passive: true })
        return () => {
            window.removeEventListener('wheel', handleWheel)
            window.removeEventListener('touchstart', handleTouchStart)
            window.removeEventListener('touchmove', handleTouchMove)
        }
    }, [boostVelocity, initialDirection])

    useAnimationFrame((t, delta) => {
        const dt = delta / 4000
        const speed = baseVelocity + boost.current
        baseX.set(baseX.get() + directionFactor.current * speed * dt)
        boost.current *= Math.pow(decay, delta / 10)
    })

    const items = [...trailImages, ...trailImages, ...trailImages]

    return (
        <div className="w-full overflow-hidden">
            <motion.div className="flex items-center w-max py-6" style={{ x }}>
                {items.map((num, i) => (
                    <div key={i} className="flex items-center md:gap-6 md:mx-4 mx-3 gap-5">
                        <h1 className="md:text-7xl text-6xl flex items-center justify-center font-bold tracking-tighter whitespace-nowrap">myResult<span className='font-normal'>®</span></h1>
                        <img src={`/trail-images/${num}.png`} className="h-22 md:h-30 w-auto" />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}