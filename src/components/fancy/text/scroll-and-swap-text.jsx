import React, { useMemo, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react"
import { cn } from "@/lib/utils"

// handy function to extract text from children
const extractTextFromChildren = children => {
  // Handle null/undefined
  if (children == null) return ""

  // Handle string
  if (typeof children === "string") return children

  // Handle number
  if (typeof children === "number") return String(children);

  // Handle arrays (including fragments)
  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join("");
  }

  // Handle React elements
  if (React.isValidElement(children)) {
    const props = (children).props
    const childText = props.children

    // Recursively extract text from children
    if (childText != null) {
      return extractTextFromChildren(childText);
    }

    return ""
  }
}

/**
 * ScrollAndSwapText creates a scroll-triggered text animation where text slides vertically
 * based on scroll progress.
 */
const ScrollAndSwapText = ({
  children,
  as = "span",
  offset = ["0 0", "0 1"],
  className,
  containerRef,
  springConfig = { stiffness: 200, damping: 30 },
  ...props
}) => {
  const ref = useRef(null)

  // Convert children to string for processing with error handling
  const text = useMemo(() => {
    try {
      return extractTextFromChildren(children);
    } catch (error) {
      console.error(error)
      return ""
    }
  }, [children])

  // Track scroll progress within the specified container and target element
  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: ref,
    offset: offset, // framer motion doesnt export the type, so we have to cast it, sorry :/
  })

  // Apply spring physics to smooth the scroll-based animation
  const springScrollYProgress = useSpring(scrollYProgress, springConfig)

  // Transform scroll progress into vertical translation values
  // Original text moves from 0% to -100% (slides up and out)
  const top = useTransform(springScrollYProgress, [0, 1], ["0%", "-100%"])
  // Replacement text moves from 100% to 0% (slides up from below)
  const bottom = useTransform(springScrollYProgress, [0, 1], ["100%", "0%"])

  const ElementTag = as

  return (
    <ElementTag
      className={cn("flex overflow-hidden relative items-center justify-center p-0", className)}
      ref={ref}
      {...props}>
      <span className="relative text-transparent" aria-hidden="true">
        {text}
      </span>
      <motion.span className="absolute" style={{ top: top }}>
        {text}
      </motion.span>
      <motion.span className="absolute" style={{ top: bottom }} aria-hidden="true">
        {text}
      </motion.span>
    </ElementTag>
  );
}

ScrollAndSwapText.displayName = "ScrollAndSwapText"

export default ScrollAndSwapText
