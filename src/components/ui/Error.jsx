import { motion } from "motion/react";

export default function Error({ size }) {
    return (
        <div style={{ width: `${size}vh`, height: `${size}vh` }} className="relative flex items-center justify-center">
            <motion.img
                animate={{ rotate: 360 }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                }}
                src="/imgs/bg-w.png"
                className="w-full h-full" />
            <img src="/imgs/error.png" className="w-full h-full absolute" />
        </div>
    );
}


