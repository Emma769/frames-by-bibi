import { useEffect, type RefObject } from "react";

export default function useClickOutside({
  target,
  trigger,
  show,
  close,
}: {
  close: () => void;
  show: boolean;
  target: RefObject<HTMLElement | null>;
  trigger: RefObject<HTMLElement | null>;
}) {
  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        if (
          show &&
          !target.current?.contains(e.target) &&
          !trigger.current?.contains(e.target)
        ) {
          close();
          return;
        }
      }
    };

    document.body.addEventListener("click", handleClose);
    return () => document.body.removeEventListener("click", handleClose);
  }, [show]);
}
