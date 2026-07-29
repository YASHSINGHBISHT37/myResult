import { fancyImgs } from "@/data/FancyImgs"
import ImageTrail, { ImageTrailItem, } from "@/components/fancy/image/image-trail"

export default function Cursor() {
    return (
        <ImageTrail
            threshold={10}
            keyframes={{ opacity: [0, 1, 1, 0], scale: [1, 1, 0] }}
            keyframesOptions={{
                opacity: { duration: 1, times: [0, 0.001, 0.9, 1] },
                scale: { duration: 1, times: [0, 0.5, 1] },
            }}
            repeatChildren={1}>
            {[...fancyImgs, ...fancyImgs].map((image, index) => (
                <ImageTrailItem key={index}>
                    <div className="sm:w-6 sm:h-6 relative overflow-hidden">
                        <img src={image.url} alt="image" className="w-full h-full object-cover" />
                    </div>
                </ImageTrailItem>
            ))}
        </ImageTrail>

    )
}
