import { useState, useEffect } from "react";

/**

 * Custom hook for carousel/rotation functionality

 * Auto-rotates items and allows manual selection

 */

export function useCarousel(itemCount: number, autoPlayInterval: number = 4800) {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentIndex((prev) => (prev + 1) % itemCount);

    }, autoPlayInterval);

    return () => clearInterval(timer);

  }, [itemCount, autoPlayInterval]);

  const goToSlide = (index: number) => {

    setCurrentIndex(index % itemCount);

  };

  const nextSlide = () => {

    setCurrentIndex((prev) => (prev + 1) % itemCount);

  };

  const prevSlide = () => {

    setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount);

  };

  return { currentIndex, goToSlide, nextSlide, prevSlide };

}
