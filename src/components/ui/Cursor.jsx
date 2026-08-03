import ImageTrail, { ImageTrailItem, } from "@/components/fancy/image/image-trail"

export default function Cursor() {

    const imgs = [1, 2, 3, 6, 7, 4, 5]
    return (
        <ImageTrail
            threshold={10}
            keyframes={{ opacity: [0, 1, 1, 0], scale: [1, 1, 0] }}
            keyframesOptions={{
                opacity: { duration: 1, times: [0, 0.001, 0.9, 1] },
                scale: { duration: 1, times: [0, 0.5, 1] },
            }}
            repeatChildren={1}>
            {[...imgs, ...imgs].map((img, index) => (
                <ImageTrailItem key={index}>
                    <div className="sm:w-6 sm:h-6 relative overflow-hidden">
                        <img src={`/trail-images/${img}.png`} alt="image" className="w-full h-full object-cover" />
                    </div>
                </ImageTrailItem>
            ))}
        </ImageTrail>

    )
}
