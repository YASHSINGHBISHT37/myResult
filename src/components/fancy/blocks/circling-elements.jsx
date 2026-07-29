import React, { Children, useState } from "react"

const CirclingElements = ({
  children,
  radius = 20,
  duration = 100,
  easing = "linear",
  direction = "normal",
  pauseOnHover = false,
  className = "",
}) => {
  const [paused, setPaused] = useState(false)
  const items = Children.toArray(children)
  const count = items.length

  return (
    <div
      className={` ${className}`}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <style>{`
        @keyframes circling-motion {
          from {
            transform: translate(-50%, -50%)
              rotate(var(--circling-offset))
              translateX(var(--circling-radius))
              rotate(calc(var(--circling-offset) * -1));
          }
          to {
            transform: translate(-50%, -50%)
              rotate(calc(var(--circling-offset) + (360deg * var(--circling-direction))))
              translateX(var(--circling-radius))
              rotate(calc((var(--circling-offset) + (360deg * var(--circling-direction))) * -1));
          }
        }
      `}</style>

      {items.map((child, index) => {
        const offset = (360 / count) * index

        return (
          <div
            key={index}
            className="absolute top-1/2 left-1/2"
            style={{
              "--circling-offset": `${offset}deg`,
              "--circling-radius": `${radius}px`,
              "--circling-direction": direction === "reverse" ? -1 : 1,
              animation: `circling-motion 20s linear infinite`,
              animationPlayState: paused ? "running" : "running",
            }}
          >
            {child}
          </div>
        )
      })}
    </div>
  )
}

export default CirclingElements