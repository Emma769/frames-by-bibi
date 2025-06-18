import { useCallback, useState } from "react";

export default function useToggle() {
  const [active, setActive] = useState(false);

  const toggle = useCallback(() => setActive((prev) => !prev), []);
  const handleFalse = useCallback(() => setActive(false), []);
  const handleTrue = useCallback(() => setActive(true), []);

  return [active, toggle, handleFalse, handleTrue] as const;
}
