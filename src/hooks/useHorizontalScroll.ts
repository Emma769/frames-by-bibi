import { useEffect, useRef, useState } from "react";

export default function useHorizontalScroll<T extends HTMLElement>(
  dist: number
) {
  const scrollRef = useRef<T | null>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScrollLeft = () => {
    scrollRef.current?.scrollBy({
      behavior: "smooth",
      left: dist,
    });
  };

  const handleScrollRight = () => {
    scrollRef.current?.scrollBy({
      behavior: "smooth",
      left: -dist,
    });
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      setIsAtStart(scrollLeft <= 2);

      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 2);
    }
  };

  useEffect(() => {
    scrollRef.current?.addEventListener("scroll", handleScroll);
    return () => scrollRef.current?.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollRef, handleScrollLeft, handleScrollRight, isAtEnd, isAtStart };
}
