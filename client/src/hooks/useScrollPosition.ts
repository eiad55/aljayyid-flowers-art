import { useState, useEffect } from "react";

/**

 * Custom hook to track scroll position with throttling

 * Prevents excessive re-renders by using requestAnimationFrame

 */

export function useScrollPosition() {

  const [scrollY, setScrollY] = useState(0);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

    let animationFrameId: number;

    let lastScrollY = 0;

    const handleScroll = () => {

      lastScrollY = window.scrollY;

      animationFrameId = requestAnimationFrame(() => {

        setScrollY(lastScrollY);

        setIsScrolled(lastScrollY > 60);

      });

    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {

      window.removeEventListener("scroll", handleScroll);

      if (animationFrameId) {

        cancelAnimationFrame(animationFrameId);

      }

    };

  }, []);

  return { scrollY, isScrolled };

}
