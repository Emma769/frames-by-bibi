import { useEffect, type RefObject } from "react";

export default function useClickOutside(
  target: RefObject<HTMLElement | null>,
  source: RefObject<HTMLElement | null>,
  close: () => void
) {
  useEffect(() => {
    function handleClose(e: MouseEvent) {
      if (e.target instanceof HTMLElement) {
        if (
          !target.current?.contains(e.target) &&
          !source.current?.contains(e.target)
        ) {
          close();
          return;
        }
      }
    }

    document.body.addEventListener("click", handleClose);

    return () => document.body.removeEventListener("click", handleClose);
  }, []);
}
