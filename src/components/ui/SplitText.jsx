import { motion } from "motion/react"

const charVariants = {
    hidden: { y: '100%' },
    visible: {
        y: '0%',
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
}

export default function SplitText({ text, className = "" }) {
    return (
        <span className={`inline-flex overflow-hidden ${className}`}>
            {text.split("").map((char, index) => (
                <span key={index} className="overflow-hidden inline-block">
                    <motion.span
                        variants={charVariants}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                </span>
            ))}
        </span>
    )
}