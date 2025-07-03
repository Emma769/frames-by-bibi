import { useState } from "react";

export default function useToggle() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);
  const off = () => setOpen(false);
  const on = () => setOpen(true);
  return [open, toggle, off, on] as const;
}
