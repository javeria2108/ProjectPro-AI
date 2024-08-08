import { MutableRefObject, useEffect } from "react";
import { useAnimation, AnimationControls } from "framer-motion";

export const useScrollAnimation = (ref: MutableRefObject<HTMLElement | null>): AnimationControls => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const top = ref.current.getBoundingClientRect().top;
      const bottom = ref.current.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (top <= windowHeight && bottom >= 0) {
        controls.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, ref]);

  return controls;
};
