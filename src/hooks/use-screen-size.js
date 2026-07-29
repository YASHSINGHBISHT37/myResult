import { useState, useEffect } from "react"

const useScreenSize = () => {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const lessThan = (breakpoint) => {
    const breakpoints = { sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 }
    return size.width < breakpoints[breakpoint]
  }

  const greaterThan = (breakpoint) => {
    const breakpoints = { sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 }
    return size.width >= breakpoints[breakpoint]
  }

  return { ...size, lessThan, greaterThan }
}

export default useScreenSize