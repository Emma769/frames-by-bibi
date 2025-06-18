import { useEffect } from "react";

export default function useEscape({ close }: { close: () => void }) {
  useEffect(() => {
    const handleClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };
    document.body.addEventListener("keydown", handleClose);
    return () => document.body.removeEventListener("keydown", handleClose);
  }, []);
}
