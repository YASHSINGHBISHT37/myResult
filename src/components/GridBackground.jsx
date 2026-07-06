import React, { useEffect, useRef, useState } from 'react'

export default function GridBackground() {
    const containerRef = useRef(null)
    const [grid, setGrid] = useState({ cols: 0, rows: 0 })
    const [trail, setTrail] = useState([]) // { id, timestamp }
    const boxSize = 32 // px, poore page ke liye thoda bada rakha

    useEffect(() => {
        const calculateBoxes = () => {
            const cols = Math.ceil(window.innerWidth / boxSize)
            const rows = Math.ceil(window.innerHeight / boxSize)
            setGrid({ cols, rows })
        }
        calculateBoxes()
        window.addEventListener('resize', calculateBoxes)
        return () => window.removeEventListener('resize', calculateBoxes)
    }, [])

    useEffect(() => {
        const handleMove = (e) => {
            const col = Math.floor(e.clientX / boxSize)
            const row = Math.floor(e.clientY / boxSize)
            const id = row * grid.cols + col
            setTrail((prev) => {
                const filtered = prev.filter((t) => t.id !== id)
                return [...filtered, { id, timestamp: Date.now() }]
            })
        }
        window.addEventListener('mousemove', handleMove)
        return () => window.removeEventListener('mousemove', handleMove)
    }, [grid.cols])

    useEffect(() => {
        const interval = setInterval(() => {
            setTrail((prev) => prev.filter((t) => Date.now() - t.timestamp < 1000))
        }, 100)
        return () => clearInterval(interval)
    }, [])

    const getStyle = (id) => {
        const entry = trail.find((t) => t.id === id)
        if (!entry) return { backgroundColor: 'rgba(255,255,255,0)', transition: 'background-color 800ms ease-out' }
        const age = Date.now() - entry.timestamp
        const isRecent = age < 100
        return {
            backgroundColor: isRecent ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.05)',
            transition: `background-color ${isRecent ? 50 : 800}ms ease-out`
        }
    }

    return (
        <div
            ref={containerRef}
            className='fixed inset-0 grid pointer-events-none -z-10'
            style={{ gridTemplateColumns: `repeat(${grid.cols}, ${boxSize}px)` }}
        >
            {Array.from({ length: grid.cols * grid.rows }).map((_, i) => (
                <div
                    key={i}
                    className='hover:border border-black/5'
                    style={{ width: boxSize, height: boxSize, ...getStyle(i) }}
                ></div>
            ))}
        </div>
    )
}