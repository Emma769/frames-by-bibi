import { useEffect } from "react";

export default function useEscape(close: () => void) {
  useEffect(() => {
    function handleClose(e: KeyboardEvent) {
      if (e.key === "Escape") {
        close();
        return;
      }
    }

    document.body.addEventListener("keydown", handleClose);

    return () => document.body.removeEventListener("keydown", handleClose);
  }, []);
}
