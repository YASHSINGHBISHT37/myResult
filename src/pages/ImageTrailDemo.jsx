import { fancyImgs } from "@/data/FancyImgs"
import ImageTrail, { ImageTrailItem, } from "@/components/fancy/image/image-trail"

const ImageTrailDemo = () => {
    return (
        <div className="w-dvw h-dvh bg-black relative z-9999">
            <ImageTrail
                threshold={80}
                keyframes={{ opacity: [0, 1, 1, 0], scale: [1, 1, 2] }}
                keyframesOptions={{
                    opacity: { duration: 2, times: [0, 0.001, 0.9, 1] },
                    scale: { duration: 2, times: [0, 0.8, 1] },
                }}
                repeatChildren={1}>
                {[...fancyImgs, ...fancyImgs].map((image, index) => (
                    <ImageTrailItem key={index}>
                        <div className="h-100 w-100 sm:w-50 sm:h-50 relative overflow-hidden">
                            <img src={image.url} alt="image" className="w-full h-full object-cover" />
                        </div>
                    </ImageTrailItem>
                ))}
            </ImageTrail>

            <div className="flex gap-10 items-center absolute bottom-0 w-full z-100 pointer-events-none px-10">
                <h1 style={{ fontSize: `30vh` }} className="font-bold tracking-tighter w-7xl leading-80 bg-linear-to-tr to-white from-[#333] bg-clip-text text-transparent">myResult
                    <span className="font-normal">®</span>
                </h1>

                <div className="w-sm flex flex-col gap-10">
                    <div>
                        <p>Transform passive learning into active remembering. Smriti AI helps you retain knowledge faster with AI-powered study tools and spaced repetition.</p>
                    </div>
                    <div className="flex items-center justify-end rounded-full p-1  py-1 w-50 bg-white text-bg gap-3 ">
                        <h1 className="font-semibold tracking-tight text-lg">See Your Result</h1>
                        <div className="bg-bg text-white flex items-center justify-center rounded-full aspect-square w-10">
                            <i className="ph ph-arrow-right"></i>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default ImageTrailDemo