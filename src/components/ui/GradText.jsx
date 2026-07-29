export default function GradText({ text, size }) {
    return (
        <h1 style={{ fontSize: `${size}vh` }} className="font-bold text-6xl tracking-tighter bg-linear-to-tr to-white from-[#333] bg-clip-text text-transparent">{text}</h1>
    )
}
