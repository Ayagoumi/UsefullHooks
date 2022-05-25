/*
  The useClipboard() hook will help you interact with the browser's 
  navigator.clipboard property in order to copy text to the user's clipboard.
*/

import { useState } from "react";

export function useClipboard({ timeout = 500 } = {}) {
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copyTimeout, setCopyTimeout] = useState(null);

  const handleCopyResult = (value) => {
    clearTimeout(copyTimeout);
    setCopyTimeout(setTimeout(() => setCopied(false), timeout));
    setCopied(value);
  };

  const copy = (value) => {
    if ("clipboard" in navigator) {
      navigator.clipboard
        .writeText(value)
        .then(() => handleCopyResult(true))
        .catch((err) => setError(err));
    } else setError(new Error("Error: navigator.clipboard is not supported"));
  };

  const reset = () => {
    setError(null);
    setCopied(false);
    clearTimeout(copyTimeout);
  };

  return { copy, reset, error, copied };
}
