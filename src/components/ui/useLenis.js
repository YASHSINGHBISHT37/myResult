import { useEffect, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

function useLenis() {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    if (window.lenis) return;

    const wrapper = document.querySelector("#scroll-wrapper");
    const content = document.querySelector("#scroll-content");

    const lenisInstance = new Lenis({
      wrapper,   // ← inner scrollable div
      content,   // ← uska direct child
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    window.lenis = lenisInstance;
    setLenis(lenisInstance);

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
      window.lenis = null;
      setLenis(null);
    };
  }, []);

  return lenis;
}

export default useLenis;