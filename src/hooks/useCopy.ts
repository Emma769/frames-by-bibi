import { useEffect, useState } from "react";

export default function useCopy() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async (value: string) => {
    await navigator.clipboard.writeText(value || "");
    setIsCopied(true);
  };

  useEffect(() => {
    if (isCopied) {
      let timeout = setTimeout(() => setIsCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  return {
    isCopied,
    handleCopy,
  };
}
