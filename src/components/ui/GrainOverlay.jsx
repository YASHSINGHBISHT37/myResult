"use client";
import { useEffect, useRef, useState } from "react";

function GrainOverlay() {
  const canvasRef = useRef(null);
  const patternCanvasRef = useRef(null);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(0);
  const [opacity, setOpacity] = useState(0.06);
  const [fps, setFps] = useState(10);

  const opacityRef = useRef(opacity);
  const fpsRef = useRef(fps);
  useEffect(() => { opacityRef.current = opacity; }, [opacity]);
  useEffect(() => { fpsRef.current = fps; }, [fps]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const patternSize = 128;
    const patternCanvas = document.createElement("canvas");
    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;
    patternCanvasRef.current = patternCanvas;
    const pctx = patternCanvas.getContext("2d");

    const drawNoise = () => {
      const imageData = pctx.createImageData(patternSize, patternSize);
      const buffer = imageData.data;
      for (let i = 0; i < buffer.length; i += 4) {
        const val = Math.random() * 255;
        buffer[i] = val;
        buffer[i + 1] = val;
        buffer[i + 2] = val;
        buffer[i + 3] = 255;
      }
      pctx.putImageData(imageData, 0, 0);
      const pattern = ctx.createPattern(patternCanvas, "repeat");
      ctx.globalAlpha = opacityRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const loop = (time) => {
      const interval = 1000 / fpsRef.current;
      if (time - lastTimeRef.current >= interval) {
        drawNoise();
        lastTimeRef.current = time;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 z-9999999 pointer-events-none mix-blend-overlay" />

      {/* <div className="fixed bottom-3 left-3 z-10000 flex flex-col font-sans text-[13px] text-white">
        <label className="flex items-center gap-1">
          Opacity :
          <input type="range" min={0} max={0.3} step={0.01} value={opacity} onChange={(e) => setOpacity(parseFloat(e.target.value))} className="" />
        </label>
        <label className="flex items-center gap-1">
          Speed(fps) :
          <input type="range" min={5} max={60} step={1} value={fps} onChange={(e) => setFps(parseFloat(e.target.value))} className="accent-[#ffcc00]" />
        </label>
      </div> */}
    </>
  );
}

export default GrainOverlay;