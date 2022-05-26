/*
  useRenderCount hook - is used to get the number of times a component has been rendered
  Example:
    const renderCount = useRenderCount()
*/

import { useEffect, useRef } from "react";

export default function useRenderCount() {
  const count = useRef(1);
  useEffect(() => count.current++);
  return count.current;
}
