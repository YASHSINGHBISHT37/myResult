import React from 'react'

const handleEnter = (e) => {
    const line = e.currentTarget.querySelector('.underline-el')
    line.style.transformOrigin = 'left'
    line.style.transform = 'scaleX(1)'
}

const handleLeave = (e) => {
    const line = e.currentTarget.querySelector('.underline-el')
    line.style.transformOrigin = 'right'
    line.style.transform = 'scaleX(0)'
}

export default function LineAni({ data }) {
    return (
        <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="relative inline-block overflow-hidden">
            <p>{data}</p>
            <div
                className="underline-el absolute bottom-0 left-0 w-full h-px rounded-full transition-transform duration-250 ease-in-out"
                style={{
                    backgroundColor: 'black',
                    opacity: 0.6,
                    transform: 'scaleX(0)',
                    transformOrigin: 'right'
                }}
            ></div>
        </div>
    )
}