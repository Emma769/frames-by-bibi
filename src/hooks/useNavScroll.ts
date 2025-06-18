import { useEffect, useState, type RefObject } from "react";

export default function useNavScroll({
  navRef,
}: {
  navRef: RefObject<HTMLElement | null>;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [navHeight, setNavHeight] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleShow = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setIsVisible(true);
      } else if (currentScrollY > prevScrollY) {
        if (currentScrollY > navHeight) {
          setIsVisible(false);
        }
      } else if (currentScrollY < prevScrollY) {
        setIsVisible(true);
      }
      setPrevScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleShow);
    return () => window.removeEventListener("scroll", handleShow);
  }, [navHeight, prevScrollY]);

  return [isVisible];
}
