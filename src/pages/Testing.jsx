import { useRef, useEffect } from 'react'
import { motion, useAnimationFrame, useMotionValue, useTransform, wrap } from 'motion/react'

const trailImages = [1, 2, 3, 6, 7]
const items = [...trailImages, ...trailImages, ...trailImages]

function MarqueeRow({ direction = 'left', baseVelocity = 3, boostVelocity = 40, decay = 0.94 }) {
    const baseX = useMotionValue(0)
    const initialDirection = direction === 'right' ? 1 : -1
    const directionFactor = useRef(initialDirection)
    const boost = useRef(0)
    const touchStartY = useRef(0)

    const x = useTransform(baseX, (v) => `${wrap(-33.333, 0, v)}%`)

    useEffect(() => {
        directionFactor.current = initialDirection
    }, [initialDirection])

    useEffect(() => {
        const applyScroll = (deltaY) => {
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
        boost.current *= Math.pow(decay, delta / 8)
    })

    return (
        <motion.div className="flex items-center w-max" style={{ x }}>
            {items.map((num, i) => (
                <div key={i} className="flex items-center md:gap-">
                    <h1 className="md:text-[34vh] font-dot font-bol  text-6xl text-white/20 flex items-center justify-center tracking-tigh whitespace-nowrap uppercase">
                        myResult
                    </h1>
                    <img src={`/trail-images/${num}.png`} className="h-22 mx-12 md:h-70 w-auto object-contain" />
                </div>
            ))}
        </motion.div>
    )
}

export default function Testing({
    baseVelocity = 3,
    boostVelocity = 40,
    decay = 0.94,
    rows = ['left', 'right', 'left'], // yahan directions control karo
}) {
    return (
        <div className='w-full min-h-300 relative z-9999 bg-black flex items-center overflow-hidden'>
            <div className='flex flex-col gap-'>
                {rows.map((dir, i) => (
                    <MarqueeRow
                        key={i}
                        direction={dir}
                        baseVelocity={baseVelocity}
                        boostVelocity={boostVelocity}
                        decay={decay}
                    />
                ))}
            </div>
        </div>
    )
}