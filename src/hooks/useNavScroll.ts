import { useEffect, useState } from "react";

export default function useNavScroll() {
  const [direction, setDirection] = useState<"up" | "down">("down");
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let scrollY = window.scrollY;

      if (scrollY && scrollY > prevScrollY && scrollY > 104) {
        setDirection("up");
      } else if (scrollY < prevScrollY) {
        setDirection("down");
      }

      setPrevScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return { direction };
}
