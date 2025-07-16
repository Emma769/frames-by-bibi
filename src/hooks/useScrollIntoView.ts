import { useEffect, useRef } from "react";

export default function useScrollIntoView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    ref.current?.scrollIntoView();
  }, []);

  return ref;
}
