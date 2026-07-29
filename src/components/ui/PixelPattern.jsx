"use client";

import { useEffect, useRef } from "react";

export default function PixelPattern({ src, pixelSize = 12, className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = src;
    img.crossOrigin = "anonymous";

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw original image on an offscreen canvas to read pixel data
      const offCanvas = document.createElement("canvas");
      offCanvas.width = img.width;
      offCanvas.height = img.height;
      const offCtx = offCanvas.getContext("2d");
      offCtx.drawImage(img, 0, 0);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let y = 0; y < img.height; y += pixelSize) {
        for (let x = 0; x < img.width; x += pixelSize) {
          const data = offCtx.getImageData(x, y, 1, 1).data;
          const [r, g, b, a] = data;

          // Skip fully transparent pixels
          if (a === 0) continue;

          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a / 255})`;
          ctx.fillRect(x, y, pixelSize, pixelSize);
        }
      }
    };
  }, [src, pixelSize]);

  return <canvas ref={canvasRef} className={className} />;
}